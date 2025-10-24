class TOCManager {
    constructor() {
        this.tocSidebar = null;
        this.isCollapsed = false;
        this.headings = [];
        this.init();
    }

    init() {
        this.createTOCSidebar();
        this.extractHeadings();
        this.renderTOC();
        this.setupEventListeners();
        this.setupScrollSpy();
    }

    createTOCSidebar() {
        this.tocSidebar = document.createElement('div');
        this.tocSidebar.className = 'toc-sidebar';
        this.tocSidebar.innerHTML = `
            <div class="toc-header">
                <h3 class="toc-title">📑 目录</h3>
                <button class="toc-toggle">📌</button>
            </div>
            <ul class="toc-list"></ul>
        `;
        document.body.appendChild(this.tocSidebar);
    }

    extractHeadings() {
        const article = document.querySelector('article');
        if (!article) return;

        this.headings = Array.from(article.querySelectorAll('h1, h2, h3, h4, h5, h6'))
            .filter(heading => {
                // 跳过导航标题等
                return !heading.closest('header') && !heading.closest('nav');
            })
            .map(heading => {
                const level = parseInt(heading.tagName.substring(1));
                const text = heading.textContent.trim();
                
                // 确保标题有ID
                if (!heading.id) {
                    heading.id = this.generateHeadingId(text);
                }
                
                return {
                    element: heading,
                    level: level,
                    text: text,
                    id: heading.id
                };
            });
    }

    generateHeadingId(text) {
        return text
            .toLowerCase()
            .replace(/[^\w\u4e00-\u9fa5]+/g, '-')
            .replace(/^-+|-+$/g, '');
    }

    renderTOC() {
        const tocList = this.tocSidebar.querySelector('.toc-list');
        
        if (this.headings.length === 0) {
            tocList.innerHTML = '<li class="toc-item"><span class="toc-link">暂无标题</span></li>';
            return;
        }

        tocList.innerHTML = this.headings.map(heading => `
            <li class="toc-item">
                <a href="#${heading.id}" 
                   class="toc-link toc-level-${heading.level}"
                   data-level="${heading.level}">
                    ${this.escapeHtml(heading.text)}
                </a>
            </li>
        `).join('');
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    setupEventListeners() {
        const toggleBtn = this.tocSidebar.querySelector('.toc-toggle');
        
        toggleBtn.addEventListener('click', () => {
            this.toggleTOC();
        });

        // 点击TOC链接平滑滚动
        this.tocSidebar.addEventListener('click', (e) => {
            if (e.target.classList.contains('toc-link')) {
                e.preventDefault();
                const targetId = e.target.getAttribute('href').substring(1);
                this.scrollToHeading(targetId);
                
                // 移动端点击后自动收起
                if (window.innerWidth <= 768 && this.tocSidebar.classList.contains('expanded')) {
                    this.toggleTOC();
                }
            }
        });

        // 响应式处理
        window.addEventListener('resize', () => {
            this.handleResponsive();
        });

        this.handleResponsive();
    }

    toggleTOC() {
        if (window.innerWidth <= 768) {
            // 移动端切换展开/收起
            this.tocSidebar.classList.toggle('expanded');
            this.tocSidebar.querySelector('.toc-toggle').textContent = 
                this.tocSidebar.classList.contains('expanded') ? '✕' : '📑';
        } else {
            // 桌面端切换折叠/展开
            this.isCollapsed = !this.isCollapsed;
            this.tocSidebar.classList.toggle('collapsed', this.isCollapsed);
            this.tocSidebar.querySelector('.toc-toggle').textContent = 
                this.isCollapsed ? '📑' : '📌';
        }
    }

    handleResponsive() {
        if (window.innerWidth <= 768) {
            this.tocSidebar.classList.add('collapsed');
            this.tocSidebar.classList.remove('expanded');
            this.tocSidebar.querySelector('.toc-toggle').textContent = '📑';
        } else {
            this.tocSidebar.classList.remove('collapsed', 'expanded');
            this.tocSidebar.querySelector('.toc-toggle').textContent = 
                this.isCollapsed ? '📑' : '📌';
        }
    }

    scrollToHeading(headingId) {
        const heading = document.getElementById(headingId);
        if (heading) {
            const offsetTop = heading.getBoundingClientRect().top + window.pageYOffset - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    }

    setupScrollSpy() {
        let ticking = false;

        const updateActiveLink = () => {
            let currentActive = null;
            let maxBottom = -Infinity;

            this.headings.forEach(heading => {
                const rect = heading.element.getBoundingClientRect();
                const bottom = rect.bottom;

                // 如果标题在视口中部或上部，且是最接近视口顶部的
                if (rect.top <= 150 && bottom > maxBottom) {
                    maxBottom = bottom;
                    currentActive = heading.id;
                }
            });

            // 更新激活状态
            this.tocSidebar.querySelectorAll('.toc-link').forEach(link => {
                link.classList.toggle('active', link.getAttribute('href') === `#${currentActive}`);
            });
        };

        const onScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    updateActiveLink();
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', onScroll);
        // 初始更新一次
        updateActiveLink();
    }
}

// 等待页面加载完成后初始化TOC
document.addEventListener('DOMContentLoaded', () => {
    // 等待MathJax渲染完成后再生成TOC
    if (typeof MathJax !== 'undefined') {
        MathJax.startup.promise.then(() => {
            new TOCManager();
        });
    } else {
        new TOCManager();
    }
});

// 处理动态内容（如图片懒加载后）
window.addEventListener('load', () => {
    // 重新提取标题，确保包含动态加载的内容
    if (window.tocManager) {
        window.tocManager.extractHeadings();
        window.tocManager.renderTOC();
    }
});

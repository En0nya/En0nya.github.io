class TOCManager {
    constructor() {
        this.tocSidebar = null;
        this.headings = [];
        this.isCollapsed = false;
        this.scrollTimeout = null;
        this.init();
    }

    init() {
        console.log('Initializing TOC...');
        
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.initializeTOC());
        } else {
            setTimeout(() => this.initializeTOC(), 100);
        }
    }

    initializeTOC() {
        try {
            this.createTOCSidebar();
            this.extractHeadings();
            
            if (this.headings.length > 0) {
                this.renderTOC();
                this.setupEventListeners();
                this.setupScrollSpy();
                console.log(`TOC initialized with ${this.headings.length} headings`);
            } else {
                this.hideTOC();
                console.log('No headings found for TOC');
            }
        } catch (error) {
            console.error('TOC initialization failed:', error);
        }
    }

    createTOCSidebar() {
        if (document.querySelector('.toc-sidebar')) {
            this.tocSidebar = document.querySelector('.toc-sidebar');
            return;
        }

        this.tocSidebar = document.createElement('div');
        this.tocSidebar.className = 'toc-sidebar';
        this.tocSidebar.innerHTML = `
            <div class="toc-header">
                <h3 class="toc-title">📑 目录</h3>
                <button class="toc-toggle" aria-label="切换目录">📌</button>
            </div>
            <div class="toc-content">
                <ul class="toc-list"></ul>
            </div>
        `;
        document.body.appendChild(this.tocSidebar);
    }

    extractHeadings() {
        const article = document.querySelector('article');
        if (!article) {
            console.warn('No article element found');
            return;
        }

        this.headings = Array.from(article.querySelectorAll('h1, h2, h3, h4, h5, h6'))
            .filter(heading => {
                return !heading.closest('header') && 
                       !heading.closest('nav') && 
                       !heading.closest('.toc-sidebar') &&
                       heading.textContent.trim().length > 0;
            })
            .map((heading, index) => {
                const level = parseInt(heading.tagName.substring(1));
                const text = heading.textContent.trim();
                
                let id = heading.id;
                if (!id || id === '') {
                    id = this.generateStableId(text, index);
                    heading.id = id;
                }
                
                return {
                    element: heading,
                    level: Math.min(level, 6),
                    text: text,
                    id: id
                };
            });

        console.log(`Found ${this.headings.length} headings for TOC`);
    }

    generateStableId(text, index) {
        const baseId = text
            .toLowerCase()
            .replace(/[^a-z0-9\u4e00-\u9fa5]/g, '-')
            .replace(/-+/g, '-')
            .replace(/^-|-$/g, '')
            .substring(0, 50);
        
        return baseId || `heading-${index + 1}`;
    }

    renderTOC() {
        const tocList = this.tocSidebar.querySelector('.toc-list');
        if (!tocList) return;

        const fragment = document.createDocumentFragment();
        
        this.headings.forEach(heading => {
            const li = document.createElement('li');
            li.className = 'toc-item';
            
            const a = document.createElement('a');
            a.href = `#${heading.id}`;
            a.className = `toc-link toc-level-${heading.level}`;
            a.setAttribute('data-level', heading.level);
            a.textContent = heading.text;
            
            li.appendChild(a);
            fragment.appendChild(li);
        });

        tocList.innerHTML = '';
        tocList.appendChild(fragment);
    }

    setupEventListeners() {
        // 修复：将点击事件绑定到整个TOC侧边栏
        this.tocSidebar.addEventListener('click', (e) => {
            // 如果点击的是TOC链接，执行滚动
            if (e.target.classList.contains('toc-link')) {
                e.preventDefault();
                const targetId = e.target.getAttribute('href').substring(1);
                this.scrollToHeading(targetId);
                
                // 移动端点击链接后自动收起
                if (window.innerWidth <= 768 && this.tocSidebar.classList.contains('expanded')) {
                    setTimeout(() => this.toggleTOC(), 300);
                }
            }
            // 修复：如果侧边栏处于折叠状态，点击任何地方都触发展开/收起
            else if (this.tocSidebar.classList.contains('collapsed') || 
                    (window.innerWidth <= 768 && !this.tocSidebar.classList.contains('expanded'))) {
                this.toggleTOC();
            }
        });

        // 原有的toggle按钮仍然保留功能
        const toggleBtn = this.tocSidebar.querySelector('.toc-toggle');
        if (toggleBtn) {
            toggleBtn.addEventListener('click', (e) => {
                e.stopPropagation(); // 防止事件冒泡
                this.toggleTOC();
            });
        }

        // 防抖的resize处理
        window.addEventListener('resize', () => {
            clearTimeout(this.resizeTimeout);
            this.resizeTimeout = setTimeout(() => this.handleResponsive(), 150);
        });

        this.handleResponsive();
    }

    toggleTOC() {
        if (window.innerWidth <= 768) {
            const isExpanded = this.tocSidebar.classList.toggle('expanded');
            // 移除按钮文本更新，使用CSS伪元素
        } else {
            this.isCollapsed = !this.isCollapsed;
            this.tocSidebar.classList.toggle('collapsed', this.isCollapsed);
            // 移除按钮文本更新，使用CSS伪元素
        }
    }

    handleResponsive() {
        if (window.innerWidth <= 768) {
            this.tocSidebar.classList.add('collapsed');
            this.tocSidebar.classList.remove('expanded');
        } else {
            this.tocSidebar.classList.remove('collapsed', 'expanded');
        }
    }

    scrollToHeading(headingId) {
        const heading = document.getElementById(headingId);
        if (!heading) {
            console.warn(`Heading not found: ${headingId}`);
            return;
        }

        const offsetTop = heading.getBoundingClientRect().top + window.pageYOffset - 100;
        
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }

    setupScrollSpy() {
        if ('IntersectionObserver' in window) {
            this.setupIntersectionObserver();
        } else {
            this.setupLegacyScrollSpy();
        }
    }

    setupIntersectionObserver() {
        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -70% 0px',
            threshold: 0
        };

        this.observer = new IntersectionObserver((entries) => {
            let mostVisibleHeading = null;
            let maxRatio = 0;

            entries.forEach(entry => {
                if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
                    maxRatio = entry.intersectionRatio;
                    mostVisibleHeading = entry.target.id;
                }
            });

            if (mostVisibleHeading) {
                this.updateActiveLink(mostVisibleHeading);
            }
        }, observerOptions);

        this.headings.forEach(heading => {
            this.observer.observe(heading.element);
        });
    }

    setupLegacyScrollSpy() {
        const updateActiveLink = () => {
            let currentActive = null;
            let minDistance = Infinity;

            this.headings.forEach(heading => {
                const rect = heading.element.getBoundingClientRect();
                const distanceFromTop = Math.abs(rect.top - 100);

                if (rect.top <= 150 && distanceFromTop < minDistance) {
                    minDistance = distanceFromTop;
                    currentActive = heading.id;
                }
            });

            if (currentActive) {
                this.updateActiveLink(currentActive);
            }
        };

        window.addEventListener('scroll', () => {
            if (this.scrollTimeout) {
                cancelAnimationFrame(this.scrollTimeout);
            }
            this.scrollTimeout = requestAnimationFrame(updateActiveLink);
        });

        updateActiveLink();
    }

    updateActiveLink(activeId) {
        const links = this.tocSidebar.querySelectorAll('.toc-link');
        links.forEach(link => {
            const isActive = link.getAttribute('href') === `#${activeId}`;
            link.classList.toggle('active', isActive);
        });
    }

    hideTOC() {
        if (this.tocSidebar) {
            this.tocSidebar.style.display = 'none';
        }
    }

    destroy() {
        if (this.observer) {
            this.observer.disconnect();
        }
        if (this.tocSidebar && this.tocSidebar.parentNode) {
            this.tocSidebar.parentNode.removeChild(this.tocSidebar);
        }
    }
}

// 初始化逻辑
function initializeTOC() {
    if (typeof MathJax !== 'undefined' && MathJax.startup) {
        MathJax.startup.promise
            .then(() => {
                console.log('MathJax ready, initializing TOC...');
                window.tocManager = new TOCManager();
            })
            .catch(error => {
                console.warn('MathJax failed, initializing TOC anyway:', error);
                window.tocManager = new TOCManager();
            });
    } else {
        setTimeout(() => {
            window.tocManager = new TOCManager();
        }, 500);
    }
}

// 多种初始化方式确保执行
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeTOC);
} else {
    initializeTOC();
}

window.addEventListener('load', () => {
    if (!window.tocManager) {
        setTimeout(initializeTOC, 1000);
    }
});

window.TOCManager = TOCManager;

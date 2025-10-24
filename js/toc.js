class TOCManager {
    constructor() {
        this.tocSidebar = null;
        this.isCollapsed = false;
        this.headings = [];
        this.scrollTimeout = null;
        this.init();
    }

    init() {
        // 延迟初始化，确保 DOM 完全加载
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
            } else {
                this.hideTOC(); // 没有标题时隐藏
            }
        } catch (error) {
            console.error('TOC initialization failed:', error);
        }
    }

    createTOCSidebar() {
        // 检查是否已存在 TOC
        if (document.querySelector('.toc-sidebar')) {
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
            console.warn('No article element found for TOC');
            return;
        }

        // 使用更高效的选择器
        const headingElements = article.querySelectorAll('h1, h2, h3, h4, h5, h6');
        
        this.headings = Array.from(headingElements)
            .filter(heading => {
                // 跳过导航和页眉中的标题
                return !heading.closest('header') && 
                       !heading.closest('nav') && 
                       !heading.closest('.toc-sidebar') &&
                       heading.textContent.trim().length > 0;
            })
            .map((heading, index) => {
                const level = parseInt(heading.tagName.substring(1));
                const text = heading.textContent.trim();
                
                // 生成稳定的 ID
                let id = heading.id;
                if (!id || id === '') {
                    id = this.generateStableId(text, index);
                    heading.id = id;
                }
                
                return {
                    element: heading,
                    level: Math.min(level, 6), // 确保级别不超过6
                    text: text,
                    id: id
                };
            });

        console.log(`Found ${this.headings.length} headings for TOC`);
    }

    generateStableId(text, index) {
        // 更健壮的 ID 生成，避免特殊字符问题
        const baseId = text
            .toLowerCase()
            .replace(/[^a-z0-9\u4e00-\u9fa5]/g, '-')
            .replace(/-+/g, '-')
            .replace(/^-|-$/g, '')
            .substring(0, 50); // 限制长度
        
        return baseId || `heading-${index + 1}`;
    }

    renderTOC() {
        const tocList = this.tocSidebar.querySelector('.toc-list');
        if (!tocList) return;

        // 使用 DocumentFragment 提高性能
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

        tocList.innerHTML = ''; // 清空现有内容
        tocList.appendChild(fragment);
    }

    setupEventListeners() {
        const toggleBtn = this.tocSidebar.querySelector('.toc-toggle');
        
        toggleBtn.addEventListener('click', () => {
            this.toggleTOC();
        });

        // 使用事件委托提高性能
        this.tocSidebar.addEventListener('click', (e) => {
            if (e.target.classList.contains('toc-link')) {
                e.preventDefault();
                const targetId = e.target.getAttribute('href').substring(1);
                this.scrollToHeading(targetId);
                
                if (window.innerWidth <= 768 && this.tocSidebar.classList.contains('expanded')) {
                    setTimeout(() => this.toggleTOC(), 300);
                }
            }
        });

        // 防抖的 resize 处理
        window.addEventListener('resize', () => {
            clearTimeout(this.resizeTimeout);
            this.resizeTimeout = setTimeout(() => this.handleResponsive(), 150);
        });

        this.handleResponsive();
    }

	toggleTOC() {
		if (window.innerWidth <= 768) {
			const isExpanded = this.tocSidebar.classList.toggle('expanded');
			// 移除按钮文本更新，因为现在使用 CSS 伪元素
		} else {
			this.isCollapsed = !this.isCollapsed;
			this.tocSidebar.classList.toggle('collapsed', this.isCollapsed);
			// 移除按钮文本更新
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
        // 使用 Intersection Observer 替代 scroll 事件，性能更好
        if ('IntersectionObserver' in window) {
            this.setupIntersectionObserver();
        } else {
            this.setupLegacyScrollSpy();
        }
    }

    setupIntersectionObserver() {
        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -70% 0px', // 调整触发区域
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

        // 观察所有标题
        this.headings.forEach(heading => {
            this.observer.observe(heading.element);
        });
    }

    setupLegacyScrollSpy() {
        // 回退方案：使用防抖的 scroll 事件
        const updateActiveLink = () => {
            let currentActive = null;
            let minDistance = Infinity;

            this.headings.forEach(heading => {
                const rect = heading.element.getBoundingClientRect();
                const distanceFromTop = Math.abs(rect.top - 100); // 距离视口顶部的距离

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

        // 初始更新
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

// 增强的初始化逻辑
function initializeTOC() {
    // 等待 MathJax 完成（如果存在）
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
        // 没有 MathJax，直接初始化
        setTimeout(() => {
            window.tocManager = new TOCManager();
        }, 500); // 给 DOM 更多时间加载
    }
}

// 多种初始化方式确保执行
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeTOC);
} else {
    initializeTOC();
}

// 处理动态内容加载
window.addEventListener('load', () => {
    // 如果 TOC 还没有初始化，现在初始化
    if (!window.tocManager) {
        setTimeout(initializeTOC, 1000);
    }
});

// 导出给其他脚本使用
window.TOCManager = TOCManager;

class ToTopButton {
constructor() {
	this.button = null;
	this.isVisible = false;
	this.scrollThreshold = 300; // 滚动多少像素后显示按钮
	this.init();
}

init() {
	this.createButton();
	this.setupEventListeners();
	this.checkScrollPosition(); // 初始检查
}

createButton() {
	this.button = document.createElement('button');
	this.button.className = 'to-top-btn hidden';
	this.button.innerHTML = '↑';
	this.button.setAttribute('aria-label', '回到顶部');
	this.button.setAttribute('title', '回到顶部');
	
	document.body.appendChild(this.button);
}

setupEventListeners() {
	// 点击事件
	this.button.addEventListener('click', () => {
		this.scrollToTop();
	});

	// 滚动事件 - 使用防抖优化性能
	let scrollTimeout;
	window.addEventListener('scroll', () => {
		if (scrollTimeout) {
			cancelAnimationFrame(scrollTimeout);
		}
		scrollTimeout = requestAnimationFrame(() => {
			this.checkScrollPosition();
		});
	});

	// 窗口大小变化时重新计算位置
	window.addEventListener('resize', () => {
		this.handleResponsive();
	});
}

checkScrollPosition() {
	const scrollY = window.scrollY || document.documentElement.scrollTop;
	
	if (scrollY > this.scrollThreshold && !this.isVisible) {
		this.showButton();
	} else if (scrollY <= this.scrollThreshold && this.isVisible) {
		this.hideButton();
	}
}

showButton() {
	this.button.classList.remove('hidden');
	this.button.classList.add('visible');
	this.isVisible = true;
}

hideButton() {
	this.button.classList.remove('visible');
	this.button.classList.add('hidden');
	this.isVisible = false;
}

scrollToTop() {
	window.scrollTo({
		top: 0,
		behavior: 'smooth'
	});
	
	// 可选：点击后隐藏按钮
	// setTimeout(() => this.hideButton(), 300);
}

handleResponsive() {
	// 移动端调整位置
	if (window.innerWidth <= 768) {
		this.button.style.bottom = '80px';
	} else {
		this.button.style.bottom = '20px';
	}
}

// 可选：销毁方法
destroy() {
	if (this.button && this.button.parentNode) {
		this.button.parentNode.removeChild(this.button);
	}
}
}

// 初始化 TO TOP 按钮
function initializeToTopButton() {
// 等待页面加载完成
if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', () => {
		window.toTopButton = new ToTopButton();
	});
} else {
	window.toTopButton = new ToTopButton();
}
}

// 自动初始化
initializeToTopButton();

// 导出供其他脚本使用
window.ToTopButton = ToTopButton;

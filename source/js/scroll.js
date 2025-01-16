const btn = document.getElementById("down-btn");
const target = document.getElementById("scr-target");

console.log('[info] scroll.js loaded!');

btn.addEventListener('click', () => {
    // 获取目标元素距离视口顶部的位置
    const targetPosition = target.getBoundingClientRect().top + window.scrollY;

    // 滚动到目标位置并偏移 30px
    window.scrollTo({
        top: targetPosition - 100, // 保留 30px 间距
        behavior: 'smooth' // 平滑滚动
    });
});

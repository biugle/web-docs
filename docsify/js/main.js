/*
 * @Author: HxB
 * @Date: 2023-02-13 18:23:03
 * @LastEditors: DoubleAm
 * @LastEditTime: 2023-02-15 15:12:07
 * @Description: 新增部分功能
 * @FilePath: \web_docs\docsify\js\main.js
 */
const VERSION = '1.0.0';

/** 主题模式切换 START **/
window.onload = () => {
  const themeType = window.localStorage.getItem('theme-type');
  if (!themeType) {
    return;
  }
  document.getElementById('theme-switch').type = themeType;
  const link = document.getElementById('theme-link');
  link.href = link.href.replace(link.href.includes('dark') ? 'dark' : 'light', themeType);
  setTimeout(obfuscated(), 1000);
};
document.getElementById('theme-switch').addEventListener('click', (e) => {
  const link = document.getElementById('theme-link');
  if (link.href.includes('dark')) {
    link.href = link.href.replace('dark', 'light');
    e.target.type = 'light';
    window.localStorage.setItem('theme-type', 'light');
  } else {
    link.href = link.href.replace('light', 'dark');
    e.target.type = 'dark';
    window.localStorage.setItem('theme-type', 'dark');
  }
});
/** 主题模式切换 END **/

/** 置顶 START **/
document.getElementById('back2top').addEventListener('click', (e) => {
  backToTopAnimate(window, 0);
});
function backToTopAnimate(obj, target, callback) {
  clearInterval(obj.timer);
  obj.timer = setInterval(function () {
    var step = (target - obj.scrollY) / 10;
    step = step > 0 ? Math.ceil(step) : Math.floor(step);
    if (obj.scrollY == target) {
      clearInterval(obj.timer);
      callback && callback();
    }
    window.scroll(0, obj.scrollY + step);
  }, 15);
}
window.addEventListener('scroll', function () {
  const div = this.document.getElementById('back2top');
  if (window.scrollY > 150) {
    div.style.display = 'block';
    div.style.opacity = 0.5;
  } else {
    div.style.display = 'none';
  }
});
/** 置顶 END **/

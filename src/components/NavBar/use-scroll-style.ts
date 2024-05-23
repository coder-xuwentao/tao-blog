import { useEffect } from 'react';

// 记录上一次滚动的位置
let lastScrollPos = 0;
let timerId;

// 全局滚动的盒子
const layoutContent: any = () => {
  return document.body;
};
// 全局导航盒子
const layoutNav: any = () => {
  return document.getElementById('layout_nav');
};

// 页面滚动事件
export const pageScroll = () => {
  if (!layoutNav() || !layoutContent()) return;
  timerId && clearTimeout(timerId);
  if (layoutContent().scrollTop && layoutContent().scrollTop > 50) {
    layoutNav().classList.add('nav_active');

    // 往上滚
    if (lastScrollPos - layoutContent()?.scrollTop > 30) {
      lastScrollPos = layoutContent()?.scrollTop;
      layoutNav()?.classList.remove('nav_none');
    }
    // 往下滚
    if (
      layoutContent().scrollTop > 30 &&
      layoutContent().scrollTop - lastScrollPos > 30
    ) {
      lastScrollPos = layoutContent()?.scrollTop;
      layoutNav()?.classList.add('nav_none');
    }
  } else {
    layoutNav()?.classList.remove('nav_active');
  }
  timerId = setTimeout(() => {
    layoutNav()?.classList.remove('nav_none');
  }, 100);
};

// 设置页面滚动事件
const bindHandleScroll = (callback?) => {
  if (!layoutContent()) return;
  layoutContent().addEventListener('scroll', callback || pageScroll, false);
};

// 卸载页面滚动事件
const removeScroll = (callback?) => {
  if (!layoutContent()) return;
  layoutContent().removeEventListener('scroll', callback || pageScroll, false);
  lastScrollPos = 0;
};

export default function useScrollStyle() {
  useEffect(() => {
    bindHandleScroll();
    return () => {
      removeScroll;
    };
  });
}

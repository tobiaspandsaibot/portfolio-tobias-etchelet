let scrollPosition = 0;

export function lockScroll() {
  scrollPosition = window.scrollY || document.documentElement.scrollTop;
  document.body.style.position = 'fixed';
  document.body.style.top = `-${scrollPosition}px`;
  document.body.style.overflow = 'hidden';
  document.body.style.width = '100%';
}

export function unlockScroll() {
  document.body.style.position = '';
  document.body.style.top = '';
  document.body.style.overflow = '';
  document.body.style.width = '';
  window.scrollTo(0, scrollPosition);
}

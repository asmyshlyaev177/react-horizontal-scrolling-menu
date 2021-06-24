interface Options extends IntersectionObserverInit {
  ratio: number;
  throttle: number;
}

export const observerOptions: Options = {
  rootMargin: '5px',
  threshold: [0.05, 0.5, 0.95],
  ratio: 0.95,
  throttle: 100,
};

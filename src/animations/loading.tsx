export const visibleVariants = {
  containerFadeIn: {
    x: '100vw',
    opacity: 0,
  },
  containerFadeOut: {
    x: '0',
    opacity: 1,
  },

  animateFadeIn: {
    x: '0',
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 0.61, 0.36, 1]
    }
  },
  animateFadeOut: {
    x: '-100vw',
    opacity: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 0.61, 0.36, 1]
    }
  },
};
export const keyframes = {
  'move-y': {
    to: {
      transform: 'translateY(0)'
    }
  },
  'fade-in-blur': {
    '0%': {
      opacity: '0',
      filter: 'blur(10px)'
    },
    '50%': {
      filter: 'blur(0)'
    },
    '100%': {
      opacity: '1'
    }
  },
  visibility: {
    to: {
      visibility: 'visible'
    }
  },
  zoom: {
    '0%': {
      transform: 'scale(0.2)'
    },
    '100%': {
      transform: 'scale(1)'
    }
  },
  'move-up': {
    '0%': {
      opacity: '0',
      transform: 'translateY(30px)'
    },
    '100%': {
      opacity: '1',
      transform: 'translateY(0)'
    }
  },
  'fade-in': {
    '0%': {
      opacity: '0'
    },
    '100%': {
      opacity: '1'
    }
  },
  'toast-in': {
    '0%': {
      opacity: '0',
      transform: 'translateX(100%)'
    },
    '30%': {
      opacity: '0.7',
      transform: 'translateX(-20px)'
    },
    '60%': {
      opacity: '1',
      transform: 'translateX(10px)'
    },
    '80%': {
      transform: 'translateX(-6px)'
    },
    '100%': {
      transform: 'translateX(0)'
    }
  },
  'toast-out': {
    '0%': {
      opacity: '1',
      transform: 'translateX(0)'
    },
    '50%': {
      opacity: '0.8',
      transform: 'translateX(-30px)'
    },
    '100%': {
      opacity: '0',
      transform: 'translateX(100%)'
    }
  },
  progress: {
    to: {
      width: '0'
    }
  }
}

tailwind.config = {
    theme: {
      colors:{
        'green': {
            100:'hsl(158, 36%, 37%)',
            200: '#1A4031'
        },
        'dark-blue': 'hsl(212, 21%, 14%)',
        'gray': 'hsl(228, 12%, 48%)',
        'white': {
            100: 'hsl(0, 0%, 100%)',
            200: 'hsl(30, 38%, 92%)'
        }
      },
      fontFamily: {
        'sans': ['Montserrat', 'sans-serif'],
        'serif': ['Fraunces', 'serif']
      },
      fontWeight: {
        'normal': 500,
        'bold': 700
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        'big': '2rem'
      },
      letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
      widest: '.1em',
      widest: '.25em',
    }
    }
  };
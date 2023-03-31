module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      'cyan' : '#5FB4A2',
      'white-grey' : '#FAFAFA',
      'dark-blue' : '#203A4C',
      'grey-blue' : '#33323D',
      'light-grey' : '#EAEAEB',
      'bright-red' : '#F43030'
    },
    fontFamily: {
      'fn' : ['IBARRA', 'cursive'],
      'ps' : ['PUBLIC', 'sans-serif']
    },
    fontSize: {
      'ibS' : ['2rem', '2.25rem'],
      'ibM' : ['2.5rem', '2.625rem'],
      'ibL' : ['3.125rem', '3.125rem'],
      'psS' : ['1rem', '1.875rem'],
      'psM' : ['0.938rem', '1.875rem']
    }
  },
  plugins: [],
}
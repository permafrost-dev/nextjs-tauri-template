const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: [ './src/**/*.{js,jsx,ts,tsx}' ],
    theme: {
        extend: {
            colors: { ...defaultTheme.colors },
            fontFamily: { sans: [ 'Nunito', ...defaultTheme.fontFamily.sans ] },
        },
    },
    plugins: [ require('@tailwindcss/aspect-ratio'), require('@tailwindcss/forms'), require('@tailwindcss/typography') ],
};

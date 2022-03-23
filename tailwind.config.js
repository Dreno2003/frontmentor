module.exports = {
    purge: [false],
    darkMode: false, // or 'media' or 'class'
    content: [
      "./index.html",
      "./src/**/*.{vue,js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    100: 'hsl(356, 100%, 66%)',
                    200: 'hsl(355, 100%, 74%)'
                },
                secondary: {
                    100: 'hsl(240, 10%, 16%)'
                },
                footblue: 'hsl(237, 17%, 21%)',
                infasblue: 'hsl(237, 23%, 32%)'
            },

            fontFamily: {
                pass: ['Overpass'],
                passTwo: ['Ubuntu']
            },

            height: {
                '98': '36em',
                '99': '39em',
                '71': '42.5em'
            },

            borderRadius: {
                'hero': '5.5rem'
            },

            width: {
                'di': '118%',
                '00': '81.5vw',
                'om': '85%',
                'mo': '139em',
                'ac': '42vw',
                'bv': '32.76em'
            },
            height: {
                'heroheight': '39.4em'
            },
            padding: {
                '72': ''
            },
            margin: {
                '-cd': '-15%',
                '-dc': '-20%',
                '-sc': '-29rem'
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
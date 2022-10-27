/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.{html,js}","./node_modules/flowbite/**/*.js"],
    theme: {
        extend: {
            fontFamily:{
                'inter':['Inter', 'sans-serif'],
                'miniver':['Miniver', 'cursive'],
                'Helvetica':['Helvetica'],
            },

            
            container:{
                center:true,
                padding:'0px',
                screens:{
                    'sm': "512px",
                    'md': "720px",
                    'lg': "1024px",
                    'xl': "1140px",
                    '2xl': "1320px"
                }
            },
           
        },
      },
  plugins: [
    require('flowbite/plugin'),
    require('tailwindcss/plugin')
]
}

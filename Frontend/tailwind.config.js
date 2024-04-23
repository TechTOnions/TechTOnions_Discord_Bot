/** @type {import('tailwindcss').Config} */
export default {
  content: [
	    "./src/**/*.{js,ts,jsx,tsx}",
	    "./index.html"
  ],
  theme: {
    
    fontFamily:{
      main:["Jost", "sans-serif" ]
    },
    extend: {
      colors:{
        'navColor':"#1b2028",
        'sideColor':"#22242f",
        'mainColor':"#212831",
        'lightbg':'#272B33',
        'hoverbg':'#32373E',
        'dropdownbg':'#181F25',
        'sidebarHead':'#383d45',
        'blueHead':'#41bbff',
        'cardBox':'#293039',
        'LevelBox':"#17181e"
      },
      
    },
  },
  plugins: [],
}
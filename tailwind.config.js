/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    extend: {
      backgroundImage:  {
        'usa': 'https://www.flaticon.com/free-icon/united-states-of-america_323310?term=usa%20flag&page=1&position=3&page=1&position=3&related_id=323310&origin=tag',
        'imageone': "url('/src/Resources/EWS_Loudenv22_066A3809-resized-3-1.jpg')",
        'imagetwo': "url('/src/Resources/2021-hondaoffroad-maxxis-razrmt-banner-1920x1018.jpg')",
        'imagethree': "url('/src/Resources/Maxxis-Minion-DHF-20-inch.jpg')",
      }
    },
  },
  plugins: [],
}
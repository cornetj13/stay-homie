/*  VARIABLES  */
/* Element Selectors */
var horoscopeSignInput = document.getElementById('astro-sign-input');

/* Global Variable */
var astroSigns = [
    'aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo', 'libra', 'scorpio', 'sagittarius', 'capricorn', 'aquarius', 'pisces'
];

/*  FUNCTIONS  */
/* Fetch Horoscope API Function - A function for fetching third-party API data about the user's horoscope and return the json data. */
async function getHoroscope() {
    var userSign = horoscopeSignInput.value;
    var signLower = userSign.toLowerCase();

    if(astroSigns.includes(signLower)) {
        var horoscopeAPIUrl = `https://aztro.sameerkumar.website/?sign=${signLower}&day=today`;
        var responseHoroscope = await fetch(horoscopeAPIUrl, {
            method: 'POST'
        });
        var horoscopeExcuse = await responseHoroscope.json();

        return horoscopeExcuse;
    } else {
        return undefined;
    };
};
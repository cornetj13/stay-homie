/*  VARIABLES  */
/* Element Selectors */
var excuseButton = document.getElementById('excuse-button');

/*  FUNCTIONS  */
/* Fetch Random Excuse API Function - A function for fetching third-party API data that generates a random excuse and returns the json data. */
async function getExcuse(){
    var randomExcuseAPIUrl = "https://excuser.herokuapp.com/v1/excuse/office";
    var responseRandom = await fetch(randomExcuseAPIUrl);
    var randomExcuse = await responseRandom.json();
    return randomExcuse;
};
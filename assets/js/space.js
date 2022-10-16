/*  VARIABLES  */
/* Element Selectors */
var spaceButton = document.getElementById('space-button');

/*  FUNCTIONS  */
/* Fetch Space API Function - A function for fetching third-party API data about space news and return the json data. */
async function getSpaceApi() {
    var spaceAPIUrl = "https://api.spaceflightnewsapi.net/v3/reports";
    var responseSpace = await fetch(spaceAPIUrl);
    var spaceNewsExcuse = await responseSpace.json();
    return spaceNewsExcuse;
};
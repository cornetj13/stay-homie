
var spaceButton = document.getElementById('space-button');


async function getSpaceApi() {
    
    var queryURL = "https://api.spaceflightnewsapi.net/v3/reports";

    let response = await fetch(queryURL);

    let excuse = await response.json();

    return excuse
}

spaceButton.addEventListener('click', async (event) => {
    let excuseReturn;

    try {
        excuseReturn = await getSpaceApi();
    }
    catch {
        console.log(error);
    }
    console.log(excuseReturn[0].summary);
    var spaceAnswer = document.createElement("h5");
    spaceAnswer.textContent = "Plus in other important happenings " + excuseReturn[0].summary + "...and that's pretty serious!";
    let header = document.getElementById('excuse-results');
    header.appendChild(spaceAnswer);
});
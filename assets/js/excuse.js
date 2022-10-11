var excuseButton = document.getElementById('excuse-button');
//async function tells the program to set up the function while everything else is preparing on the page. Async communicates to the program that while everything else is syncronously loading, it may, or will, take more time to retrieve the information it needs to load (await) ***FETCHES ARE ALWAYS ASYNCRONOUS 
//we have created an async function called getExcuseApi()
async function getExcuseApi(){
    //here we are creating a variable to store the api url
    var queryURL = "https://excuser.herokuapp.com/v1/excuse/office";
    // let response is saying that we are intitializing a variable (response) that will be equal to our results from the fetch that will return in future (because they take more time to respond, etc)
    let response = await fetch(queryURL);
    //escuse here is the particular informatio we are getting from the API server (an excuse to stay home from work), here we are creating a variable that will equate to a JSON of the response (the response is a promise that isn't parsed, the json turns it into parsed data)
    let excuse = await response.json();
    //now we are returning the data result that was parsed for, and sent to, us
    return excuse 
}
//here we are adding an event listener to review our data in the console that allows us to not throw an error. By adding 'async' this lets the program know that our JSON return will take longer than loading the contents of our webpage. 'DOMContentLoaded' works in tandem to 'async' to communicate the slower functionality.
excuseButton.addEventListener('click', async (event) => {
    //we are creating a new variable called 'excuseReturn'
    let excuseReturn;
    //try means we are going to go fetch our content, and if it doesnt an error will return, so that the program doesnt cycle through trying to run the function 
    try {
        excuseReturn = await getExcuseApi();
    }
    catch {
        console.log(error);
    }
    //here we are console logging in order to make sure we are getting the parsed data we desire, which will help us add the right data to the page later on 
    console.log(excuseReturn[0].excuse);
    var excuseAnswer = document.createElement("h5");
    excuseAnswer.textContent = "But even more than that " + excuseReturn[0].excuse + ", can you believe it?";
    let header = document.getElementById('excuse');
    console.log(excuseAnswer); console.log(header);
    header.appendChild(excuseAnswer)
    
});

//create a new element
//put the retrieved data in the element
    //add content (excuse from the API) equal to some variable 
//append it to the page
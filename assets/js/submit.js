/*  VARIABLES  */
/* Element Selectors */
var submitButtonEl = document.getElementById('submit-button');
var excuseButtonClass = document.getElementsByClassName('on-button');

/* Global Variables */
var buttonsArray = [
    {
        name: 'space-button',
        onBool: false,
        fn: getSpaceApi(),
        key: 'summary',
        element: 'space-button'
    },
    {
        name: 'excuse-button',
        onBool: false,
        fn: getExcuseApi(),
        key: 'excuse',
        element: 'excuse-button'
    },
    {
        name: 'holiday',
        onBool: false,
        fn: makeHoliday(),
        key: 'holidays',
        element: 'holiday-button'
    },
    {
        name: 'horoscope',
        oneBool: false,
        fn: getHoroscope(),
        key: 'description',
        element: 'horoscope-button'
    }
];

/*  FUNCTIONS  */
/* Call Excuse Function */
let callExcuseFunction = async (i)  => {
    try {
        console.log("This is entering callExcuseFunction: ");
        excuseReturn = await buttonsArray[i].fn;
        console.log("This is from callExcuseFunction: ");
        console.log(excuseReturn);
        return excuseReturn
    }
    catch(e) {
        console.log(e);
    }
}

/* Button Interaction Function */
function makeRed() {
    if (this.style.background === 'red'){
        console.log('notred')
        this.style.background = 'aliceblue'
    }
    else if (this.style.background != 'red'){
        console.log('red')
        this.style.background = 'red'
    }
    for (i = 0; i < buttonsArray.length; i++) {
        if (this.id === buttonsArray[i].element) {
            buttonsArray[i].onBool = !buttonsArray[i].onBool
            console.log(buttonsArray[i].onBool)
        }
    }
}

/* Handle Submit Function */
async function handleSubmit(event) {
    event.preventDefault();

    for (i = 0; i < buttonsArray.length; i++) {
        if (buttonsArray[i].onBool === true){
            // TODO: Below, the responses take different form and need to be dealt with differently. Specifically, the holiday response needs some work. The problem is this works well if we want 1 country's holidays, but no if we create an array of holidays.
            let excuseReturn;
            excuseReturn = await callExcuseFunction(i)
            let useKey = buttonsArray[i].key
            let excuseAnswer = document.createElement("h5");
            console.log("This is from the event listener: ");
            console.log(excuseReturn);
            if (excuseReturn[0] != null){
            excuseAnswer.textContent = "But even more than that " + excuseReturn[0][useKey] + ", can you believe it?";
            }
            else {
            excuseAnswer.textContent = `But even more than that, my horoscope said '` + excuseReturn[useKey] + `', can you believe it?`;
            }
            let header = document.getElementById('excuse-results');
            let backgroundImage = document.getElementById('procrastinate');
            backgroundImage.classList.add('hidden')
            backgroundImage.classList.remove('show')
            header.appendChild(excuseAnswer)
        }
    }
}

/*  MAIN CODE  */
/* Button Click Events */
console.log("Program start.");

for (i = 0; i < excuseButtonClass.length; i++) {
    excuseButtonClass[i].addEventListener('click', makeRed, false);
    console.log('addedlistener');
};

/* Submit Click Event */
submitButtonEl.addEventListener('click', handleSubmit);
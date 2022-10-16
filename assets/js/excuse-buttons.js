/*  VARIABLES  */
/* Element Selectors */
var excuseButtonClass   = document.getElementsByClassName('on-button');
var weatherBtn          = document.getElementById('weather-button');
var holidayBtn          = document.getElementById('holiday-button');
var horoscopeBtn        = document.getElementById('horoscope-button');
var spaceBtn            = document.getElementById('space-button');
var excuseBtn           = document.getElementById('excuse-button');
var excuseTextBox       = document.getElementById('excuse-text-box');
var horoscopeInput      = document.getElementById('astro-container');
var weatherInput        = document.getElementById('location-container');

/*  FUNCTIONS  */
/* Show Elements Function - A function to show the appropriate elements depending on the type of excuse the user selects. */
function showElements(event) {
    var aBtnSelected = false;
    for (i = 0; i < excuseButtonClass.length; i++) {
        if(excuseButtonClass[i].getAttribute("data-switch") == 'on') {
            aBtnSelected = true;
        };
    };

    if(aBtnSelected) {
        excuseTextBox.classList.remove('hidden');
        excuseTextBox.classList.add('show');
    } else {
        excuseTextBox.classList.remove('show');
        excuseTextBox.classList.add('hidden');
    };

    if(weatherBtn.getAttribute("data-switch") == 'on') {
        console.log('weather button on');
        weatherInput.classList.remove('hidden');
        weatherInput.classList.add('show');
    } else {
        console.log('weather button off');
        weatherInput.classList.remove('show');
        weatherInput.classList.add('hidden');
    };

    if(horoscopeBtn.getAttribute("data-switch") == 'on') {
        horoscopeInput.classList.remove('hidden');
        horoscopeInput.classList.add('show');
    } else {
        horoscopeInput.classList.remove('show');
        horoscopeInput.classList.add('hidden');
    };
};

/* Button Interaction Function - a function for switch a button on or off, and showing that change with a color change. */
function selectButton() {
    if(this.getAttribute('data-switch') == 'off') {
        this.classList.remove('bg-gray-200');
        this.classList.add('btn-red');
        this.setAttribute('data-switch', 'on');
    } else {
        console.log('This mofo turned on.')
        this.classList.remove('btn-red');
        this.classList.add('bg-gray-200');
        this.setAttribute('data-switch', 'off');
    };
    for (i = 0; i < buttonsArray.length; i++) {
        if (this.id === buttonsArray[i].element) {
            buttonsArray[i].onBool = !buttonsArray[i].onBool
        }
    };
};

/*  MAIN CODE  */
/* Button Click Events */
for (i = 0; i < excuseButtonClass.length; i++) {
    excuseButtonClass[i].addEventListener('click', selectButton);
    excuseButtonClass[i].addEventListener('click', showElements);
};
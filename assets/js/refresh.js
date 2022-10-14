/*  VARIABLES  */
/* Element Selectors */
var refreshBtn    = document.getElementById('refresh-btn');
var weatherBtn    = document.getElementById('weather-button');
var holidayBtn    = document.getElementById('holiday-button');
var horoscopeBtn  = document.getElementById('horoscope-button');
var spaceBtn      = document.getElementById('space-button');
var excuseBtn     = document.getElementById('excuse-button');
var excuseTextBox = document.getElementById('excuse-text-box');
var emailInfoForm = document.getElementById('email-info-form');
var emailOutput   = document.getElementById('email-product');

/*  FUNCTIONS  */
/* Refresh Button Function - A function to hide all the appropriate sections and bring the page back to it's original landing page state.*/
var handleButtonClick = function () {
  // TODO: Reset buttons to be "unselected"
  
  excuseTextBox.classList.add('hidden');
  excuseTextBox.classList.remove('show');
  emailInfoForm.classList.add('hidden');
  emailInfoForm.classList.remove('show');
  emailOutput.classList.add('hidden');
  emailOutput.classList.remove('show');
};

/*  MAIN CODE  */
/* Button Click Event */
refreshBtn.addEventListener('click', handleButtonClick);
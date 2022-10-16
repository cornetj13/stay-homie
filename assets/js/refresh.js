/*  VARIABLES  */
/* Element Selectors */
var refreshBtn        = document.getElementById('refresh-btn');
var excuseButtonClass = document.getElementsByClassName('on-button');
var weatherBtn        = document.getElementById('weather-button');
var holidayBtn        = document.getElementById('holiday-button');
var horoscopeBtn      = document.getElementById('horoscope-button');
var spaceBtn          = document.getElementById('space-button');
var excuseBtn         = document.getElementById('excuse-button');
var submitExcuseButton  = document.getElementById('submit-button');
var excuseTextBox     = document.getElementById('excuse-text-box');
var excuseAnswer      =document.getElementById('excuse-text');
var emailInfoForm     = document.getElementById('email-info-form');
var emailOutput       = document.getElementById('email-product');

/*  FUNCTIONS  */
/* Refresh Button Function - A function to hide all the appropriate sections and bring the page back to it's original landing page state. */
var handleButtonClick = function () {
  for (i = 0; i < excuseButtonClass.length; i++) {
    excuseButtonClass[i].classList.remove('btn-red');
    excuseButtonClass[i].classList.remove('bg-gray-500');
    excuseButtonClass[i].classList.add('bg-gray-200');
    excuseButtonClass[i].removeAttribute('disabled');
    excuseButtonClass[i].setAttribute('data-switch', 'off');
  };

  excuseAnswer.textContent = '';
  excuseTextBox.classList.remove('show');
  excuseTextBox.classList.add('hidden');
  emailInfoForm.classList.remove('show');
  emailInfoForm.classList.add('hidden');
  emailOutput.classList.remove('show');
  emailOutput.classList.add('hidden');
  submitExcuseButton.classList.add('show');
  submitExcuseButton.classList.remove('hidden');
};

/*  MAIN CODE  */
/* Button Click Event */
refreshBtn.addEventListener('click', handleButtonClick);
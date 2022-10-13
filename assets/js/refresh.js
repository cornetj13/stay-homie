/*  VARIABLES  */
/* Element Selectors */
var refreshBtn    = document.getElementById('refresh-btn');
var excuseTextBox = document.getElementById('excuse-text-box');
var emailInfoForm = document.getElementById('email-info-form');

console.log("refresh script is live");

var handleButtonClick = function () {
  console.log("Refresh!");
  excuseTextBox.classList.add('show');
  excuseTextBox.classList.remove('hidden');
  emailInfoForm.classList.add('show');
  emailInfoForm.classList.remove('hidden');
};

refreshBtn.addEventListener('click', handleButtonClick);
/*  VARIABLES  */
/* Element Selectors */
var excuseTextBox           = document.getElementById('excuse-text-box');
var emailInfoForm           = document.getElementById('email-info-form');
var bossNameInput           = document.getElementById("boss-name-input");
var professionalTitleInput  = document.getElementById("profession-title-input");
var signOffInput            = document.getElementById("sign-off-input");
var professionalOptionBtn   = document.getElementById("professional-email-option");
var niceOptionBtn           = document.getElementById("nice-email-option");
var snarkyOptionBtn         = document.getElementById("snarky-email-option");
var generateEmailBtn        = document.getElementById("generate-email-btn");

/* Global Variables */
var optionBtnIDArray = ["professional-email-option", "nice-email-option", "snarky-email-option"];

/*  FUNCTIONS  */
/* Select Option Function - a function for selecting the type of email that will be sent from three distinct options. */
function selectButton(event) {
  var selectedBtnID = event.target.getAttribute('id');

  for (let i = 0; i < optionBtnIDArray.length; i++) {
    var optionBtnID = optionBtnIDArray[i];
    var optionBtn = document.getElementById(optionBtnID);
    if(optionBtnID == selectedBtnID) {
      optionBtn.classList.add('bg-green-200');
      optionBtn.classList.remove('bg-gray-200');
    } else {
      optionBtn.classList.add('bg-gray-200');
      optionBtn.classList.remove('bg-green-200');
    };
  };
};

/* Submit Form Function - a function for displaying the generated email after the email form is filled out. */
function submitForm() {
  excuseTextBox.classList.remove('show');
  excuseTextBox.classList.add('hidden');
  emailInfoForm.classList.remove('show');
  emailInfoForm.classList.add('hidden');
};

/*  MAIN CODE  */
/* Button Click Events */
professionalOptionBtn.addEventListener('click', selectButton);
niceOptionBtn.addEventListener('click', selectButton);
snarkyOptionBtn.addEventListener('click', selectButton);
generateEmailBtn.addEventListener('click', submitForm);
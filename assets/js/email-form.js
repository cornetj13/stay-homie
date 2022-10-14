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
var optionBtnIDArray = ["professional-email-option", "nice-email-option", "snarky-email-option"];

/*  FUNCTIONS  */
/* Select Option Function */
function selectButton(event) {
  console.log("You clicked an option.");

  var selectedBtnID = event.target.getAttribute('id');
  console.log(selectedBtnID);

  var selectedBtn = document.getElementById(selectedBtnID);
  console.log(selectedBtn);

  for (let i = 0; i < optionBtnIDArray.length; i++) {
    var optionBtnID = optionBtnIDArray[i];
    var optionBtn = document.getElementById(optionBtnID);
    if(optionBtnID == selectedBtnID) {
      optionBtn.classList.add('bg-green-200');
      optionBtn.classList.remove('bg-gray-200');
    } else {
      optionBtn.classList.add('bg-gray-200');
      optionBtn.classList.remove('bg-green-200');
    }
  }
}

/* Submit Form Function */
function submitForm() {
  console.log("You clicked generate an email.");
  excuseTextBox.classList.add('hidden');
  excuseTextBox.classList.remove('show');
  emailInfoForm.classList.add('hidden');
  emailInfoForm.classList.remove('show');
}

/*  MAIN CODE  */

/* TODO: Delete testing at end. */
/* Testing */
console.log("email-form script is live");
// console.log(bossNameInput);
// console.log(bossNameInput.value);
// console.log(professionalTitleInput);
// console.log(professionalTitleInput.value);
// console.log(signOffInput);
// console.log(signOffInput.value);
console.log(professionalOptionBtn);
console.log(niceOptionBtn);
console.log(snarkyOptionBtn);
// console.log(generateEmailBtn);
console.log(optionBtnIDArray);
/* TODO: End testing area (to be deleted) */

/* Button Click Events */
professionalOptionBtn.addEventListener('click', selectButton);
niceOptionBtn.addEventListener('click', selectButton);
snarkyOptionBtn.addEventListener('click', selectButton);
// generateEmailBtn.addEventListener('click', submitForm);
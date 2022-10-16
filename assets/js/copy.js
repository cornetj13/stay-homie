/*  VARIABLES  */
/* Element Selectors */
var copyButton = document.getElementById('copy-button');
var copyTextEl = document.getElementById('email-text');

/*  FUNCTIONS  */
/* Copy Button Function - A function to copy the text to the user's clipboard. */
function copyFunction() {
    var copyText = copyTextEl.value;
    navigator.clipboard.writeText(copyText).then(() => {
        copyButton.innerHTML = 'copied';
        copyButton.style.backgroundColor = 'palegreen';
    });
};

/*  MAIN CODE  */
/* Button Click Event */
copyButton.addEventListener('click', copyFunction);
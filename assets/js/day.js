/*  VARIABLES  */
/* Element Selectors */
var dateH2 = document.getElementById('date');

/* Global Variable */
var date = new Date().toLocaleDateString();

/*  MAIN CODE  */
/* Set H2's date */
dateH2.innerText = date;



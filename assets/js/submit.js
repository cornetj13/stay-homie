
let buttonsArray = [{
    name: 'space-button',
    onBool: 0,
    fn: getSpaceApi(),
    key: 'summary',
    element: 'space-button'
},
{
    name: 'excuse-button',
    onBool: 0,
    fn: getExcuseApi(),
    key: 'excuse',
    element: 'excuse-button'
},
{
    name: 'weather',
    // onBool: 0,
    // fn: makeHoliday(),
    // key: 'holidays',
    // element: 'holiday-button'
},
{
    name: 'horoscope',
    oneBool: 0,
    fn: getHoroscope(),
    key: 'description',
    element: 'horoscope-button'
}
]


let  runTry = async (n)  => {
    try {
        excuseReturn = await buttonsArray[n].fn;
        return excuseReturn
    }
    catch(e) {
        console.log(e);
    }
}

let button = document.getElementsByClassName('on-button')

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

for (i = 0; i < button.length; i++) {
    button[i].addEventListener('click', makeRed, false)
    console.log('addedlistener')
}

document.getElementById('submit-button').addEventListener('click', async (event) => {

    event.preventDefault

        for (i = 0; i < buttonsArray.length; i++) {
            if (buttonsArray[i].onBool === true){
                let excuseReturn;
                excuseReturn = await runTry(i)
                let useKey = buttonsArray[i].key
                let excuseAnswer = document.createElement("h5");
                console.log(excuseReturn)
                if (excuseReturn[0] != null){
                excuseAnswer.textContent = "But even more than that " + excuseReturn[0][useKey] + ", can you believe it?";
                }
                else {
                excuseAnswer.textContent = `But even more than that, my horoscope said '` + excuseReturn[useKey] + `', can you believe it?`;
                }
                let header = document.getElementById('excuse');
                header.appendChild(excuseAnswer)
            }
        }
})







// TODO: hide left-side-panel on submit click?


/*  VARIABLES  */
/* Element Selectors */
var submitButtonEl = document.getElementById('submit-button');
var excuseButtonClass = document.getElementsByClassName('on-button');


/* Global Variables */
var buttonsArray = [
    {
        name: 'space',
        onBool: false,
        fn: getSpaceApi,
        key: 'summary',
        element: 'space-button',
        excuse:[]
    },
    {
        name: 'excuse',
        onBool: false,
        fn: getExcuse,
        key: 'excuse',
        element: 'excuse-button',
        excuse:[]
    },
    {
        name: 'holiday',
        onBool: false,
        fn: getHoliday,
        key: 'holiday',
        element: 'holiday-button',
        excuse:[]
    },
    {
        name: 'horoscope',
        onBool: false,
        fn: getHoroscope,
        key: 'description',
        element: 'horoscope-button',
        excuse:[]
    },
    {
        name: 'weather',
        onBool: false,
        fn: searchLatLonSearchWeather,
        key: 'description',
        element: 'weather-button',
        excuse:[]
    }
];

/*  FUNCTIONS  */
/* Call Excuse Function */
let callExcuseFunction = async (i)  => {
    try {
        console.log("This is entering callExcuseFunction: ");
        let excuseReturn = await buttonsArray[i].fn();
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
    if (this.style.background === 'rgb(218, 43, 43)'){
        console.log('notred')
        this.style.background = 'rgb(229, 231, 235)'
    }
    else if (this.style.background != 'rgb(218, 43, 43)'){
        console.log('rgb(218, 43, 43)')
        this.style.background = 'rgb(218, 43, 43)'
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
            // console.log(excuseReturn[0][useKey])
            console.log(useKey)

            //returns excuse for space
            if (buttonsArray[i].name == 'space') {
                console.log(excuseReturn[0][useKey])
                let spaceExcuseSplit = excuseReturn[0][useKey].split('.')[0]
                while (spaceExcuseSplit.includes(':')) {
                    spaceExcuseSplit = spaceExcuseSplit.split(/:(.*)/s)[1]
                }
                excuseAnswer.textContent = `I wanted to come into work, but ${spaceExcuseSplit}, and I just couldn't handle it.`
                buttonsArray[i].excuse[0] = `I wanted to come into work, but ${spaceExcuseSplit}, and I just couldn't handle it.`
                buttonsArray[i].excuse[1] = `I follow space closely, and ${spaceExcuseSplit}. This is a huge step for mankind, and I am respectfully requesting the day off for this event.`
                buttonsArray[i].excuse[2] = `${spaceExcuseSplit}. I think its obvious why I need the day off.`
                let spaceP = document.createElement('p');
                excuseAnswer.append(spaceP);
                let spaceBr = document.createElement('br');
                excuseAnswer.appendChild(spaceBr);
            }
            if (buttonsArray[i].name == 'excuse') {
                console.log(excuseReturn[useKey])
                excuseAnswer.textContent = `I planned on getting a lot done today, but ${excuseReturn[0][useKey]} I need the day off.`
                buttonsArray[i].excuse[0] = `I planned on getting a lot done today, but ${excuseReturn[0][useKey]} I need the day off.`
                buttonsArray[i].excuse[1] = `It troubles me to have to announce that ${excuseReturn[0][useKey]} This stressor requires me to take the day off.`
                buttonsArray[i].excuse[2] = `You know, its crazy cuz ${excuseReturn[0][useKey]} I'm takin off.`
                let exscuseP = document.createElement('p');
                excuseAnswer.append(exscuseP);
                let excuseBr = document.createElement('br');
                excuseAnswer.appendChild(excuseBr);
            }
            if (buttonsArray[i].name == 'horoscope') {
            
                excuseAnswer.textContent = `I looked in the newspaper today, and my horoscope said: '${excuseReturn[useKey]}' I'm taking this to heart, and need your support.`
                buttonsArray[i].excuse[0] = `I looked in the newspaper today, and my horoscope said: '${excuseReturn[useKey]}' I'm taking this to heart, and need your support.`
                buttonsArray[i].excuse[1] = `I was told the future by a respected source: '${excuseReturn[useKey]}' I think this may cause me to harm the company if I come into work today.`
                buttonsArray[i].excuse[2] = `Check out my horoscope: '${excuseReturn[useKey]}' Isn't that nuts?.`
                let horoscopeP = document.createElement('p');
                excuseAnswer.append(horoscopeP);
                let horoscopeBr = document.createElement('br');
                excuseAnswer.appendChild(horoscopeBr);
            }

            // TODO: Merge These Things
            // if (buttonsArray[i].name == 'excuse') {
            //     console.log(excuseReturn[useKey])
            //     excuseAnswer.textContent = `I planned on getting a lot done today, but ${excuseReturn[0][useKey]}. I need the day off.`
            //     let exscuseP = document.createElement('p');
            //     excuseAnswer.append(exscuseP);
            //     let excuseBr = document.createElement('br');
            //     excuseAnswer.appendChild(excuseBr);
            // }
            // if (buttonsArray[i].name == 'horoscope') {
            //     console.log(excuseReturn[useKey])
            //     excuseAnswer.textContent = `I looked in the newspaper today, and my horoscope said that ${excuseReturn[useKey]} I'm taking this to heart, and need your support.`
            //     let horoP = document.createElement('p');
            //     excuseAnswer.append(horoP);
            //     let horoBr = document.createElement('br');
            //     excuseAnswer.appendChild(horoBr);
            // }
            if (buttonsArray[i].name === 'weather') {
                console.log(excuseReturn[useKey])
                excuseAnswer.textContent = `when I looked out the window this morning, I saw the ${excuseReturn[useKey]}. I can't possibly come to work in this weather!`
                buttonsArray[i].excuse[0] = `when I looked out the window this morning, I saw the ${excuseReturn[useKey]}. I can't possibly come to work in this weather.`
                buttonsArray[i].excuse[1] = `today's weather report is showing ${excuseReturn[useKey]}. These weather conditions do not contribute to a positive work environment, so unfortunately, I cannot come in today.`
                buttonsArray[i].excuse[2] = `this ${excuseReturn[useKey]}  I can't possibly come to work in this weather!`
                // let weatherP = document.createElement('p');
                // excuseAnswer.append(weatherP);
                let weatherBr = document.createElement('br');
                excuseAnswer.appendChild(weatherBr);
            }
            if (buttonsArray[i].name == 'holiday') {
                console.log(excuseReturn[useKey])
                excuseAnswer.textContent = `as a ${excuseReturn[0].ethnicity} person, I need to celebrate ${excuseReturn[0][useKey]}!`
                buttonsArray[i].excuse[0] = `as a ${excuseReturn[0].ethnicity} person, I need to celebrate ${excuseReturn[0][useKey]}.`
                buttonsArray[i].excuse[1] = `I am respectfully requesting ${excuseReturn[0][useKey]} off as a ${excuseReturn[0].ethnicity} person.`
                buttonsArray[i].excuse[2] = `I'm ${excuseReturn[0].ethnicity}. Today is ${excuseReturn[0][useKey]}. I'm gonna party!`
                let holidayP = document.createElement('p');
                excuseAnswer.append(holidayP);
                let holidayBr = document.createElement('br');
                excuseAnswer.appendChild(holidayBr);
            }


            console.log(buttonsArray[i].excuse)

            let header = document.getElementById('excuse-results');
            console.log(header)

            header.appendChild(excuseAnswer)
            submitButtonEl.classList.add('hidden');
            console.log(document.getElementById('excuse-title'))
            document.getElementById('excuse-title').classList.add('show');
            document.getElementById('excuse-title').classList.remove('hidden');

            document.getElementById('background-image').classList.add('hidden');
            document.getElementById('background-image').classList.remove('show');
            
    
            document.getElementById('excuse-text-box').classList.add('show');
            document.getElementById('excuse-text-box').classList.remove('hidden');

            if(document.getElementById('excuse-text-box').classList.add('show')) {
            document.getElementById('excuse-text-box').classList.add('show')
            document.getElementById('excuse-text-box').classList.remove('hidden')
            }

            document.getElementById('astro-sign-label').classList.remove('show');
            document.getElementById('astro-sign-label').classList.add('hidden');
            document.getElementById('astro-sign-input').classList.remove('show');
            document.getElementById('astro-sign-input').classList.add('hidden');

            document.getElementById('location-label').classList.remove('show');
            document.getElementById('location-label').classList.add('hidden');
            document.getElementById('location-input').classList.remove('show');
            document.getElementById('location-input').classList.add('hidden');

            document.getElementById('email-info-form').classList.add('show');
            document.getElementById('email-info-form').classList.remove('hidden');
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


// let excuseEmail = [buttonsArray[0].excuse, buttonsArray[1].excuse, buttonsArray[2].excuse, buttonsArray[3].excuse, buttonsArray[4].excuse]


// console.log(excuseEmail)

let generateEmailButton = document.getElementById('generate-email-btn')

generateEmailButton.addEventListener('click', function () {
    let emailDiv = document.getElementById('email-product')
    emailDiv.classList.remove('hidden')
    emailDiv.classList.add('show')
    let excuseEmail = []
    let iterateWhenExcuseAdded = 0
    let bossName = document.getElementById('boss-name-input').value
    let signOff = document.getElementById('sign-off-input').value
    if (document.getElementById('professional-email-option').classList.contains('bg-green-200')) {
    
        if (bossName !== '') {
            excuseEmail.push(`Dear ${bossName}, `)
        }   else {
            excuseEmail.push('To whom it may concern. ')
        }

        for (i=0; i < buttonsArray.length; i++) {

            if (iterateWhenExcuseAdded != 0) {
                excuseEmail.push(' Also, ')
                console.log(iterateWhenExcuseAdded)
                console.log(buttonsArray[1].excuse[0])
                iterateWhenExcuseAdded --

            }
            if (buttonsArray[i].excuse != ''){
                excuseEmail.push(buttonsArray[i].excuse[0])
                iterateWhenExcuseAdded ++
                console.log(excuseEmail)
            }
        }
        
        if (signOff !== '') {
        excuseEmail.push(` ${signOff}`)
        } 
        else {
            excuseEmail.push(' Thank you for your consideration')
        }
    }

    if (document.getElementById('snarky-email-option').classList.contains('bg-green-200')) {
    
        if (bossName !== '') {
            excuseEmail.push(`What's up, ${bossName}. `)
        }   else {
            excuseEmail.push("What's up,")
        }

        for (i=0; i < buttonsArray.length; i++) {
            
            if (iterateWhenExcuseAdded != 0) {
                excuseEmail.push(' Also, ')
                console.log(iterateWhenExcuseAdded)
                console.log(buttonsArray[1].excuse[2])
                iterateWhenExcuseAdded --
            }
            if (buttonsArray[i].excuse != ''){
                excuseEmail.push(buttonsArray[i].excuse[2])
                iterateWhenExcuseAdded ++
                console.log(excuseEmail)
            }
        }
        if (signOff !== '') {
            excuseEmail.push(` ${signOff}`)
            } 
            else {
                excuseEmail.push(' Smell ya later!')
            }
    }

    if (document.getElementById('nice-email-option').classList.contains('bg-green-200')) {
    
        if (bossName !== '') {
            excuseEmail.push(`Dear ${bossName}, `)
        }   else {
            excuseEmail.push('To whom it may concern. ')
        }

        for (i=0; i < buttonsArray.length; i++) {
            

            if (buttonsArray[i].excuse != ''){
                if (iterateWhenExcuseAdded != 0) {
                    excuseEmail.push(' Also, ')
                    console.log(iterateWhenExcuseAdded)
                    iterateWhenExcuseAdded --
                    console.log(buttonsArray[1].excuse[1])
                }
                excuseEmail.push(buttonsArray[i].excuse[1])
                iterateWhenExcuseAdded ++
                console.log(excuseEmail)
            }
        }
        if (signOff !== '') {
            excuseEmail.push(` ${signOff}`)
            } 
        else {
            excuseEmail.push(' Thank you for your consideration')
        }
    }
    

    console.log(excuseEmail)
    let emailJoined = excuseEmail.join('')
    console.log(emailJoined)
    document.getElementById('email-text').innerText = emailJoined
    excuseTextBox.classList.add('hidden');
    excuseTextBox.classList.remove('show');
    emailInfoForm.classList.add('hidden');
    emailInfoForm.classList.remove('show');
})



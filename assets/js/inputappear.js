//first we figure out the order of what we are showing and hiding
//when the horoscope button is selected via an event listener
//we want the input field to become visible 'show' by setting attributes, or whatever method works best
//
//let funButtons = document.getElementsByClassName('on-button');
let horoButton = document.getElementById('horoscope-button');
let weathButton = document.getElementById('weather-button');


horoButton.addEventListener('click', function () {
    let horoInput = document.getElementsByClassName('astro-form');
    let textBox = document.getElementById('excuse-text-box')
    //console.log(horoInput)
        textBox.classList.remove('hidden');
        textBox.classList.add('show');
    
    for (let i = 0; i < horoInput.length; i++) {
        if (horoInput[i].classList.contains('hidden')) {
        horoInput[i].classList.remove('hidden');
        horoInput[i].classList.add('show');
    } else {
        horoInput[i].classList.remove('show');
        horoInput[i].classList.add('hidden');
    }
} 
})

//if our current class is show, then make it hidden

//make a weather button, whatever id is okay, but link it to the js

weathButton.addEventListener('click', function () {
    let weathInput = document.getElementsByClassName('weather-info');
    let textBox = document.getElementById('excuse-text-box')
    //console.log(horoInput)
    if (textBox.classList.contains('hidden')) {
        textBox.classList.remove('hidden');
        textBox.classList.add('show'); 
    }
    for (let i = 0; i < weathInput.length; i++) {
        if (weathInput[i].classList.contains('hidden')) {
            weathInput[i].classList.remove('hidden');
            weathInput[i].classList.add('show');
        } else {
            weathInput[i].classList.remove('show');
            weathInput[i].classList.add('hidden');
        }
    }
})

//when any buttons are pressed make it so background goes away

// funButtons.addEventListener('click', function buttonsClicked () {
//     let backgroundImg = document.getElementById('procrastinate');
//     console.log(backgroundImg)
//     if (backgroundImg.classList.contains('show')) {
//         backgroundImg.classList.remove('show');
//         backgroundImg.classList.add('hidden');
//     }
    
// })
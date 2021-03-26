// import functions and grab DOM elements


// initialize state
const displayNoun1 = document.getElementById('noun1');
const displayTime = document.getElementById('time');
const displayVerb1 = document.getElementById('verb1');
const displayProf = document.getElementById('professional-title1');
const displayCity1 = document.getElementById('city-name1');

const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const input3 = document.getElementById('input3');
const input4 = document.getElementById('input4');
const input5 = document.getElementById('input5');
const input6 = document.getElementById('input6');
const input7 = document.getElementById('input7');
const input8 = document.getElementById('input8');
const input9 = document.getElementById('input9');
const input10 = document.getElementById('input10');

const button = document.getElementById('mad-lib-button');

// set event listeners to update state and DOM
button.addEventListener('click', () => {
    displayNoun1.textContent = input1.value;
    displayTime.textContent = input2.value;
    displayVerb1.textContent = input3.value;
    displayProf.textContent = input4.value;
    displayCity1.textContent = input5.value;
    // displayNoun1.textContent = input6.value;
    // displayNoun1.textContent = input7.value;
    // displayNoun1.textContent = input8.value;
    // displayNoun1.textContent = input9.value;
    // displayNoun1.textContent = input10.value;
});
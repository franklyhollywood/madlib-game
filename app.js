// import functions and grab DOM elements
import { sync } from './dom-utils.js';

// initialize state
const displayNoun1 = document.getElementById('noun1');
const displayTime = document.getElementById('time');
const displayVerb1 = document.getElementById('verb1');
const displayProf = document.getElementById('professional-title1');
const displayCity1 = document.getElementById('city-name1');
const displayCity2 = document.getElementById('city-name2');
const displayLocation = document.getElementById('location');
const displayAdjective1 = document.getElementById('adjective1');
const displayGame = document.getElementById('game');
const displayBuilding = document.getElementById('building');
const displayNoun2 = document.getElementById('noun2');
const displayAdjective2 = document.getElementById('adjective2');
const displayRelationship1 = document.getElementById('relationship1');
const displayRelationship2 = document.getElementById('relationship2');
const displayStory = document.getElementById('story');
// const displayTransportation = document.getElementById('transportation');
// const displayNoun3 = document.getElementById('noun3');
// const displayNoun4 = document.getElementById('noun4');
// const displayVerb2 = document.getElementById('verb2');




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
const input11 = document.getElementById('input11');
const input12 = document.getElementById('input12');
const input13 = document.getElementById('input13');
const input14 = document.getElementById('input14');
const input15 = document.getElementById('input15');
// const input16 = document.getElementById('input16');
// const input17 = document.getElementById('input17');
// const input18 = document.getElementById('input18');

const button = document.getElementById('mad-lib-button');

// set event listeners to update state and DOM
button.addEventListener('click', callback);

function callback() {
    sync(input1, displayNoun1);
    sync(input2, displayTime);
    sync(input3, displayVerb1);
    sync(input4, displayProf);
    sync(input5, displayCity1);
    sync(input6, displayCity2);
    sync(input7, displayLocation);
    sync(input8, displayAdjective1);
    sync(input9, displayGame);
    sync(input10, displayBuilding);
    sync(input11, displayNoun2);
    sync(input12, displayCity1);
    sync(input13, displayCity1);
    sync(input14, displayCity1);
    sync(input15, displayCity1);

    displayStory.classList.remove('hiddentext');
}
// // () => {
//     displayNoun1.textContent = input1.value;
//     displayTime.textContent = input2.value;
//     displayVerb1.textContent = input3.value;
//     displayProf.textContent = input4.value;
//     displayCity1.textContent = input5.value;
//     // displayNoun1.textContent = input6.value;
//     // displayNoun1.textContent = input7.value;
//     // displayNoun1.textContent = input8.value;
//     // displayNoun1.textContent = input9.value;
//     // displayNoun1.textContent = input10.value;
// }
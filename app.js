// import functions and grab DOM elements
import { sync } from './dom-utils.js';

// initialize state
const displayNoun1 = document.getElementById('noun1');
const displayTime = document.getElementById('time');
const displayVerb1 = document.getElementById('verb1');
const displayProf = document.getElementById('profession');
const displayProf2 = document.getElementById('profession2');
const displayCity1 = document.getElementById('city-name1');
const displayCity2 = document.getElementById('city-name2');
const displayCity3 = document.getElementById('city-name3');
const displayCity4 = document.getElementById('city-name4');
const displayCity5 = document.getElementById('city-name5');
const displayLocation = document.getElementById('location');
const displayAdjective1 = document.getElementById('adjective1');
const displaySport = document.getElementById('sport');
const displayBuilding = document.getElementById('building');
const displayNoun2 = document.getElementById('noun2');
const displayPluralNoun = document.getElementById('plural-noun1');
const displayAdjective2 = document.getElementById('adjective2');
const displayRelationship1 = document.getElementById('relationship1');
const displayRelationship2 = document.getElementById('relationship2');
const displayTransportation = document.getElementById('transportation');
const displayPluralNoun2 = document.getElementById('plural-noun2');
const displayNoun3 = document.getElementById('noun3');
const displayVerb2 = document.getElementById('verb2');

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
const input16 = document.getElementById('input16');
const input17 = document.getElementById('input17');
const input18 = document.getElementById('input18');
const input19 = document.getElementById('input19');

const myBtn = document.getElementById('mybtn');

myBtn.addEventListener('click', callback);

function callback() {
    document.getElementById('text-field').style.display = 'block';
    sync(input1, displayNoun1);
    sync(input2, displayTime);
    sync(input3, displayVerb1);
    sync(input4, displayProf);
    sync(input4, displayProf2);
    sync(input5, displayCity1);
    sync(input5, displayCity3);
    sync(input6, displayCity2);
    sync(input5, displayCity4);
    sync(input5, displayCity5);
    sync(input7, displayLocation);
    sync(input8, displayAdjective1);
    sync(input9, displaySport);
    sync(input10, displayBuilding);
    sync(input11, displayNoun2);
    sync(input12, displayPluralNoun);
    sync(input13, displayAdjective2);
    sync(input14, displayRelationship1);
    sync(input15, displayRelationship2);
    sync(input16, displayTransportation);
    sync(input17, displayPluralNoun2);
    sync(input18, displayNoun3);
    sync(input19, displayVerb2);
}
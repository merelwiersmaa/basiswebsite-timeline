// JavaScript Document
console.log("heeey!");

////////////////////////////////////////////////////////////////////////////////
// DIALOG GOLDEN AGE 1940, Bron van Sanne: https://codepen.io/shooft/pen/wvYgVKg///
////////////////////////////////////////////////////////////////////////////////

// Hieronder worden de elementen aangewezen uit de HTML (via de querySelector), die worden gebruikt in de interactie. 
// Deze elementen worden naar JS 'gehaald' en krijgen een eigen naam.
const GoldenAgeOpenButton = document.querySelector("ul li:nth-of-type(1) > button");
const GoldenAgeDialog = document.querySelector("ul li:nth-of-type(1) dialog");


//Hieronder wordt verteld aan de GoldenAgeOpenButton (dus de button in HTML), dat hij moet luisteren naar een event (addEventListener).
//Dit event houdt in dat er bij een 'click' op de knop (de actie), er een reactie uitgevoerd moet worden, en dat is de functie openGoldenAge.
GoldenAgeOpenButton.addEventListener("click", openGoldenAge);


//De functie (reactie) die uitgevoerd moet worden staat hieronder beschreven.
//setTimeout zorgt ervoor dat er een korte vertraging plaatsvindt na de click, voordat de fucntie wordt uitgevoerd
function openGoldenAge() {
    setTimeout(() => {
        GoldenAgeDialog.showModal();
    }, 500); // 500 ms = 0.5 sec
}

//De volgende code's zijn precies hetzelfde, maar dan met andere benamingen voor hun eigen Jokerkaart.
//Maar het spreekt voorzich, de werking ervan komt op hetzelfde neer.


//////////////////////////
// DIALOG TV SHOW 1966 ///
/////////////////////////

const TVSHOWOpenButton = document.querySelector("ul li:nth-of-type(2) > button");
const TVSHOWDialog = document.querySelector("ul li:nth-of-type(2) dialog");

TVSHOWOpenButton.addEventListener("click", openTVshow);

function openTVshow() {
    setTimeout(() => {
        TVSHOWDialog.showModal();
    }, 500);
}


/////////////////////////////
// DIALOG TIM BURTON 1989 ///
////////////////////////////

const TimBurtonOpenButton = document.querySelector("ul li:nth-of-type(3) > button");
const TimBurtonDialog = document.querySelector("ul li:nth-of-type(3) dialog");

TimBurtonOpenButton.addEventListener("click", openTimBurton);

function openTimBurton() {
    setTimeout(() => {
        TimBurtonDialog.showModal();
    }, 500);
}


///////////////////////////////////
// DIALOG ANIMATED SERIES 1992 ///
//////////////////////////////////

const AnimatedSeriesOpenButton = document.querySelector("ul li:nth-of-type(4) > button");
const AnimatedSeriesDialog = document.querySelector("ul li:nth-of-type(4) dialog");

AnimatedSeriesOpenButton.addEventListener("click", openAnimatedSeries);

function openAnimatedSeries() {
    setTimeout(() => {
        AnimatedSeriesDialog.showModal();
    }, 500);
}


/////////////////////////////
// DIALOG ALEX ROSS 1999 ///
////////////////////////////

const AlexRossOpenButton = document.querySelector("ul li:nth-of-type(5) > button");
const AlexRossDialog = document.querySelector("ul li:nth-of-type(5) dialog");

AlexRossOpenButton.addEventListener("click", openAlexRoss);

function openAlexRoss() {
    setTimeout(() => {
        AlexRossDialog.showModal();
    }, 500);
}


/////////////////////////////
// DIALOG DARK KNIGHT 2008 //
////////////////////////////

const DarkKnightOpenButton = document.querySelector("ul li:nth-of-type(6) > button");
const DarkKnightDialog = document.querySelector("ul li:nth-of-type(6) dialog");

DarkKnightOpenButton.addEventListener("click", openDarkKnight);

function openDarkKnight() {
    setTimeout(() => {
        DarkKnightDialog.showModal();
    }, 500);
}


///////////////////////////////
// DIALOG SUICIDE SQUAD 2016 //
///////////////////////////////

const SuicideSquadOpenButton = document.querySelector("ul li:nth-of-type(7) > button");
const SuicideSquadDialog = document.querySelector("ul li:nth-of-type(7) dialog");

SuicideSquadOpenButton.addEventListener("click", openSuicideSquad);

function openSuicideSquad() {
    setTimeout(() => {
        SuicideSquadDialog.showModal();
    }, 500);
}


///////////////////////////////
// DIALOG LEGO BATMAN 2017 ////
///////////////////////////////

const LegoBatmanOpenButton = document.querySelector("ul li:nth-of-type(8) > button");
const LegoBatmanDialog = document.querySelector("ul li:nth-of-type(8) dialog");

LegoBatmanOpenButton.addEventListener("click", openLegoBatman);

function openLegoBatman() {
    setTimeout(() => {
        LegoBatmanDialog.showModal();
    }, 500);
}


////////////////////////////////////
// DIALOG GOTHAM JEROME 2017 ///////
////////////////////////////////////

const GothamJeromeOpenButton = document.querySelector("ul li:nth-of-type(9) > button");
const GothamJeromeDialog = document.querySelector("ul li:nth-of-type(9) dialog");

GothamJeromeOpenButton.addEventListener("click", openGothamJerome);

function openGothamJerome() {
    setTimeout(() => {
        GothamJeromeDialog.showModal();
    }, 500);
}


///////////////////////////////////
// DIALOG JOKER FILM 2019//////////
///////////////////////////////////

const JokerFilmOpenButton = document.querySelector("ul li:nth-of-type(10) > button");
const JokerFilmDialog = document.querySelector("ul li:nth-of-type(10) dialog");

JokerFilmOpenButton.addEventListener("click", openJokerFilm);

function openJokerFilm() {
    setTimeout(() => {
        JokerFilmDialog.showModal();
    }, 500);
}
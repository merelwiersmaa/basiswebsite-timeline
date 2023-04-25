// JavaScript Document
console.log("heeey!");

////////////////////////////////////////////////////////////////////////////////
// DIALOG GOLDEN AGE 1940, Bron van Sanne: https://codepen.io/shooft/pen/wvYgVKg///
////////////////////////////////////////////////////////////////////////////////

const GoldenAgeOpenButton = document.querySelector("ul li:nth-of-type(1) > button");
const GoldenAgeDialog = document.querySelector("ul li:nth-of-type(1) dialog");

GoldenAgeOpenButton.addEventListener("click", openGoldenAge);

function openGoldenAge() {
    setTimeout(() => {
        GoldenAgeDialog.showModal();
    }, 500);
}


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
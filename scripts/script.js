// JavaScript Document
console.log("heeey!");

////////////////////////////////////////////////////////////////////////////////
// OPEN/CLOSE THE LIME, Bron van Sanne: https://codepen.io/shooft/pen/wvYgVKg///
////////////////////////////////////////////////////////////////////////////////

const limeOpenButton = document.querySelector("ul li:nth-of-type(1) > button");
const limeDialog = document.querySelector("ul li:nth-of-type(1) dialog");

limeOpenButton.addEventListener("click", openLimeDialog);

function openLimeDialog() {
	limeDialog.showModal();
}
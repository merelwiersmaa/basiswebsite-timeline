// JavaScript Document
console.log("heeey!");

////////////////////////////////////////////////////////////////////////////////
// OPEN/CLOSE THE LIME (Jokerkaarten), Bron van Sanne: https://codepen.io/shooft/pen/wvYgVKg///
////////////////////////////////////////////////////////////////////////////////

const limeOpenButton = document.querySelector("ul li:nth-of-type(1) > button");
const limeDialog = document.querySelector("ul li:nth-of-type(1) dialog");


limeOpenButton.addEventListener("click", openDialog);

function openDialog() {
    setTimeout(() => {
        limeDialog.showModal();
    }, 500);
}


// ik wil dat de timeout pas na het klikken van de button activeert
// setTimeout(openLimeDialog, 3000)
// setTimeout van: https://www.tutorialspoint.com/how-to-use-settimeout-function-in-javascript


"use strict";

let checkboxSwitch = document.getElementsByClassName("checkbox");
let buttonSwitch = checkboxSwitch[0];

buttonSwitch.addEventListener("click", (event) => {
    if (buttonSwitch.classList.contains("on")) {
        buttonSwitch.setAttribute("aria-checked", "false");
    } else {
        buttonSwitch.setAttribute("aria-checked", "true");
    }
    buttonSwitch.classList.toggle("on");
}, false)
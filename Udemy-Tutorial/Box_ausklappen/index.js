"use strict";

window.addEventListener("load", function() {

    let heading = document.getElementById("box__heading");
    
    heading.addEventListener("click", function() {
        let content = document.getElementById("box__content");
        let indicator = document.getElementById("box__indicator");        
        
        content.classList.toggle("hide");
        indicator.classList.toggle("hidden");
    }, false);
}, false); 
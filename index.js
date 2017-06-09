//index.js

/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */ /*global define */

var learnBtn = document.getElementById("learn-btn");
var questionView = document.getElementById("question-view");

function startLearn() {
    'use strict';
    console.log("inside startLearn function");
    if (learnBtn.onclick()) {
        questionView.style.display = "block";
    } else {
        console.log("learn button failed");
    }
    console.log("startLearn function successful");
}
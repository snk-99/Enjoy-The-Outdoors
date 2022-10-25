"use strict";

const mountainsField = document.getElementById("mountainsField");

function loadMountains() {
    mountainsField.innerHTML = "";
    let option = new Option("Select...", "");
    mountainsField.appendChild(option);

    mountainsArray.forEach((mountain) => {
        let option = new Option(mountain.name, mountain.name);
        mountainsField.appendChild(option)
    })
}

function loadMountainInfo() {
    let selectedValue = mountainsField.value;
    mountainsArray.forEach((mountian) => {
        if (selectedValue == mountian.name) {
            
        }
    })
}

window.onload = () => {
    // onclick = loadLocationList;
    loadMountains();
    mountainsField.onchange = loadMountainInfo;

}
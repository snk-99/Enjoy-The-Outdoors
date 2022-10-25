"use strict";

const mountainsField = document.getElementById("mountainsField");
const cardSection = document.getElementById("card-section");

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
    mountainsArray.forEach((mountain) => {
        if (selectedValue == mountain.name) {
            buildMountainCard(cardSection, mountain)
        }
    })

}



function buildMountainCard(section, mountain) {
    //created the card
    const div = document.createElement("div");
    div.className = "card";
    //put inside the document 
    section.appendChild(div);
    //create the title
    let cardTitle = document.createElement("h3");
    cardTitle.className = "card-title";
    cardTitle.innerText = mountain.name;
    //add the description
    let description = document.createElement("p");
    description.innerText = mountain.desc;
    //add the elevation
    let elevation = document.createElement("p");
    elevation.innerText = mountain.elevation;
    //add additional info
    let addInfo = document.createElement("p");
    addInfo.innerText = `effort: ${mountain.effort}`

    const divBody = document.createElement("div")
    divBody.className = "card-body"
    div.appendChild(divBody)
    divBody.appendChild(cardTitle)
    divBody.appendChild(description)
    divBody.appendChild(elevation)
    divBody.appendChild(addInfo)

}

function clearCards() {
    let cardSection = document.querySelector("#card-section");

    let cards = document.querySelectorAll("#card-section divBody");
    cards.forEach((card) => cardSection.removeChild(card));
}


window.onload = () => {
    // onclick = loadLocationList;
    loadMountains();
    mountainsField.onchange = loadMountainInfo;

    const clearCardsButton = document.getElementById("clearCardsButton");
    clearCardsButton.onclick = clearCards;

}
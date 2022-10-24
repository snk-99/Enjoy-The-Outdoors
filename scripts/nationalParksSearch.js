"use strict";

const stateOption = document.getElementById("state_option");
const nationalParksTbl = document.getElementById("parksTbl");
const tblBody = document.getElementById("tblBody");


function loadLocationList() {
    locationsArray.forEach((location) => {
        let option = new Option(location, location);
        stateOption.appendChild(option)
    })
}


function loadnationalParksTable() {
    let selectedValue = stateOption.value;
    tblBody.innerText = "";
    nationalParksArray.forEach((nationalPark) => {
        if (selectedValue === nationalPark.State) {
            buildParkRow(tblBody, nationalPark);
        }
    })
}


function buildParkRow(tableBody, nationalPark) {
    let row = tableBody.insertRow(-1);

    let cell1 = row.insertCell(0);
    cell1.innerText = nationalPark.LocationName;

    let cell2 = row.insertCell(1);
    cell2.innerText = nationalPark.Address;

    let cell3 = row.insertCell(2);
    cell3.innerText = nationalPark.City;

    let cell4 = row.insertCell(3);
    cell4.innerText = nationalPark.State;

    let cell5 = row.insertCell(4);
    cell5.innerText = nationalPark.ZipCode;

    let cell6 = row.insertCell(5);
    cell6.innerText = nationalPark.Phone;

    if (nationalPark.Visit !== undefined) {
        let cell7 = row.insertCell(6);
        cell7.innerText = nationalPark.Visit;
    }

}

window.onload = () => {
    loadLocationList();
    stateOption.onchange = loadnationalParksTable;
}

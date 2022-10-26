"use strict";

const stateOption = document.getElementById("state_option");
const nationalParksTbl = document.getElementById("parksTbl");
// const tblBody = document.getElementById("tblBody");
const byLocationField = document.getElementById("location");
const byType = document.getElementById("type");
// const selectAll = document.getElementById("selectAll")

const lableChange = document.getElementById("lableChange");
lableChange.innerHTML = "";

function loadLocationList() {
    stateOption.innerHTML = "";
    let option = new Option("Select...", "");
    stateOption.appendChild(option);

    if (byLocationField.checked) {
        lableChange.innerHTML = "States/Territories";
        locationsArray.forEach((location) => {
            let option = new Option(location, location);
            stateOption.appendChild(option)
        })
    } else if (byType.checked) {
        lableChange.innerHTML = "Park Type";
        parkTypesArray.forEach((park) => {
            let newOption = new Option(park, park);
            stateOption.appendChild(newOption);
        });

    }
}


function loadnationalParksTable() {
    let selectedValue = stateOption.value;
    tblBody.innerText = "";
    if (byLocationField.checked) {
        nationalParksArray.forEach((nationalPark) => {
            if (selectedValue === nationalPark.State) {
                buildParkRow(tblBody, nationalPark);
            }
        });
    } else if (byType.checked) {
        nationalParksArray.forEach((park) => {
            if (park.LocationName.includes(selectedValue)) {
                buildParkRow(tblBody, park);
            }
        });
    }
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
    if (nationalPark.Phone !== 0) {
        cell6.innerText = nationalPark.Phone;
    } else {
        const p = document.createElement('p');
        p.innerText = "Not Available";
        cell6.appendChild(p);

    }
    // cell6.innerText = nationalPark.Phone;

    let cell7 = row.insertCell(6);

    if (nationalPark.Visit) {
        const a = document.createElement('a');
        let link = document.createTextNode(nationalPark.Visit)
        a.appendChild(link);
        a.innerText = "Visit";
        a.href = nationalPark.Visit;
        a.target = ("_blank")
        cell7.appendChild(a);
    }

}

window.onload = () => {
    onclick = loadLocationList;
    stateOption.onchange = loadnationalParksTable;
    // onclick = loadAdd;
}

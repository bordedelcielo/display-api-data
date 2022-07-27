fetch('/people.json')
    .then((res) => res.json())
    .then((response) => console.log(response))

fetch('https://ergast.com/api/f1/2020/1/driverStandings.json')
    .then((res) => res.json())
    .then((responseData) => displayRow(responseData))

function displayRow(data) {
    console.log(data)

    for (let row of data.MRData.StandingsTable.StandingsLists[0].DriverStandings) {
        console.log(row)
    }
    }

function addElement () {
    const newDiv = document.createElement('div');
    const newContent = document.createTextNode('General Kenobi, you are a bold one.')
    newDiv.appendChild(newContent);
    const currentDiv = document.getElementById('div1');
    document.body.insertBefore(newDiv, currentDiv);
}
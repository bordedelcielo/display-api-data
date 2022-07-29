function apiCall(year, month) {
    fetch(`https://ergast.com/api/f1/${year}/${month}/driverStandings.json`)
        .then((res) => res.json())
        .then((responseData) => createTable(responseData))
}

function createTable(data) {

    for (let row of data.MRData.StandingsTable.StandingsLists[0].DriverStandings) {
        let position = row.position
        let fullName = row.Driver.givenName + ' ' + row.Driver.familyName
        let url = row.Driver.url
        let nation = row.Driver.nationality

        let clone = myTemplate.content.cloneNode(true);
        let td = clone.querySelectorAll('td');
        td[0].textContent = position
        td[1].textContent = fullName
        td[2].textContent = nation

        tableBody.appendChild(clone);
    }
}

const myForm = document.getElementById('form')

myForm.addEventListener('submit', (event) => {
    event.preventDefault()
    tableBody.innerHTML = ''
    const myForm = document.getElementById('form')
    formData = new FormData(myForm)
    console.log(event.target)
    let myList = []
    for (const [key, value] of formData) {
        myList.push(value)
    }
    apiCall(myList[0], myList[1])
});
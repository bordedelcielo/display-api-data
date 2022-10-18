function apiCall(year, month) {
    fetch(`https://ergast.com/api/f1/${year}/${month}/driverStandings.json`)
        .then((res) => res.json())
        .then((responseData) => createTable(responseData))
}

apiCall(2020,1)

function createTable(data) {

    tableBody.innerHTML = ''
    // console.log(data)
    results = data.MRData.StandingsTable.StandingsLists[0].DriverStandings

        for (let i = 0; i < 10; i++) {
        let position = results[i].position
        let fullName = results[i].Driver.givenName + ' ' + results[i].Driver.familyName
        let url = results[i].Driver.url
        let nation = results[i].Driver.nationality

        let clone = myTemplate.content.cloneNode(true);
        let td = clone.querySelectorAll('td');
        td[0].textContent = position
        td[1].innerHTML = `<a href='${url}' target='_blank'><p>${fullName}</p></a>`
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
    // console.log(event.target)
    let myList = []
    for (const [key, value] of formData) {
        myList.push(value)
    }
    apiCall(myList[0], myList[1])
});
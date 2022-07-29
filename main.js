/*
1) Data is submitted to a form
2) Data is used to make an API call
3) The first ten rows of information from the API call are read and converted to HTML tables.
*/

function apiCall(year, month) {
    fetch(`https://ergast.com/api/f1/${year}/${month}/driverStandings.json`)
    .then((res) => res.json())
    .then((responseData) => createTable(responseData))
}

function createTable(data) {
    const newTable = document.createElement('table')
    newTable.setAttribute('id', 'resultsTable')
    document.body.insertBefore(newTable, document.getElementById('div1'))


    for (let row of data.MRData.StandingsTable.StandingsLists[0].DriverStandings) {
        newRow = document.createElement('tr')
        let position = row.position
        let fullName = row.Driver.givenName + ' ' + row.Driver.familyName
        let url = row.Driver.url
        let nation = row.Driver.nationality
        let theArr = [position, fullName, nation]

        for (let item of theArr) {
            newField = document.createElement('td')
            newRowContent = document.createTextNode(item)
            newField.append(newRowContent)
            newRow.append(newField)
        }

        newTable.append(newRow)
    }
    }

function addElement () {
    const newDiv = document.createElement('div');
    const newContent = document.createTextNode('General Kenobi, you are a bold one.')
    newDiv.appendChild(newContent);
    const currentDiv = document.getElementById('div1');
    document.body.insertBefore(newDiv, currentDiv);
}

function removeElement() {
    let myElement = document.getElementsByTagName('div')
    console.log(myElement[0])
    myElement[0].remove()
}

function clearBody() {
    document.body.innerHTML = ''
    // document.body.innerHTML = '<div id="div2"></div>'
}

const myForm = document.getElementById('form')

myForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const myForm = document.getElementById('form')
    formData = new FormData(myForm)
    console.log(formData)
    console.log(event.target)
    console.log('submitted')
    let myList = []
    for (const [key, value] of formData) {
        console.log(key)
        console.log(value)
        myList.push(value)
    }
    apiCall(myList[0], myList[1])
});

// onsubmit = (event) => {
//     event.preventDefault()
//     formData = new FormData(myForm)
//     console.log('submission triggered')
//     console.log(myForm)
//     console.log(formData)
// };
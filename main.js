fetch('/people.json')
    .then((res) => res.json())
    // .then((response) => console.log(response))

// fetch('https://ergast.com/api/f1/2020/1/driverStandings.json')
//     .then((res) => res.json())
//     .then((responseData) => displayRow(responseData))

function displayRow(data) {
    // console.log(data)

    for (let row of data.MRData.StandingsTable.StandingsLists[0].DriverStandings) {
        console.log(row)
        console.log(row.position)
        console.log(row.Driver.givenName + ' ' + row.Driver.familyName)
        console.log(row.Driver.url)
        console.log(row.Driver.nationality)
        console.log(row.wins)
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
    let year = myList[0]
    let month = myList[1]
    fetch(`https://ergast.com/api/f1/${year}/${month}/driverStandings.json`)
        .then((res) => res.json())
        .then((responseData) => displayRow(responseData))
});

// onsubmit = (event) => {
//     event.preventDefault()
//     formData = new FormData(myForm)
//     console.log('submission triggered')
//     console.log(myForm)
//     console.log(formData)
// };
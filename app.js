// SECTION Arrays

const locations = [
  '🏤', '🏥', '🏭', '🏢', '🏣'
]

const people = [{
  name: 'Jimbo',
  picture: '🤵',
  location: '🏤'
},
{
  name: 'Sammy',
  picture: '🙆‍♀️',
  location: '🏤'
},
{
  name: 'Michael',
  picture: '👷',
  location: '🏤'
},
{
  name: 'Robert',
  picture: '👷',
  location: '🏥'
},
{
  name: 'Terry',
  picture: '🤴',
  location: '🏥',
},
{
  name: 'Bill',
  picture: '🕵️',
  location: '🏥',
},
{
  name: 'Marie',
  picture: '👩‍🍳',
  location: '🏭',
},
{
  name: 'Mykeal',
  picture: '💂',
  location: '🏭',
},
{
  name: 'Phil',
  picture: '🧜‍♂️',
  location: '🏭',
},
{
  name: 'Wilson',
  picture: '🏐',
  location: '🏢',
},
{
  name: 'Wendy',
  picture: '👩‍⚕️',
  location: '🏢',
},
{
  name: 'Jeremy',
  picture: '🦹',
  location: '🏢',
}
]
// !SECTION Arrays End

// SECTION Functions

function drawPeople() {
  locations.forEach(building => {
    const peopleAtLocation = people.filter(person => person.location == building)

    // console.log(`people at building ${building}`, peopleAtLocation)

    let stringOfPeoplePictures = ''

    peopleAtLocation.forEach(person => stringOfPeoplePictures += person.picture)

    // console.log(building, stringOfPeoplePictures)

    const buildingElement = document.getElementById(building)
    buildingElement.innerText = stringOfPeoplePictures
  })
}

// array.forEach(element => {

// });

function turnIntoBat(buildingEmoji) {
  // console.log(buildingEmoji)
  // grab our people array and loop through it
  people.forEach(person => {
    // inside the loop add a condition (if) ... if our person.location == buildingEmoji
    if (person.location == buildingEmoji) {
      // if the condition is true... turn the person.emoji to a bat
      person.picture = '🦇'
    }
  })
  // redraw the people
  drawPeople()
  changePeopleLocation()
}

// function turnPeopleAtMusicHallIntoBats() {

//   // console.log('🏤', peopleAtMusicHall)
//   const peopleAtMusicHall = people.filter(person => person.location == '🏤')
//   peopleAtMusicHall.forEach(person => person.picture = '🦇')
//   console.log(peopleAtMusicHall);
//   drawPeople()
// }

function changePeopleLocation() {
  people.forEach(person => {
    const randomBuildingIndex = Math.floor(Math.random() * locations.length)
    const randomBuilding = locations[randomBuildingIndex]
    person.location = randomBuilding
  })
  drawPeople()
}

// const isBelowThreshold = (currentValue) => currentValue < 40;
function endGame() {
  const allBats = people.picture == '🦇'
  console.log('game over')
}


// !SECTION Functions End

// SECTION Calling Functions
changePeopleLocation()
drawPeople()
endGame()

// !SECTION Calling FUnctions End 

// NOTE tutoring help with sudo coding from instructions - check outlines for the week and input what looks confusing
const elonPerson = {
    first: 'Elon',
    last: 'Musk',
    housesLocation : ["new york", "paris"],
    twitter: '@elonmusk',
    company: 'Space X',
    houses : {
      amount: 2,
      value : "5Million"
    }
}

function getElonMuskDetails(person){

    const{first:firstname , last:lastname , housesLocation} = person
    const [locationOne, locationTwo] = housesLocation
    const valueHouses = housesLocation.length
	console.log(firstname, lastname)
	console.log(locationOne, locationTwo, valueHouses)

}

getElonMuskDetails(elonPerson)
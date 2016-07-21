const travels = [
  {
    id: 1,
    name: 'Bretagne',
    from_date: new Date(),
    to_date: new Date(),
    steps: [{
      id: 1,
      date: new Date(),
      description: 'Lorem ipsum dolor sit amet',
      address: '123 avenue des Champs Elysées, 75008 Paris, France'
    }, {
      id: 2,
      date: new Date(),
      description: 'Consectetur adipisicing elit',
      address: '123 avenue des Champs Elysées, 75008 Paris, France'
    }]
  }
]

export function getAllTravels (cb) {
  setTimeout(() => {
    cb(travels)
  }, 100)
}

const getAllReservations = () => {
  return fetch('http://localhost:3001/api/v1/reservations')
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error('Something went wrong.')
      }
    })
}

const addNewReservation = reservation => {
  return fetch('http://localhost:3001/api/v1/reservations', {
    method: 'POST',
    body: JSON.stringify(reservation),
    headers: {'Content-Type': 'application/json'}
  })
  .then(response => {
    if (response.ok) {
      return response.json()
    } else {
      throw new Error('Something went wrong.')
    }
  })
}

export { getAllReservations, addNewReservation }
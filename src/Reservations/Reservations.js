import React from 'react'
import Card from '../Card/Card'
import './Reservations.css'

const Reservations = props => {
  const allReservations = props.reservations.map(reservation => {
    return (
      <Card 
        key={reservation.id}
        id={reservation.id}
        name={reservation.name}
        date={reservation.date}
        time={reservation.time}
        number={reservation.number}
      />
    )
  })
  return (
    <section className="reservations-container">
      {allReservations}
    </section>
  )
}

export default Reservations
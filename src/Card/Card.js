import React from 'react'
import './Card.css'

const Card = props => {
  return (
    <section className="reservation-card">
      <h2>{props.name}</h2>
      <p>{props.date}</p>
      <p>{props.time}</p>
      <p>Number of Guests: {props.number}</p>
      <button>Cancel</button>
    </section>
  )
}

export default Card
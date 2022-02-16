import React from 'react'
import './Card.css'

const Card = props => {
  return (
    <section className="reservation-card">
      <h2 className="card-name">{props.name}</h2>
      <p className="card-date">{props.date}</p>
      <p className="card-time">{props.time}</p>
      <p className="card-number">Number of Guests: {props.number}</p>
      <button className="cancel-button">Cancel</button>
    </section>
  )
}

export default Card
import React from 'react'
import './Card.css'

const checkDates = date => {
  const splitDate = date.split('/')
  let formattedMonth;
  let formattedDay;

  if (splitDate[0].length === 1) {
    formattedMonth = '0' + splitDate[0]
  } else {
    formattedMonth = splitDate[0];
  }

  if (splitDate[1].length === 1) {
    formattedDay = '0' + splitDate[1]
  } else {
    formattedDay = splitDate[1]
  } 

  return formattedMonth + '/' + formattedDay
}

const Card = props => {
  return (
    <section className="reservation-card">
      <h2 className="card-name">{props.name}</h2>
      <p className="card-date">{checkDates(props.date)}</p>
      <p className="card-time">{props.time}</p>
      <p className="card-number">Number of Guests: {props.number}</p>
      <button className="cancel-button">Cancel</button>
    </section>
  )
}

export default Card
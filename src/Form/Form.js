import React, { Component } from 'react'
import './Form.css'

class Form extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      date: '',
      time: '',
      number: ''
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  addReservation = event => {
    event.preventDefault()
    const newReservation = {
      id: Date.now(),
      name: this.state.name,
      date: this.state.date,
      time: this.state.time,
      number: parseInt(this.state.number)
    }
    this.props.addReservation(newReservation)
    this.clearState()
  }

  clearState = () => {
    this.setState({
      name: '',
      date: '',
      time: '',
      number: ''
    })
  }

  render() {
    return (
      <form>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={this.state.name}
          onChange={event =>this.handleChange(event)}
        />
        <input
          type="text"
          name="date"
          placeholder="Date (mm/dd)"
          value={this.state.date}
          onChange={event =>this.handleChange(event)}
        />
        <input
          type="text"
          name="time"
          placeholder="Time"
          value={this.state.time}
          onChange={event =>this.handleChange(event)}
        />
        <input
          type="text"
          name="number"
          placeholder="Number of guests"
          value={this.state.number}
          onChange={event =>this.handleChange(event)}
        />
        <button onClick={event => this.addReservation(event)}>Make Reservation</button>
      </form>
    )
  }
}

export default Form
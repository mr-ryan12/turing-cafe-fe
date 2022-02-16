import React, { Component } from 'react';
import { getAllReservations } from '../apiCalls';
import Form from '../Form/Form'
import Reservations from '../Reservations/Reservations'
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      reservations: [],
      error: ''
    }
  }

  componentDidMount = () => {
    getAllReservations()
      .then(data => {
        this.setState({reservations: data})
      })
      .catch(error => this.setState({error: error.message}))
  }

  addNewReservation = reservation => {
    this.setState({
      reservations: [...this.state.reservations, reservation]
    })
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <Form addReservation={this.addNewReservation}/>
        <Reservations reservations={this.state.reservations}/>
      </div>
    )
  }
}

export default App;

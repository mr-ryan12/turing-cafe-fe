import React, { Component } from 'react';
import { getAllReservations } from '../apiCalls';
import Form from '../Form/Form'
import Reservations from '../Reservations/Reservations'
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      reservations: []
    }
  }

  componentDidMount = () => {
    getAllReservations()
      .then(data => {
        console.log(data)
        this.setState({reservations: data})
      })
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
        {/* <div className='resy-form'>

        </div>
        <div className='resy-container'>
          
        </div> */}
        <Form addReservation={this.addNewReservation}/>
        <Reservations reservations={this.state.reservations}/>
      </div>
    )
  }
}

export default App;

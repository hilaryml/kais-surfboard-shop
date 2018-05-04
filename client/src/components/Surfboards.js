import React, { Component } from 'react'

export default class Surfboards extends Component {

  constructor(props) {

    super(props)

    this.state = {
      surfboards = []
    }
  }

  componentDidMount() {
    return fetch('/api/surfboards', {
      method: 'GET',
      headers: {
        'Accepts': 'application/json',
        'Content-Type': 'application/json'
      },
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(err => console.log(err))
  }

  render() {

    cont surfboards = this.state.surfboards.map((surfboard) =>

      <div>
        <hi>{surfboard.name}</h1>
        <p>Length: {surfboard.length} | Price: {surfboard.price} | Quantity: {surfboard.quantity}
        </p>
      </div>
    )

    return (
      <div>Surfboards Component is coming</div>
    )
  }
}

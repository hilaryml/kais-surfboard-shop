import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Surfboards extends Component {

  constructor(props) {

    super(props)

    this.state = {
      surfboards: []
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
      .then(data => this.setState({ surfboards: data }))
      .catch(err => console.log(err))
  }

  render() {

    const surfboards = this.state.surfboards.map((surfboard) =>

      <div key={surfboard.id}>
        <h1>{surfboard.name}</h1>
        <p>Length: {surfboard.length} | Price: {surfboard.price} | Quantity: {surfboard.quantity}
        </p>
      </div>
    )

    return (
      <div>
        <h1>Surfboard Inventory</h1>
        <Link to="/surfboards/new">Add A Surfboard</Link>
        {this.props.children}
        {surfboards}
      </div>
    )
  }
}

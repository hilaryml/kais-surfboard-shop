import React, { Component } from 'react'

export default class Surfboards extends Component {

  constructor(props) {

    super(props)

    this.state = {

    }

  }

  handleInputChange(event) {
    const { value, name } = event.target

    this.setState({
      [name]: value,
    })
  }

  handleOnClick(event) {
    event.preventDefault

    fetch('/api/surfboards', {
      method: 'POST',
      data: { surfboard: this.state }
    })
    .then(response => response.json())
    .then(data => console.log(data))
  }

  render() {

    console.log(this.state)


    return (
      <form>

        <div className="input-group">
          <input
            className="add-surfboard-field"
            type="text"
            name="name"
            onChange={(event) => this.handleInputChange(event)}
            placeholder="Name" />
        </div>

        <div className="input-group">
          <input
            className="add-surfboard-field"
            type="number"
            name="length"
            onChange={(event) => this.handleInputChange(event)}
            placeholder="Length" />
        </div>

        <div className="input-group">
          <input
            className="add-surfboard-field"
            type="number"
            name="price"
            onChange={(event) => this.handleInputChange(event)}
            placeholder="Price" />
        </div>

        <div className="input-group">
          <input
            className="add-surfboard-field"
            type="number"
            name="quantity"
            onChange={(event) => this.handleInputChange(event)}
            placeholder="Quantity" />
        </div>

        <div className="input-group">
          <input
            className="add-surfboard-button"
            type="submit"
            value="Create Surfboard"
            onClick={(event) => this.handleInputChange(event)} />
        </div>
      </form>
    )
  }
}

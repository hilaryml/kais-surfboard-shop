import React, { Component } from 'react'

export default class Surfboards extends Component {

  constructor(props) {

    super(props)

    this.state = {
      errors: []
    }

  }

  handleInputChange(event) {
    const { value, type, name } = event.target

    if (name === 'length' && +value >= 100) {
      return this.setState({
        errors: [{ message: 'Inventory must be less than 100'}]
      })
    }

    this.setState({
      name: value,
      errors: []
    })
  }

  render() {

    console.log(this.state)

    const errors = this.state.errors.map((error, index) => (
      <div style={{color: 'red'}}>{error.message}</div>
    ))

    return (
      <form>

        {errors}

        <div className="input-group">
          <input
            className="add-surfboard-field"
            type="text"
            name="name"
            onChange={(event) => this.handleInputChange(event)}
            placeholder="Surfboard Name" />
        </div>

        <div className="input-group">
          <input
            className="add-surfboard-field"
            type="number"
            name="length"
            onChange={(event) => this.handleInputChange(event)}
            placeholder="Surfboard Length" />
        </div>

      </form>
    )
  }
}

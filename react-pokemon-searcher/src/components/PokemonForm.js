import React from 'react'
import { Form } from 'semantic-ui-react'
const initialState = {
  name: '',
  hp: '',
  frontUrl: '',
  backUrl: ''
}

class PokemonForm extends React.Component {
  constructor() {
    super()
    // POTENTIALLY EXPLORE LATER 
    // using props inside of constructor and state 


    // SHOULD STATE LIVE HERE? 
    // passing info to pokemon index so maybe not...? 
    this.state = initialState
  }

  handleChange = (e) => {
    // dynamic keys using the input name 
    this.setState({ [e.target.name] : e.target.value })
  }

  handleSubmit = (e) => {
    // preventDefault
    e.preventDefault()
    // post to the backend
    fetch('http://localhost:3000/pokemon', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: this.state.name,
        sprites: {
          front: this.state.frontUrl,
          back: this.state.backUrl
        },
        stats: [{name: 'hp', value: parseInt(this.state.hp)}]
      })
    })
      .then(res => res.json())
      .then(data => {
        // add this object to the list of pokemon 
        console.log(data)

         // V2 PESSIMITICALLY RENDERING NEW POKEMON FROM BACKEND 
         this.props.pessismisticallyRenderMon(data)
      })
    // LATERRR GATORR pessimitically render our new pokemon in its own card 

    // clearForm
    this.setState(initialState)
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" value={this.state.name} name="name" onChange={this.handleChange}/>
            <Form.Input fluid label="hp" placeholder="hp" value={this.state.hp} name="hp" onChange={this.handleChange}/>
            <Form.Input fluid label="Front Image URL" placeholder="url" value={this.state.frontUrl} name="frontUrl" onChange={this.handleChange}/>
            <Form.Input fluid label="Back Image URL" placeholder="url" value={this.state.backUrl} name="backUrl" onChange={this.handleChange}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm

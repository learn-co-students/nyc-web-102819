import React from 'react'
import { Form } from 'semantic-ui-react'
const initialState = {
  name: '',
  hp: '',
  frontUrl: '',
  backUrl: ''
}

class PokemonForm extends React.Component {


  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.props.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" value={this.props.name} name="name" onChange={this.props.handleChange}/>
            <Form.Input fluid label="hp" placeholder="hp" value={this.props.hp} name="hp" onChange={this.props.handleChange}/>
            <Form.Input fluid label="Front Image URL" placeholder="url" value={this.props.frontUrl} name="frontUrl" onChange={this.props.handleChange}/>
            <Form.Input fluid label="Back Image URL" placeholder="url" value={this.props.backUrl} name="backUrl" onChange={this.props.handleChange}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm

import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'
const initialState = {
  name: '',
  hp: '',
  frontUrl: '',
  backUrl: ''
}

class PokemonPage extends React.Component {
  state = {
    pokemon: [],
    searchTerm: '',
    name: '',
    hp: '',
    frontUrl: '',
    backUrl: ''
  }

  componentDidMount(){
    fetch('http://localhost:3000/pokemon')
      .then(res => res.json())
      .then(data => {
        this.setState(
          { pokemon: data }, 
          () => {console.log('SET STATE CALLBACK',this.state)} // use setState callback to check that state has updated
        )
      })
  }

  handleChange = (e) => {
    // dynamic keys using the input name 
    this.setState({ [e.target.name] : e.target.value })
  }

  // handleChange = (e) => {
  //   // console.log(e.target.value)
  //   this.setState({ searchTerm: e.target.value })
  // }

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
      .then(pokemon => {
        // add this object to the list of pokemon 
        console.log(pokemon)

         // V2 PESSIMITICALLY RENDERING NEW POKEMON FROM BACKEND 
         this.pessismisticallyRenderMon(pokemon)
      })
    // LATERRR GATORR pessimitically render our new pokemon in its own card 

    // clearForm
    this.setState(initialState)
  }


  // V2 PESSIMITICALLY RENDERING NEW POKEMON FROM BACKEND 
  pessismisticallyRenderMon = (newPokemon) => {
    this.setState({ pokemon: [...this.state.pokemon, newPokemon]})
  }

  
  // POTENTIALLY EXPLORE LATER 
  // componentDidUpdate(prevProps, prevState){
  //   // compared prevState of searchTerm to new one 
  //   // if not equal update 
  // }



  render() {
    let displayPokemon = this.state.pokemon.filter(pokemon => pokemon.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
    
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm 
          pessismisticallyRenderMon={this.pessismisticallyRenderMon}
          hp={this.state.hp}
          name={this.state.name}
          frontUrl={this.state.frontUrl}
          backUrl={this.state.backUrl}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}/>
        <br />
        <Search value={this.state.searchTerm} onChange={this.handleChange} />
        <br />
        <PokemonCollection pokemon={displayPokemon}/>
      </Container>
    )
  }
}

export default PokemonPage

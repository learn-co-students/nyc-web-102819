import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  state = {
    pokemon: [],
    searchTerm: ''
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


  // V2 PESSIMITICALLY RENDERING NEW POKEMON FROM BACKEND 
  pessismisticallyRenderMon = (newPokemon) => {
    this.setState({ pokemon: [...this.state.pokemon, newPokemon]})
  }

  
  // POTENTIALLY EXPLORE LATER 
  // componentDidUpdate(prevProps, prevState){
  //   // compared prevState of searchTerm to new one 
  //   // if not equal update 
  // }

  handleChange = (e) => {
    // console.log(e.target.value)
    this.setState({ searchTerm: e.target.value })
  }

  render() {
    let displayPokemon = this.state.pokemon.filter(pokemon => pokemon.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
    
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm pessismisticallyRenderMon={this.pessismisticallyRenderMon}/>
        <br />
        <Search value={this.state.searchTerm} onChange={this.handleChange} />
        <br />
        <PokemonCollection pokemon={displayPokemon}/>
      </Container>
    )
  }
}

export default PokemonPage

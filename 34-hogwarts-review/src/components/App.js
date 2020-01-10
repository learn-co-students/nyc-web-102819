import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogCard from '../HogCard';
import FilterContainer from '../FilterContainer';

class App extends Component {
  state = {
    hogs: [],
    greasedOnly: false,
    sort: 'no sort' // 'name', 'weight', 'none'
  }

  componentDidMount(){
    this.setState({ hogs: hogs }) // mock up of a fetch
  }

  changeHogDirtiness = (name) => { // IRL use IDs or anything guaranteed to be uniquec
    let newHogs = this.state.hogs.map(hog => {
      if(hog.name === name){ hog.dirty = !hog.dirty  }
      return hog 
    })

    // IF YOU DONT KNOW ABOUT TRICK ANOTHER
    // let targetHogInd = this.state.hogs.findIndex(hog => hog.name === name),
    //      targetHog = {...this.state.hogs[targetHogInd]};
    // targetHog.dirty = !targetHog.dirty

    // let newHogs = [...this.state.hogs]
    // newHogs[targetHogInd] = targetHog

    this.setState({ hogs: newHogs })
  }

  selectSort = (value) => {
    this.setState({ sort: value })
  }

  toggleGreased = () => {
    this.setState({ greasedOnly: !this.state.greasedOnly })
  }

  displayedHogsHelper = () => {
    // helper to get only the correct hogs
    let displayedHogs = [...hogs]
    if (this.state.greasedOnly){
      displayedHogs = displayedHogs.filter(hog => hog.greased)
    }
    if (this.state.sort === 'name') {
      displayedHogs.sort((hogOne, hogTwo) => hogOne.name.localeCompare(hogTwo.name))
    }
    if (this.state.sort === 'weight'){
      displayedHogs.sort((hogOne, hogTwo) => hogOne.weight > hogTwo.weight ? 1 : -1 )
    }
    return displayedHogs
  }

  render() {
    let displayedHogs = this.displayedHogsHelper()
    let cleanHogs = displayedHogs.filter(hog => !hog.dirty),
        dirtyHogs = displayedHogs.filter(hog => hog.dirty);

    return (
      <div className="App">
          < Nav />
          <FilterContainer
            greasedOnly={this.state.greasedOnly}
            toggleGreased={this.toggleGreased}
            selectSort={this.selectSort}/>
          <h1>Main Pen</h1>
          <div className="ui grid container">
            {cleanHogs.map((hog, index) => {
              return (
                <HogCard toggleDirty={this.changeHogDirtiness} key={index} hog={hog}/>
              )
            })}
          </div>
          <h1>Dirty Pen</h1>
          <div className="ui grid container">
            {dirtyHogs.map((hog, index) => {
              return (
                <HogCard toggleDirty={this.changeHogDirtiness} key={index} hog={hog}/>
              )
            })}
          </div>

      </div>
    )
  }
}

export default App;

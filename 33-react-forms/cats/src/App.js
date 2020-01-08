import React from 'react';
import './App.css';
import Navbar from './Navbar';
import SelectorBar from './SelectorBar';
import CatItem from './CatItem';
import CatView from './CatView';

class App extends React.Component {
  state = { 
    selectedCat: null, 
    allCats: [],
    view: 'all'
  }

  handleClick = (e) => { // handleClick('all')
    this.setState({ view: e.target.id })
  }

  selectCat = (id) => {
    if(!id){
      this.setState({ selectedCat: id })
    } else {
      fetch(`http://localhost:3001/cats/${id}?_embed=messages`)
        .then(res => res.json())
        .then(data => {
          this.setState({ selectedCat: data })
        })
    }
  }

  loadCats = () => {
    // do some fancy fetch thangs
    console.log('inside load cats')
    fetch('http://localhost:3001/cats')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        this.setState({ allCats: data  }) // persist them in the frontend on our state! 
        // what do i do with my data 
      })
  }

  render() {
    // console.log(this.state.view)  // all, matches, favorites
    let displayCats = [...this.state.allCats]
    if (this.state.view === 'matches') {
     displayCats =  displayCats.filter( cat => cat.match )
    } else if (this.state.view === 'favorites') {
     displayCats =  displayCats.filter( cat => cat.favorite )
    }

    console.log(displayCats)
    

    return (
      <div className="App" style={{ color: 'red'}}>
        <Navbar/>
        <div id="main"> 
          <SelectorBar 
            selectCat={this.selectCat} 
            loadCats={this.loadCats}
            view={this.state.view}
            handleClick={this.handleClick}/>
          <div id="cat-container">
            {!this.state.selectedCat 
              ? displayCats.map((catInfo) => {
                return <CatItem
                        key={catInfo.id}
                        id={catInfo.id}
                        name={catInfo.name} 
                        image={catInfo.image} 
                        selectCat={this.selectCat}/>
            }) 
            : <CatView 
                id={this.state.selectedCat.id}
                name={this.state.selectedCat.name} 
                image={this.state.selectedCat.image} 
                description={this.state.selectedCat.description}
                messages={this.state.selectedCat.messages}/>
          }
          </div>
        </div>
      </div>
    );
  }
}

export default App;

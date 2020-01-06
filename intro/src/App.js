import React from 'react';
import Header from './Header';
import SearchBar from './SearchBar'
import List from './List'



class App extends React.Component {
  render() {
    return (
      <div>
       <Header />
       <SearchBar />
       <List items={["Eggs", "Milk", "Pocket Squares", "Kravat"]} />
     </div>
    )
  }
}

// const App = () => {
//   return (
//     <div>
//       <Header />
//       <SearchBar />
//       <List />
//     </div>
//   )
// }


export default App;
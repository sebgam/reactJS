//dependences 
import React, { Component } from 'react';


//componentes
import Header from './global/Header';
import Content from './global/Content';
import Footer from './global/Footer';

//data
import items from '../data/menu'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="DesarrolloG" items={items}/>
        <Content />
        <Footer copyright = " &copy; Sebastian Gamboa 2017" />
      </div>
    );
  }
}

export default App;

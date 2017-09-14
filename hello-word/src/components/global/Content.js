import React, { Component } from 'react';

//assets
import './css/Content.css';

class Content extends Component {
  render() {
    return (
      <div className="footer">
      	<h1>contenido</h1>
      	<img src="http://lorempixel.com/400/200"/>
        <p> Soy el contenido</p>
      </div>
    );
  }
}

export default Content;
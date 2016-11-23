import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dailyclouds: []
    }
  }

  componentWillMount() {
    fetch('https://api.github.com/repos/inmagik/newswordclouds/contents/dailyclouds?ref=stock')
      .then(response => response.json())
      .then(contents => contents.map(({ name }) => name))
      // .then(dailyclouds => Array(20).fill().map((_, i) => dailyclouds[0]))
      .then(dailyclouds => this.setState({ dailyclouds }))
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Newsclouds</h2>
        </div>
        {this.state.dailyclouds.map((dailycloud, i) => {
          const imageUrl = `https://raw.githubusercontent.com/inmagik/newswordclouds/stock/dailyclouds/${dailycloud}/newsimage.jpg`
          return (
            <div key={`dailycloud-${i}`} className="App-dailyclouds">
              <a href={imageUrl} target="_blank">
                <img height="200px" src={imageUrl} />
              </a>
            </div>
          )
        })}
      </div>
    );
  }
}

export default App;

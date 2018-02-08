import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tableau from './components/Tableau';

class App extends Component {
  constructor(){
    super()
    this.state = {
      cryptos : []
    }
  }
  componentDidMount(){
    window.fetch('https://api.coinmarketcap.com/v1/ticker/')
    .then(data => data.json())
    .then(cryptos => this.setState({ cryptos })
    )
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="crypto-list">
          <Tableau cryptos={this.state.cryptos}/>
        </div>
      </div>
    );
  }
}

export default App;

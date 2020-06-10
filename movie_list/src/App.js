import React from 'react';
import './App.css';
import './data/movies.js';

class App extends React.Component {

  state = {
    WelcomeText : "What's up"
  }

  greeting() {
    return this.state.WelcomeText;
  };

  changeText() {
    console.log('sup')
    return this.setState({
      WelcomeText : "Goodbye"
    })
  }

  render() {
  
    return (
      
      
  
      <div className="App">
        <header className="App-header">
          <h1>{this.greeting()}</h1>
          <button onClick={this.changeText}>Change Banner</button>
        </header>
      </div>
    );
    }
}

export default App;

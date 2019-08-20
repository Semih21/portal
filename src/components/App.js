import React, { Component } from "react";
import News from "./News/News";

class App extends Component {
  state = {
    news1: {
      type: "top-headlines",
      country: "country=nl",
      category: "category=entertaintment"
    },
    news2: {
      type: "top-headlines",
      country: "country=nl",
      category: "category=sports"
    },
    news3: {
      type: "top-headlines",
      country: "country=nl",
      category: "category=science"
    }
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h3 className="center App-title">MIJN NIEUWS</h3>
        </header>
        <News news={this.state.news1} />
        <News news={this.state.news2} />
        <News news={this.state.news3} />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import "./App.css";
import NavBar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 2 },
      { id: 2, value: 1 },
      { id: 3, value: 0 }
    ]
  };

  handleReset = () => {
    const counters = this.state.counters.map(counter => {
      counter.value = 0;
      return counter;
    });
    this.setState({ counters });
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDelete = counterID => {
    const counters = this.state.counters.filter(
      counter => counter.id !== counterID
    );
    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main role="main" className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
          ></Counters>
        </main>
      </React.Fragment>
    );
  }
}

export default App;

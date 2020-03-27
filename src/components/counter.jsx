import React, { Component } from "react";

class Counter extends Component {
  state = {
    food: ["Cookie", "Chocolate"]
  };

  render() {
    return (
      <div>
        {this.props.children}
        <h1 className={this.getBadgeClasses()}>{this.formatCounter()}</h1>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm m-2"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        {/* Conditional rendering inline */}
        {this.state.food.length === 0 && "We will get back to you soon."}{" "}
        {/* Conditional rendering using method */}
        {this.renderFood()}
      </div>
    );
  }

  /* Conditional rendering using method */
  renderFood() {
    if (this.state.food.length === 0) return "No food in stocks!!";
    return (
      <ul>
        {this.state.food.map(food => (
          <li key={food}>{food}</li>
        ))}
      </ul>
    );
  }

  formatCounter = () => {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  };

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;

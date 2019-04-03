import React, { Component } from "react";
import { connect } from "react-redux";

const counterStyle = {
  width: 200,
  height: 200,
  margin: "50px auto",
  border: "1px solid green",
  textAlign: "center"
};
function mapStateToProps(state) {
  return {
    count: state.count
  };
}

class Counter extends Component {
  decrement() {
    this.props.dispatch({ type: "DECREMENT" });
  }

  increment() {
    this.props.dispatch({ type: "INCREMENT" });
  }

  render() {
    return (
      <div style={counterStyle}>
        <h2>COUNTER</h2>
        <button onClick={() => this.decrement()}>-</button>
        <span>{this.props.count}</span>
        <button onClick={() => this.increment()}>+</button>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Counter);

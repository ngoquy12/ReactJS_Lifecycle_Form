import React, { Component } from "react";

export default class Random_Number extends Component {
  // Khởi tạo constructor
  constructor(props) {
    super(props);
    // Khai báo state
    this.state = {
      number: 0,
    };
  }
  render() {
    return (
      <div>
        <div>Random_Number</div>
        <h2>{this.state.number}</h2>
        <button
          onClick={() =>
            this.setState({
              number: Math.ceil(Math.random() * 10000),
            })
          }
        >
          Count
        </button>
      </div>
    );
  }
}

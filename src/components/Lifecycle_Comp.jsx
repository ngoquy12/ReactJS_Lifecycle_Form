import React, { Component } from "react";

export default class Lifecycle_Comp extends Component {
  // Khởi tạo constructor
  constructor(props) {
    console.log("Hàm constructor được khởi tạo");
    super(props);
    // Khởi tạo state
    this.state = {
      userName: "Nguyễn Văn A",
    };
  }

  componentWillMount() {
    console.log("Component Will Mount được gọi"); // Không nên gọi các side effect
  }

  componentDidMount() {
    console.log("Component Did Mount được gọi"); // Có thể gọi API
  }

  componentWillReceiveProps(newProps) {
    console.log("Component Will Receive Props - New Props ", newProps.company);
  }

  shouldComponentUpdate() {
    console.log("Should Component Update được gọi"); // Quyết định Componnet có được update hay không?
    return true;
  }

  componentWillUpdate() {
    console.log("Component Will Update được gọi");
  }

  componentDidUpdate() {
    console.log("Component Did Update được gọi"); // Nên gọi API
  }

  componentWillUnmount() {
    console.log("Component Will Unmount được gọi");
  }

  render() {
    console.log("Component được render");
    // Hàm thay đổi state
    const handleChangeState = () => {
      this.setState({
        userName: "Nguyễn Văn B",
      });
    };
    return (
      <>
        <h1>Lifecycle_Comp</h1>
        <h2>Company: {this.props.company}</h2>
        <h2>UserName: {this.state.userName}</h2>
        <button onClick={handleChangeState}>Change state</button>
      </>
    );
  }
}

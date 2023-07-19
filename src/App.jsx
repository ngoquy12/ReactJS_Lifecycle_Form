import React, { Component } from "react";
import Lifecycle_Comp from "./components/Lifecycle_Comp";
import "./App.css";
import Random_Number from "./components/Random_Number";
import Form_Controlled from "./components/Form_Controlled";

export default class App extends Component {
  // Khởi tạo constructor
  constructor(props) {
    super(props);
    // Khởi tạo state
    this.state = {
      company: "Rikkei Academy",
      showComp: false,
      showForm: false,
    };
  }
  render() {
    // Thay đổi props
    const handleChangeProps = () => {
      this.setState({
        company: "Rikkeisoft",
      });
    };

    // Hiển thị hoặc ẩn đi Lifecycle_Comp
    const handleShowComp = () => {
      this.setState({
        showComp: !this.state.showComp,
      });
    };

    // Hàm hiển thị form
    const handleShowForm = () => {
      this.setState({
        showForm: true,
      });
    };

    // Hàm hiển thị form
    const handleCloseForm = () => {
      this.setState({
        showForm: false,
      });
    };

    return (
      // <>
      //   {this.state.showComp ? (
      //     <Lifecycle_Comp company={this.state.company} />
      //   ) : (
      //     <></>
      //   )}

      //   <button onClick={handleChangeProps}>Change Props</button>
      //   <button onClick={handleShowComp}>Show Component</button>
      //   <Random_Number />
      // </>
      <>
        {this.state.showForm ? (
          <Form_Controlled handleCloseForm={handleCloseForm} />
        ) : (
          <></>
        )}
        <button onClick={handleShowForm}>Show form</button>
      </>
    );
  }
}

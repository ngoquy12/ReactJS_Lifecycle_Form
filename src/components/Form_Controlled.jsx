import React, { Component } from "react";
import "./form.css";
import { formatDate } from "./formatData/index";

export default class Form_Controlled extends Component {
  // Khởi tạo constructor
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      email: "",
      password: "",
    };
  }
  render() {
    // Lấy giá trị trong form
    const handleChange = (event) => {
      // Lấy tên của ô input
      let name = event.target.name;
      // Lấy giá trị của ô input
      let value = event.target.value;
      // set lại state
      this.setState({
        [name]: value, // Dùng toán tử distructoring để gán lại value cho từng ô input
      });
    };

    // Hàm gửi dữ liệu lên server
    const handleSubmit = (event) => {
      event.preventDefault();
      // Dữ liệu gửi lên server
      const newUser = {
        UserName: this.state.userName,
        Email: this.state.email,
        Password: this.state.password,
        CreatedDate: formatDate(new Date()),
      };

      // Gửi dữ liệu lên server
      console.log("newUser", newUser);
    };
    return (
      <>
        <form className="form-container" onSubmit={handleSubmit}>
          <h3>Đăng ký</h3>
          <div className="form-group">
            <label className="form-lable" htmlFor="">
              Username
            </label>
            <input
              name="userName"
              value={this.state.userName}
              onChange={handleChange}
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label className="form-lable" htmlFor="">
              Email
            </label>
            <input
              value={this.state.email}
              onChange={handleChange}
              name="email"
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label className="form-lable" htmlFor="">
              Password
            </label>
            <input
              value={this.state.password}
              onChange={handleChange}
              name="password"
              type="password"
              className="form-control"
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            style={{ marginRight: 10 }}
          >
            Submit
          </button>
          <button type="button" onClick={this.props.handleCloseForm}>
            Hủy
          </button>
        </form>
      </>
    );
  }
}

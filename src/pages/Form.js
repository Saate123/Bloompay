import React, { Component } from "react";
import Image from "../images/bloom1.png";
import "../styles/FormStyle.css";
import { Link } from "react-router-dom";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  handleSubmit(event) {
    event.preventDefault();
    // Navigate to the dashboard page
    window.location.href = "/ImageList/Dashboard";
  }

  render() {
    return (
      <div className="login">
        <img src={Image} />
        <h5>Welcome Back!</h5>
        <form onSubmit={this.handleSubmit}>
          <p>Enter your email and password to signin</p>
          <label>Email</label>
          <input
            type="email"
            value={this.state.email}
            onChange={this.handleEmailChange}
            placeholder="Enter your email address"
          />
          <label>Password</label>
          <input
            type="password"
            value={this.state.password}
            onChange={this.handlePasswordChange}
            placeholder="Enter your password"
          />
          <div className="check">
            <input type="checkbox" id="checked" />
            <p className="me">Remember me</p>
          </div>
          <button type="submit">SIGN IN</button>
          <p className="have">
            Don't have an account? <Link to="/signup">SignUp</Link>
          </p>
        </form>
        <p className="made">@2025</p>
      </div>
    );
  }
}

export default Form;

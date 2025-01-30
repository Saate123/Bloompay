import React, { Component } from "react";
import Image from "../images/bloom1.png";
import "../styles/FormStyle.css";
import { Link } from "react-router-dom";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  handleSubmit(event) {
    event.preventDefault();
    // Form submission logic here
    // For demonstration purposes, we'll assume the registration is successful
    alert("Registration successful!");
    // Navigate to the dashboard page
    window.location.href = "/ImageList/Dashboard";
  }

  render() {
    return (
      <div className="login">
        <img src={Image} />
        <form onSubmit={this.handleSubmit}>
          <p className="reg">Register</p>
          <label>Name</label>
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleNameChange}
            placeholder="Enter your name"
          />
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
          <button type="submit">SIGN UP</button>
          <p className="have">
            Already have an account? <Link to="/">SignIn</Link>
          </p>
        </form>
        <p className="made">@2025</p>
      </div>
    );
  }
}

export default Signup;

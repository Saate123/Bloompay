import React, { Component } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios"; // For API requests
import Image from "../images/bloom1.png";
import "../styles/FormStyle.css";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: "",
      isAuthenticated: false,
    };
  }

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("https://your-api.com/login", {
        email: this.state.email,
        password: this.state.password,
      });

      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        this.setState({ isAuthenticated: true });
      }
    } catch (error) {
      this.setState({ error: "Invalid email or password" });
    }
  };

  render() {
    if (this.state.isAuthenticated) {
      return <Navigate to="/ImageList/Dashboard" />;
    }

    return (
      <div className="login">
        <img src={Image} alt="Login" />
        <h5>Welcome Back!</h5>
        <form onSubmit={this.handleSubmit}>
          <p>Enter your email and password to sign in</p>
          <label>Email</label>
          <input
            type="email"
            value={this.state.email}
            onChange={this.handleEmailChange}
            placeholder="Enter your email address"
            required
          />
          <label>Password</label>
          <input
            type="password"
            value={this.state.password}
            onChange={this.handlePasswordChange}
            placeholder="Enter your password"
            required
          />
          <div className="check">
            <input type="checkbox" id="checked" />
            <p className="me">Remember me</p>
          </div>
          {this.state.error && <p className="error">{this.state.error}</p>}
          <button type="submit">SIGN IN</button>
          <p className="have">
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </form>
        <p className="made">@2025</p>
      </div>
    );
  }
}

export default Form;

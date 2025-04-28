// LoginPage.js
import React, { Component } from 'react';
import './LoginPage.css';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      role: 'customer' // default role
    };
  }

  handleInputChange = (e) => {
    this.setState({ username: e.target.value });
  };

  handleRoleChange = (e) => {
    this.setState({ role: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { role, username } = this.state;
    if (username.trim()) {
      this.props.onLogin(role, username);
    }
  };

  render() {
    const { username, role } = this.state;

    return (
      <div className="login-container">
        <h2>Login to Library System</h2>
        <form onSubmit={this.handleSubmit} className="login-form">
          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={this.handleInputChange}
            className="login-input"
            required
          />
          <select value={role} onChange={this.handleRoleChange} className="login-select">
            <option value="admin">Admin</option>
            <option value="customer">Customer</option>
          </select>
          <button type="submit" className="login-button">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginPage;

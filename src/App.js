// LibraryApp.js
import React, { Component } from 'react';
import './LibraryApp.css';
import LoginPage from './LoginPage';
import AdminLibraryPage from './components/AdminLibraryPage';
import CustomerLibraryPage from './components/CustomerLibraryPage';

class LibraryApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      role: '',
      username: '',
      isLoading: false
    };
  }

  handleLogin = (role, username) => {
    this.setState({ isLoading: true });

    // Simulate a loading delay
    setTimeout(() => {
      this.setState({
        isLoggedIn: true,
        role,
        username,
        isLoading: false
      });
    }, 1000); // 1 second loading
  };

  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
      role: '',
      username: ''
    });
  };

  render() {
    const { isLoggedIn, role, username, isLoading } = this.state;

    if (isLoading) {
      return <div className="loading">Loading...</div>;
    }

    if (!isLoggedIn) {
      return <LoginPage onLogin={this.handleLogin} />;
    }

    return (
      <div className="library-app">
        <div className="header">
          <h2>Welcome, {username}!</h2>
          <button className="logout-button" onClick={this.handleLogout}>
            Logout
          </button>
        </div>

        {role === 'admin' && <AdminLibraryPage username={username} />}
        {role === 'customer' && <CustomerLibraryPage username={username} />}
        
        {role !== 'admin' && role !== 'customer' && (
          <div className="error">Unknown role: {role}</div>
        )}
      </div>
    );
  }
}

export default LibraryApp;

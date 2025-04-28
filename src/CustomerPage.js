// CustomerPage.js
import React from 'react';

const CustomerPage = ({ username }) => {
  return (
    <div className="customer-page">
      <h2>Welcome {username}!</h2>
      <p>Explore the library and find your favorite books.</p>
    </div>
  );
};

export default CustomerPage;

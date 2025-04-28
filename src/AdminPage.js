// AdminPage.js
import React from 'react';

const AdminPage = ({ username }) => {
  return (
    <div className="admin-page">
      <h2>Welcome Admin, {username}!</h2>
      <p>You can manage the inventory, update books, track sales, and more.</p>
    </div>
  );
};

export default AdminPage;

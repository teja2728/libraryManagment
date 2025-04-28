import React, { useState } from 'react';

const CustomerLibraryPage = () => {
  const [books] = useState([
    { id: 1, title: 'Introduction to Algorithms', author: 'Cormen', price: 700 },
    { id: 2, title: 'Operating Systems Concepts', author: 'Silberschatz', price: 650 },
  ]);

  const [cart, setCart] = useState([]);

  const handleAddToCart = (book) => {
    setCart([...cart, book]);
  };

  const totalPrice = cart.reduce((sum, book) => sum + book.price, 0);

  return (
    <div className="customer-library-page">
      <h2>Customer - Library</h2>

      <h3>Available Books</h3>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            {book.title} - {book.author} - ₹{book.price}
            <button onClick={() => handleAddToCart(book)}>Add to Cart</button>
          </li>
        ))}
      </ul>

      <h3>Your Cart</h3>
      <ul>
        {cart.map((book, index) => (
          <li key={index}>
            {book.title} - ₹{book.price}
          </li>
        ))}
      </ul>

      <h4>Total: ₹{totalPrice}</h4>
    </div>
  );
};

export default CustomerLibraryPage;

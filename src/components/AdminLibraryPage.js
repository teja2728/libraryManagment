import React, { useState } from 'react';

const AdminLibraryPage = () => {
  const [books, setBooks] = useState([
    { id: 1, title: 'Introduction to Algorithms', author: 'Cormen', price: 700 },
    { id: 2, title: 'Operating Systems Concepts', author: 'Silberschatz', price: 650 },
  ]);

  const [newBook, setNewBook] = useState({ title: '', author: '', price: '' });

  const handleChange = (e) => {
    setNewBook({
      ...newBook,
      [e.target.name]: e.target.value
    });
  };

  const handleAddBook = () => {
    if (newBook.title && newBook.author && newBook.price) {
      setBooks([...books, { id: Date.now(), ...newBook, price: parseFloat(newBook.price) }]);
      setNewBook({ title: '', author: '', price: '' });
    }
  };

  const handleDeleteBook = (id) => {
    setBooks(books.filter(book => book.id !== id));
  };

  return (
    <div className="admin-library-page">
      <h2>Admin - Library Management</h2>
      
      <div className="add-book-form">
        <input 
          type="text" 
          name="title" 
          placeholder="Book Title" 
          value={newBook.title}
          onChange={handleChange}
        />
        <input 
          type="text" 
          name="author" 
          placeholder="Author" 
          value={newBook.author}
          onChange={handleChange}
        />
        <input 
          type="number" 
          name="price" 
          placeholder="Price"
          value={newBook.price}
          onChange={handleChange}
        />
        <button onClick={handleAddBook}>Add Book</button>
      </div>

      <h3>Books Inventory</h3>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            {book.title} - {book.author} - ₹{book.price}
            <button onClick={() => handleDeleteBook(book.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminLibraryPage;

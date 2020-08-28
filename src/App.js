import React, { useState } from 'react';
import './App.css';
import axios from 'axios';


function App() {

  const [book, setBook] = useState("");
  const [result, setResult] = useState([]);
  const [apiKey, setApiKey] = useState("AIzaSyD7qlJTDVADKE8NBVQ81Cv7LkVyobbgT3U");

  function handleChange(event) {
    const book = event.target.value;
    setBook(book);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(book);
  }

  return (
    <div className="container">
      <h1>Search for your favorite Books</h1>
      <form onSubmit={handleSubmit}>
        <div class="form-group">
          <input type="text" onChange={handleChange} className="form-control mt-10" placeholder="Search for books" autoComplete="off" />
        </div>
        <button type="submit" className="btn btn-danger">Search</button>
      </form>
    </div>
  );
}

export default App;

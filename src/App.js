import React from 'react';
import './App.css';
import axios from 'axios';

function App() {
  return (
    <div className="container">
      <h1>Search for your favorite Books</h1>
      <form>
        <div class="form-group">
          <input type="text" className="form-control mt-10" placeholder="Search for books" autoComplete="off" />
        </div>
        <button type="submit" className="btn btn-danger">Search</button>
      </form>
    </div>
  );
}

export default App;

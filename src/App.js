import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  return (
    <div className="container">
      <form>
        <div class="form-group">
          <input type="text" className="input-control" placeholder="Search for books" autoComplete="off" />
        </div>
      </form>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import './App.css';
import axios from 'axios';



function App() {
  const [book, setBook] = useState("");
  const [result, setResult] = useState([]);
  const [apiKey] = useState(process.env.REACT_APP_API_KEY);

  function handleChange(event) {
    const book = event.target.value;
    setBook(book);
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios.get("https://www.googleapis.com/books/v1/volumes?q="+book+"&key="+apiKey+"&maxResults=25")
    .then(data => {
      console.log(data.data.items);
      setResult(data.data.items);
    })
  }

  return (
    <div className="container">
      <h1>Search for your favorite Books</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input type="text" onChange={handleChange} className="form-control mt-10" placeholder="Search for books" autoComplete="off" />
        </div>
        <button type="submit" className="btn btn-danger">Search</button>
      </form>

      {result.map(book => (
        <a target="_blank" rel="noopener noreferrer" href={book.volumeInfo.previewLink}>
        <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.title}/>
        <button type="submit" className="btn btn-danger">Save</button>
        </a>
      ))}
    </div>
  );
}

export default App;

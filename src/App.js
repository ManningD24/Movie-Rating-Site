import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import MovieList from './components/movie-list';
import React from 'react';

function App() {
  return (
    <div
    style={{
      backgroundColor: 'black'
    }}
    >
      <Navbar />
      <MovieList />
    </div>
  );
}

export default App;
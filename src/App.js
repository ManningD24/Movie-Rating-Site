import logo from './logo.svg';
import './App.css';
import Navigation from './Navbar';
import MovieList from './components/movie-list';
import React from 'react';

function App() {
  return (
    <div
    style={{
      backgroundColor: 'black'
    }}
    >
      <Navigation />
      <MovieList />
    </div>
  );
}

export default App;
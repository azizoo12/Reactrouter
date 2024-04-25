// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import MoviePage from './components/MoviePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Add custom styles if needed

function App() {
  const movies = [
    {
      title: 'inception',
      description: 'A thief who steals corporate secrets through the use of dream-sharing technology',
      trailer: 'https://www.youtube.com/watch?v=CPTIgILtna8',
    },
    {
      title: 'Interstellar',
      description: 'A film that explores the psychological and emotional state of a man whose life revolves around his family',
      trailer: 'https://www.youtube.com/watch?v=VaOijhK3CRU',
    },
    // Add more movie data as needed
  ];

  return (
    <Router>
      <div className="container mt-4">
        <Switch>
          <Route exact path="/">
            <HomePage movies={movies} />
          </Route>
          <Route path="/movie/:id">
            <MoviePage movies={movies} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

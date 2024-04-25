// src/components/MoviePage.js
import React from 'react';
import { Link, useParams } from 'react-router-dom';

function MoviePage({ movies }) {
  const { id } = useParams();
  const movie = movies[id];

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <div className="embed-responsive embed-responsive-16by9">
        <iframe
          className="embed-responsive-item"
          src={movie.trailer}
          title="Movie Trailer"
          allowFullScreen
        ></iframe>
      </div>
      <Link to="/">Go Back</Link>
    </div>
  );
}

export default MoviePage;

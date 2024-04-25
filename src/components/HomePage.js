import React from 'react';
import { Link } from 'react-router-dom';

function HomePage({ movies }) {
  return (
    <div>
      <h1>Movie List</h1>
      <div className="row">
        {movies.map((movie, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <Link to={`/movie/${index}`} style={{ textDecoration: 'none' }}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{movie.title}</h5>
                  <p className="card-text">{movie.description}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;

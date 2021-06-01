import React, { useState, useEffect } from 'react';
import axios from './axios';
import './Row.css';

const base_url = 'https://image.tmdb.org/t/p/original/';

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  // A snippet of code which runs based on a specific condition/variable
  // when row loads run useEffect code
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      console.log(request.data.results);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]); // if [], runs once when row loads, and don't run again if left blank

  console.log(movies);

  return (
    <div className='row'>
      <h2>{title}</h2>

      <div className='row__posters'>
        {/* several row__poster(s) */}

        {movies.map((movie) => (
          <img
            className='row__poster'
            src={`${base_url}${movie.poster_path}`}
            alt={movie.name}
          />
        ))}
      </div>

      {/* container -> posters */}
    </div>
  );
}

export default Row;

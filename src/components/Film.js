import React from 'react';

const Film = ({ film }) => {
    return (
        <div className="card">
            <h3>{film.title}</h3>
            <p>Title - {film.title}</p>
            <p>Episode ID - {film.episode_id}</p>
            <p>Release Date - {film.release_date}</p>
            <p>Director - {film.director}</p>
        </div>
    )
}
export default Film;
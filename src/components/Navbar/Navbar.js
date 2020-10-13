import React from 'react';

const Navbar= ({ setPage }) => {
    return (
        <nav>
            <button onClick={() => setPage('FilmTable')}>Film Table</button>
            <button onClick={() => setPage('SortedFilmTable')}>Sorted Film Table</button>
        </nav>
        
    );
}

export default Navbar;
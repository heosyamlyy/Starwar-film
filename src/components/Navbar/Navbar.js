import React from 'react';
import Button from '@material-ui/core/Button';


const Navbar= ({ setPage }) => {
    return (
        <nav>
            <Button variant="contained" onClick={() => setPage('FilmTable')}>Film Table</Button>
            <Button variant="contained" color="primary" onClick={() => setPage('SortedFilmTable')}>
                Sorted Film Table
            </Button>
        </nav>
        
    );
}

export default Navbar;
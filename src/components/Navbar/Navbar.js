import React from 'react';
import Button from '@material-ui/core/Button';


const Navbar= ({ setPage }) => {
    return (
        <nav>
            <Button variant="contained" 
            onClick={() => setPage('FilmTable') } 
            data-testid = 'FilmTableButton'>
                Film Table
            </Button>
            <Button variant="contained" 
            color="primary" 
            onClick={() => setPage('SortedFilmTable')}
            data-testid='SortedFilmTableButton'>
                Sorted Film Table
            </Button>
        </nav>
        
    );
}

export default Navbar;
import React, {useState} from 'react';
import { useQuery } from 'react-query';
import '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import Navbar from './../Navbar/Navbar.js'
import FilmTable from './../FilmTable/FilmTable.js'
import SortedFilmTable from './../SortedFilmTable/SortedFilmTable.js'

//Fetch the film data from swapi.dev
const fetchFilm = async () => {
    const res = await fetch('http://swapi.dev/api/films/');
    return res.json();
}

const Films = () => {
    const { data, status } = useQuery('film', fetchFilm);
    //Set the initial state to FilmTable
    const [page, setPage] = useState('FilmTable');
    
    return (
        <div>
            {status === 'loading' && (
                    <div>
                        <Skeleton data-testid="Skeleton" />
                        <Skeleton animation={false} />
                        <Skeleton animation="wave" />
                    </div>
                )}
            {status === 'error' && (
                <div> Error fetching data</div>
            )}
            {status === 'success' && (
                <div> 
                    <Navbar setPage={setPage}></Navbar>
                    <div>
                        {page === 'FilmTable' ? 
                        <FilmTable film={data.results}></FilmTable> : 
                        <SortedFilmTable film={data.results}></SortedFilmTable>}
                    </div>
                </div>
                
            )}
        </div>
    );
}
export default Films;
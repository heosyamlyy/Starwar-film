import React from 'react';
import { useQuery } from 'react-query';
import '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import './Films.css';
import FilmTable from '../FilmTable/FilmTable.js'

const fetchFilm = async () => {
    const res = await fetch('http://swapi.dev/api/films/');
    return res.json();
}

const Films = () => {
    const { data, status } = useQuery('film', fetchFilm);
    //console.log(data);
    return (
        <div>
            {
                status === 'loading' && (
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
                <FilmTable film={data.results}></FilmTable>
                //makeTable(data.results)
                //{data.results.map(planet => <Planet key={planet.name} planet={planet} />)}
              
            )}
        </div>
    );
}
export default Films;
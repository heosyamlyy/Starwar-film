import React from 'react';
import { useQuery } from 'react-query';
import '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import './Films.css';
import FilmTable from './FilmTable.js'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';



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
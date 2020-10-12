import React from 'react';
import { useQuery } from 'react-query';
import '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import './Films.css';

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

function makeTable(film) {
    const classes = makeStyles({
        table: {
            minWidth: 650,
            maxWidth: 1000,
        },
    });

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} size="medium" aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Title</TableCell>
                        <TableCell align="center">Episode ID</TableCell>
                        <TableCell align="center">Release Date</TableCell>
                        <TableCell align="center">Director</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {film.map((film) => (
                        <TableRow key={film.title}>
                            <TableCell component="th" scope="row" align="center">
                                {film.title}
                            </TableCell>
                            <TableCell align="center">{film.episode_id}</TableCell>
                            <TableCell align="center">{film.release_date}</TableCell>
                            <TableCell align="center">{film.director}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
    
const Films = () => {
    const { data, status } = useQuery('film', fetchFilm);
    console.log(data);

    return (
        <div>
            {
                status === 'loading' && (
                    <div>
                        
                        <Skeleton />
                        <Skeleton animation={false} />
                        <Skeleton animation="wave" />
                    </div>



                )}
            {status === 'error' && (
                <div> Error fetching data</div>
            )}
            {status === 'success' && (
                
                makeTable(data.results)
                //{data.results.map(planet => <Planet key={planet.name} planet={planet} />)}
              
            )}
        </div>
    );
}
export default Films;
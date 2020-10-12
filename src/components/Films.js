import React from 'react';
import { useQuery } from 'react-query';
import Film from './Film';
import '@material-ui/core';
import { Skeleton } from '@material-ui/lab';

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
        },
    });

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell>Title</TableCell>
                        <TableCell align="right">Episode ID</TableCell>
                        <TableCell align="right">Release Date</TableCell>
                        <TableCell align="right">Director</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {film.map((film) => (
                        <TableRow key={film.title}>
                            <TableCell component="th" scope="row">
                                {film.title}
                            </TableCell>
                            <TableCell align="right">{film.episode_id}</TableCell>
                            <TableCell align="right">{film.release_date}</TableCell>
                            <TableCell align="right">{film.director}</TableCell>
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
            <h2>Film</h2>
            <p>{status}</p>
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
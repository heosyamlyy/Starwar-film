import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
        background: '#FFFF22',

    },
    tableCell: {
        borderBottomWidth: 2,
        borderColor: "black",

    }
});


export default function FilmTable({film}) {
    const classes = useStyles();
    const filmContent = film;
    console.log(filmContent);
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} size="medium" aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className={classes.tableCell} align="center">Title</TableCell>
                        <TableCell className={classes.tableCell} align="center">Episode ID</TableCell>
                        <TableCell className={classes.tableCell} align="center">Release Date</TableCell>
                        <TableCell className={classes.tableCell} align="center">Director</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {filmContent.map((filmContent) => (
                        <TableRow key={filmContent.title}>
                            <TableCell component="th" scope="row" align="center">
                                {filmContent.title}
                            </TableCell>
                            <TableCell align="center">{filmContent.episode_id}</TableCell>
                            <TableCell align="center">{filmContent.release_date}</TableCell>
                            <TableCell align="center">{filmContent.director}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );

}
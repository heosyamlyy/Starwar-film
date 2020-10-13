import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import './SortedFilmTable.css';
import { makeStyles } from '@material-ui/core/styles';



const columns = [
    { field: 'id', headerName: 'Episode ID', type: 'number', width: 120 },

    { field: 'title', headerName: 'Title', width: 200 },
    { field: 'release_date', headerName: 'Release Date', type: 'date', width: 200 },

    { field: 'director', headerName: 'Director', width: 200 },

];
const useStyles = makeStyles({
    table: {
        height: 450,
        width: '100%',
        background: '#FFFF22',
    },
    
});


function addID(dataList) {
    var outputData = [];
    for (var i = 0; i < dataList.length; i++) {
        dataList[i]['id'] = dataList[i]['episode_id'];
        outputData.push(dataList[i]);
    }
    return outputData;
}
function DataTable({ film }) {
    //const rows = person;
    const classes = useStyles();
    const rows = addID(film);
    return (
        <div className={classes.table}>
            <DataGrid rows={rows} columns={columns} pageSize={10} />
        </div>
    );
}

export default DataTable;

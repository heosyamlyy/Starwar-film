import React from 'react';
import { useQuery } from 'react-query';
import Film from './Film';
//import Skeleton from '@material-ui/lab/Skeleton';


const fetchFilm = async () => {
    const res = await fetch('http://swapi.dev/api/films/');
    return res.json();
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

                    <div>loading</div>


                )}
            {status === 'error' && (
                <div> Error fetching data</div>
            )}
            {status === 'success' && (
                <div>
                    {data.results.map(flim => <Film key={flim.title} film={flim} />)}
                </div>
            )}
        </div>
    );

}
export default Films;
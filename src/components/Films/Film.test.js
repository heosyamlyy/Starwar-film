import React from 'react';
import ReactDOM from 'react-dom';
import {render} from '@testing-library/react';
import { Skeleton } from '@material-ui/lab';
import Navbar from './../Navbar/Navbar.js';


it('renders Skeleton correctly', () => {
    const div = document.createElement('div');
    render(<Skeleton />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('renders Navbar correctly', async () => {
    //await waitForDomChange();

    const div = document.createElement('div');
    render(<Navbar />, div);
    ReactDOM.unmountComponentAtNode(div);
});



const fetchFilm = async () => {
    const res = await fetch('http://swapi.dev/api/films/');
    return res.json();
}


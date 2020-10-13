import React from 'react';
import ReactDOM from 'react-dom';
import { Skeleton } from '@material-ui/lab';
import Navbar from './../Navbar/Navbar.js';


it('renders Skeleton correctly', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Skeleton />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('renders Navbar correctly', async () => {
    //await waitForDomChange();

    const div = document.createElement('div');
    ReactDOM.render(<Navbar />, div);
    ReactDOM.unmountComponentAtNode(div);
});


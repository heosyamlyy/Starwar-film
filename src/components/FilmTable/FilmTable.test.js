import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import { Table, TableContainer, TableHead, TableRow, TableBody } from '@material-ui/core';

afterEach(cleanup);
it('renders TableContainer correctly', () => {
    const div = document.createElement('div');
    render(<TableContainer></TableContainer>, div);
    ReactDOM.unmountComponentAtNode(div);
    //const {getByTestId} = render();
});

it('renders Table correctly', () => {
    const div = document.createElement('div');
    render(<Table></Table>, div);

    ReactDOM.unmountComponentAtNode(div);
    //const {getByTestId} = render();
});

it('renders TableHead correctly', () => {
    const div = document.createElement('div');
    render(<TableHead></TableHead>, div);
    ReactDOM.unmountComponentAtNode(div);
    //const {getByTestId} = render();
});
it('renders TableRow correctly', () => {
    const div = document.createElement('div');
    render(<TableRow></TableRow>, div);
    ReactDOM.unmountComponentAtNode(div);
    //const {getByTestId} = render();
});

it('renders table body correctly', () => {
    const div = document.createElement('div');
    render(<TableBody></TableBody>, div);
    ReactDOM.unmountComponentAtNode(div);
    //const {getByTestId} = render();
});



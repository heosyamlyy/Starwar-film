import React from 'react';
import ReactDOM from 'react-dom';
import App from './../App';
import {render} from '@testing-library/react';
import { Skeleton } from '@material-ui/lab';
import { Table, TableContainer, TableHead, TableRow, TableBody} from '@material-ui/core';



it('render without crashing', ()=> {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('renders skeleton correctly', () => {
    const div = document.createElement('div');
    render(<Skeleton />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('renders table container correctly', ()=>{
    const div = document.createElement('div');
    render(<TableContainer></TableContainer>, div);
    ReactDOM.unmountComponentAtNode(div);
    //const {getByTestId} = render();
});

it('renders table correctly', () => {
    const div = document.createElement('div');
    render(<Table></Table>, div);
    ReactDOM.unmountComponentAtNode(div);
    //const {getByTestId} = render();
});

it('renders table head correctly', ()=> {
    const div = document.createElement('div');
    render(<TableHead></TableHead>, div);
    ReactDOM.unmountComponentAtNode(div);
    //const {getByTestId} = render();
});
it('renders table row correctly', ()=> {
    const div = document.createElement('div');
    render(<TableRow></TableRow>, div);
    ReactDOM.unmountComponentAtNode(div);
    //const {getByTestId} = render();
});

it('renders table body correctly', ()=> {
    const div = document.createElement('div');
    render(<TableBody></TableBody>, div);
    ReactDOM.unmountComponentAtNode(div);
    //const {getByTestId} = render();
});



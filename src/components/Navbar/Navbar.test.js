import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar.js';
import {render} from '@testing-library/react';
import Button  from '@material-ui/core/Button';

it('renders Button correctly', () => {
    const {debug } = render(
        <Navbar></Navbar>
    );
    debug();

    const div = document.createElement('div');
    ReactDOM.render(<Button />, div);
    ReactDOM.unmountComponentAtNode(div);
});





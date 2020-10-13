import React from 'react';
import ReactDOM from 'react-dom';
import { act } from "react-dom/test-utils";
import Navbar from './Navbar.js';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent, cleanup, getByTestId} from '@testing-library/react';
import Button  from '@material-ui/core/Button';

afterEach(cleanup);
it('renders Button correctly', () => {
    const { debug } = render(
        <Navbar></Navbar>
    );
    debug();
    const div = document.createElement('div');
    ReactDOM.render(<Button />, div);
    ReactDOM.unmountComponentAtNode(div);
});



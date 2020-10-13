import React from 'react';
import ReactDOM from 'react-dom';
import App from './../../App';
import {render} from '@testing-library/react';
import { Skeleton } from '@material-ui/lab';



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

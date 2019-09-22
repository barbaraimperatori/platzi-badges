import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import Badge from './components/Badge';
import './global.css';

const container = document.getElementById('app');


ReactDOM.render(
    <Badge 
        firstName = "Bárbara"
        lastName = "Imperatori"
        jobTitle = "Frontend Developer"
        twitter = "ramblin_"
    />,
     container);
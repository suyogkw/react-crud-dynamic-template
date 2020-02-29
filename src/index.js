import AddEntity from './components/AddEntity';
import {entityDetails} from './../test/entitydata';

import React from 'react';
import ReactDOM from 'react-dom';

const wrapper = document.getElementById("container");

const handleOnSubmit=()=>{console.log('handle on submit')}

const entity = entityDetails.find(obj => {
    return obj.id === 'Employees'
  });

ReactDOM.render(<AddEntity 
    handleOnSubmit={handleOnSubmit}
    entityDetails={entity}
    />,wrapper);
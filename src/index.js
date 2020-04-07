import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css"
import CheckBoxGroup from "./components/common/CheckBoxGroup/Test"
import RadioBoxGroup from "./components/common/RadioBoxGroup/Test"
// import Select from "./components/common/Select/Test"
ReactDOM.render(<div>
    <CheckBoxGroup></CheckBoxGroup>
    <hr/>
    <RadioBoxGroup></RadioBoxGroup>
    <hr/>
   {/*  <Select>
        
    </Select> */}
    </div>, document.getElementById('root'));

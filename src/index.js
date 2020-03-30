import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import FuncDefault from "./FuncDefault"
import ClassDefault from "./ClassDefault"
import ValidationComp from "./ValidationComp"
const div = (
    <div>
        <FuncDefault a = {10}></FuncDefault>
        <ClassDefault b = {20}></ClassDefault>
        <ValidationComp a={1}></ValidationComp>
    </div>
);
ReactDOM.render(div, document.getElementById('root'));

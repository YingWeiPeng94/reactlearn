import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
<<<<<<< HEAD

const div = (
    <div>

=======
import App3 from './App3'
import App4 from './App4'
const div = (
    <div>
       {/* <App3></App3> */}
       <App4></App4>
>>>>>>> 3-10PureComponent
    </div>
);
const div2 = <div className="assaf">
    <h1>
       标题
       {["abc", null, <p>段落</p>]} 
    </h1>
    <p>
        {undefined}
    </p>
</div>
ReactDOM.render(div, document.getElementById('root'));
console.log(div2)

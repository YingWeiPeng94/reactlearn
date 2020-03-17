import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css"

const content = "<h1>sdasd</h1><p>wedasd3</p>";
const div = (
    <div dangerouslySetInnerHTML={{
        __html:content
    }}>
    
      
    </div>
    
);
// // 相当于
// const divs = React.createElement("div",{},`${a}*${b}=${a*b}`)
ReactDOM.render(div, document.getElementById('root'));

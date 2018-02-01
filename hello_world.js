import React from 'react';
import BreakLines from './break_lines.js';

class HelloWorld extends React.Component{
    render(){
        return (
            <div>
                <h1>Hello World</h1>
                <h2>This is my first ReactJS Code</h2>
                <BreakLines />
            </div>
        );
    }
}

export default HelloWorld;
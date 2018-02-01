import React from 'react';
import BreakLines from './break_lines.js';

class ButtonForm extends React.Component{
    render(props){
        return (
            <div>
                <h3>{this.props.text}</h3>
                <input type="submit" />
            </div>
        );
    }
};

class ButtonApp extends React.Component{
    render(){
        return (
            <div>
                <h1> Welcome to my button app!</h1>
                <ButtonForm text="Hello, gentleman!!" />
                <BreakLines />
            </div>
        );
    }
};

export default ButtonApp;
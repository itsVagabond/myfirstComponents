import React from 'react';
import BreakLines from './break_lines.js';

class ButtonForm extends React.Component{
    
    componentDidMount(){
        this.nameInput.focus(); 
    }
            
    render(){
        return (
            <div>
                <input value="Won't focus" />
                <input ref={(input) => { this.nameInput = input; }} value="Will focus" />
            </div>
        );
    }
}

class AutoFocusApp extends React.Component{
    render(){
        return (
            <div>
                <h1> Welcome to the Auto focus app!</h1>
                <ButtonForm />
                <BreakLines />
            </div>
        );
    }
}

export default AutoFocusApp;
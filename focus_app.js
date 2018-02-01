import React from 'react';
import ReactDOM from 'react-dom';
import BreakLines from './break_lines.js';

class ButtonForm extends React.Component{
    focusOnField(){        
            ReactDOM.findDOMNode(this.refs.textField).focus();
    }
            
    render(){
        return (
            <div>
                <input type="text"  ref="textField"/>
            
                <input type="submit" value="Focus on the input!" onClick={this.focusOnField.bind(this)} />
            </div>
        );
    }
}

class FocusApp extends React.Component{
    render(){
        return (
            <div>
                <h1> Welcome to the focus app!</h1>
                <ButtonForm />
                <BreakLines />
            </div>
        );
    }
}

export default FocusApp;
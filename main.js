import React from 'react';
import App from './app.js';
import AutoFocusApp from './auto_focus_app.js';
import ButtonApp from './button_app.js';
import DigitalClock from './digital_clock.js';
import FocusApp from './fous_app.js';
import NameForm from './form.js';
import HelloWorld from './hello_world.js';

export default class Main extends React.Component{
    render() {
        return(
            <div>
                <HelloWorld />
                <AutoFocusApp />
                <ButtonApp />
                <DigitalClock />
                <FocusApp />
                <NameForm />
                <App />
            </div>
        );
    }
}
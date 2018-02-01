import React from 'react';
import BreakLines from './break_lines.js';

class DigitalClock extends React.Component{
    render() {
        return(
            <div>
                <h2>
                    It is {new Date().toLocaleTimeString()}.
                </h2>
                <BreakLines />
            </div>
        );
    }
}

export default DigitalClock;
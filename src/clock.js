import React, { useState, useEffect } from 'react';
import './css/clock.css';

function Clock () {

    // Set color mode
    const [darkMode, setDarkMode] = useState(false);

    let color = darkMode? 'Black' : 'White'
    let font = darkMode? 'White' : 'Black'

    const divStyle = {backgroundColor: color};
    const textStyle = {color: font};

    // Refresh every munite
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
        setDate(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    // Parse time for display
    let hh = date.getHours();
    let mm = date.getMinutes();

    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;


    return(
        <div className='background' style={divStyle}>
            <div className='Clock' style={divStyle}>
                <h1 className='Time' style={textStyle}>{hh}:{mm}</h1>
                <button className={darkMode? 'blackButton' : 'whiteButton'} onClick={() => setDarkMode(!darkMode)}> <p className='buttonText' style={textStyle}>Mode</p></button>
            </div>
        </div>
    );
}

export default Clock;
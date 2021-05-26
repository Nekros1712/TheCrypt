import React from 'react'

function Navbar() {

    const navStyle = {
        "position": "absolute",
        "margin": "3vh 0vw 0vh 2vw",
        "display": "flex",
        "justifyContent": "center"
    }

    return (
        <div style={ navStyle }>
            <ham-burger style={{ "height": "3vh", "width": "4vw" }}>
                <svg viewBox="0 0 120 120">
                    <line x1="10" y1="0" x2="100" y2="0" style={{ "stroke": "#03dac5", "strokeWidth": "11" }} />
                    <line x1="10" y1="25" x2="100" y2="25" style={{ "stroke": "#03dac5", "strokeWidth": "5.5" }} />
                    <line x1="10" y1="50" x2="100" y2="50" style={{ "stroke": "#03dac5", "strokeWidth": "6.5" }} />
                </svg>
            </ham-burger>
            <the-crypt style={ { "color": "#fff", "fontSize": "40px", "marginTop": "-2vh", "marginLeft": "1vw" } }>
                <span>The</span>
                <span style={ { "color": "#03DAC5" } }>Crypt</span>
            </the-crypt>
        </div>
    )
}

export default Navbar
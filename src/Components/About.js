import React from 'react'

import '../style/About.css'
import '../style/Card.css'
import Logo from '../data/Logo.png'
import Hero from '../data/Hero.png'

function About() {

    const about = { "margin": "20vh 0vw 0vh 10vw", "width": "50vw", "height": "37vh" }
    const logo = { "margin": "20vh 0vw 0vh 65vw", "height": "37vh", "width": "20vw" }
    const hero = { "margin": "65vh 0vw 0vh 18vw", "width": "200px", "height": "200px" }
    const dev = { "margin": "65vh 0vw 0vh 37vw", "width": "40vw", "height": "30vh" }

    return (
        <div>
            <div className="card about" style={ about }>
                <p>Heyy,&nbsp;
                    <span style={{ "color": "#03dac5" }}>Welcome to&nbsp;
                        <span style={{ "fontWeight": "bolder" }}>TheCrypt</span>!
                    </span><br />
                    Here you can get familiar to the latest ups downs of life of investors... Just kidding XD 
                    This Web App lets you to be up to date with all happenings of crypto market 
                    by providing you with all real time data, all thanks to Coingecko API.
                </p>
            </div>
            <img src={ Logo } style={ logo } alt="Logo"></img>
            <div className="role">Developer</div>
            <img src={ Hero } style={ { ...hero, "borderRadius": "50%" } } alt="Logo"></img>
			<div className="card about" style={ dev }>
                <p>Myself,&nbsp;
                    <span style={{ "color": "#03dac5", "fontWeight": "bolder" }}>
                        Samprit Chaurasiya
                    </span>,<br />
                    a Web Development aficionado studying Bachelor of Engineering<br /> @
                    <a
                        href="http://siesgst.edu.in"
                        style={{ "color": "#03dac5" }}>
                        SIESGST, Navi Mumbai
                    </a><br />
                    <span style={{ "fontSize": "20px" }}>Contribute to this project&nbsp;
                        <a
                            href="https://github.com/Samprit1712/TheCrypt"
                            style={{ "color": "#03dac5", "textDecoration": "none" }}>
                            here
                        </a>
                    </span>
                </p>
            </div>
        </div>
    )
}

export default About
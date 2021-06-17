import React from 'react'

import Hero from '../../../data/Hero.png'

function Developer() {

    const hero = { "margin": "65vh 0vw 0vh 18vw", "width": "200px", "height": "200px" }
    const dev = { "margin": "65vh 0vw 0vh 37vw", "width": "40vw", "height": "30vh" }

	return (
		<div>
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

export default Developer
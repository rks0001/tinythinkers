import React from 'react'
import {Container} from 'react-bootstrap'
import {FaAngleDoubleDown} from 'react-icons/fa'


const Section1 = () => {
    return (
        <section>
            <Container className="sctn_one">
                <h4 className="intro">Hi,I am Ranjit Kalita</h4>
                <h1 className="exp"> Front end Developer</h1>
                <h5>I am a Front end Developer from India.</h5>
                <h5>Send me a <a className="clr" href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=ranjitkalita5o5@gmail.com" target="_blank">Mail</a> if you want to contact me.</h5>
                <h6>Scroll Down |<FaAngleDoubleDown/>| to know me!</h6>
            </Container>
        </section>
    )
}

export default Section1

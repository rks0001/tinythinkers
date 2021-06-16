import React from 'react'
import { Container, Row,Col} from 'react-bootstrap'
import  Projects from './Projects'
import projects from '../projects'


const Section3 = () => {
    return (
        <section>
            <Container className="textsthree">
            <h1 className="exptwo"> These are my Projects</h1>
            <p className="desp">These are some of the projects that I worked on. <br/>
            I have created some projects that help me understand more of the technology that I use.</p>
            </Container>
            <Container className='project'>
            <Row>
                {projects.map((project) => (
                    <Col sm={12} md={6} lg={4} xl={4}>
                        <Projects project={project}/>
                    </Col>
                ))}
            </Row>
            </Container>
        </section>
    )
}

export default Section3

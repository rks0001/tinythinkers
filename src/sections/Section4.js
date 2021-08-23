import React from 'react'
import { Container, Row,Col} from 'react-bootstrap'
import  Projects from './Projects'
import projects from '../projects'


const Section4 = () => {
    return (
        <section className="sctn_four">
            <div className="projectcontainer">
            <h1 className="project1"> Projects</h1>
            <p className="project2">These are some of the projects that I've worked on. <br/>
            I've created some projects that help me understand <br/>more of the technology that I use.</p>
            </div>
            <Container className='project'>
            <Row>
                {projects.map((project) => (
                    <Col sm={12} md={6} lg={4} xl={4}>
                        <Projects project={project}/>
                    </Col>
                ))}
            </Row>
            </Container>

            <h1 className="repo" ><a  className="repo"   href="https://github.com/rks0001" target="_blank" rel="noreferrer"> Repositories on GitHub</a></h1>
        </section>
    )
}

export default Section4



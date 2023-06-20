import React from 'react'
import { Container, Row, Col, } from 'react-bootstrap'
import Projects from './Projects'
import projects from '../projects'


import './sectionfour.css'



const Section4 = () => {



    return (
        <>


            {/* Big Screens */}



            <section className="sctn_four">

                <div className="projectcontainer">
                    <h1 className="project1"> What we teach?</h1>
                    <p className="project2">Tiny Thinkers combines entertainment and education seamlessly,<br/> ensuring children are motivated and engaged throughout their<br/>learning journey. With intuitive navigation and <br/>age-appropriate content, our app provides a <br/>safe and child-friendly environment.</p>
                </div>

                
                        <Container className='project' >
                            <Row className='rowpro'>
                                {projects.map((project) => (
                                    <Col className="colpro" key={project.id} sm={12} md={6} lg={4} xl={3}>
                                        <Projects project={project} />
                                    </Col>
                                ))}
                                
                            </Row>
                        </Container>
                 

                    

             
            </section>


            {/* Small Screens */}

            <section className="sctn_four_small">
                <div className="projectscontainer">
                    <h1 className="projects1"> What we Teach?</h1>
                    <p className="projects2">Tiny Thinkers combines entertainment and education seamlessly, ensuring children are motivated and engaged throughout their learning journey. With intuitive navigation and age-appropriate content, our app provides a safe and child-friendly environment.</p>
                </div>
                
                        <Container className='project' >
                            <Row className='rowpro'>
                                {projects.map((project) => (
                                    <Col className='colpro' key={project.id} sm={12} md={6} lg={4} xl={3}>
                                        <Projects project={project} />
                                    </Col>
                                ))}
                            </Row>
                        </Container>
                    
                        
                
            </section>
        </>


    )
}

export default Section4



import React from 'react'
import { Container, Row,Col} from 'react-bootstrap'

import  Projects from './Projects'
import projects from '../projects'
import projectstwo from '../projectstwo'

import './sectionfour.css'

const showProjects= () => {
   var con =document.createElement('div');
  document.getElementById("web2project").appendChild(con);
  console.log('success1');
 
    }

    const showProjectsAgain= () => {
   
        var con =document.createElement('div');
        document.getElementById("web3project").appendChild(con);
        console.log('success2');
        }

const Section4 = () => {

   

    return (
        <>
 

        {/* Big Screens */}

<section className="sctn_four">
   
    <div className="projectcontainer">
    <h1 className="project1"> Projects</h1>
    <p className="project2">These are some of the projects that I've worked on. <br/>
    I've created some projects that help me understand <br/>more of the technology that I use.</p>
    </div>
    <Container>
    <div className='categories'>
        <div className="web2" onClick={showProjects}>
        Web 2
            </div>
            
            <div className="web3" onClick={showProjectsAgain}>
            Web 3
            </div> 
    </div>
    </Container>
    
    <Container className='project' id="web2project">
    <Row>
        {projects.map((project) => (
            <Col sm={12} md={6} lg={4} xl={4}>
                <Projects project={project}/>
            </Col>
        ))}
    </Row>
    </Container>


<Container className='project' id="web3project">
    <Row>
        {projectstwo.map((project) => (
            <Col sm={12} md={6} lg={4} xl={4}>
                <Projects project={project}/>
            </Col>
        ))}
    </Row>
    </Container>
    <h1 className="repo" ><a  className="repo"   href="https://github.com/rks0001" target="_blank" rel="noreferrer"> Repositories on GitHub</a></h1>
</section>


        {/* Small Screens */}

    <section className="sctn_four_small">
        <div className="projectscontainer">
            <h1 className="projects1"> Projects</h1>
            <p className="projects2">These are some of the projects that I've worked on. 
            I've created some projects that help me understand more of the technology that I use.</p>
        </div>
        <Container className='projects'>
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
            </>
        
        
    )
}

export default Section4



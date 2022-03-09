import React from 'react'
import {Container, Card ,Button} from 'react-bootstrap'
import {BsLink45Deg} from 'react-icons/bs'
import {FiGithub} from 'react-icons/fi'
import './projects.css'

const Projects = ({project}) => {
    return (
        <Container className='crdcontainer'>
        <Card className='crd' >
            <Card.Body className='crd_body '>
            
            <Card.Title className= "project_title" as='div'>
                    <strong>{project.name}</strong>
            </Card.Title>
            
            <Card.Text className="project_text" as='div'>
            <strong>{project.description}</strong>
            </Card.Text>
            
            <Card.Text className="project_tool">
            <div>{project.tool_1}</div>
            </Card.Text>
            
            <Card.Text className="project_tool" >
            <div>{project.tool_2}</div>
            </Card.Text>

            <Card.Text className="project_tool" >
            <div>{project.tool_3}</div>
            </Card.Text>

        
            <div className="probtnncontainer">
            <Button className ='probtnn' variant="outline-dark" size="sm" href={project.link} target="_blank"><BsLink45Deg/> Website</Button>
            <Button className ='probtnn' variant="outline-dark" size="sm" href={project.link} target="_blank"><FiGithub/> GitHub</Button>
            </div>

        </Card.Body>
        </Card>
        </Container>
    )
}

export default Projects

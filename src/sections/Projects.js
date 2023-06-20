import React from 'react'
import {Container, Card ,Button} from 'react-bootstrap'
import {BsLink45Deg} from 'react-icons/bs'
import {Link} from 'react-router-dom'
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
            
           

        
            <div className="probtnncontainer">
            <Button className ='probtnn' variant="outline-dark" size="sm" href={project.linkone} target="_blank"><BsLink45Deg/> <Link  to={project.where} spy={true} smooth={false} className='where'>
                 Learn Now
                </Link></Button>
            
            </div>

        </Card.Body>
        </Card>
        </Container>
    )
}

export default Projects

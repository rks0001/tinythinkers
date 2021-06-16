import React from 'react'
import {Container, Card ,Button} from 'react-bootstrap'


const Projects = ({project}) => {
    return (
        <Container>
        <Card className='crd my-3 mx-1' >
            <a href={`/project/${project._id}`}>
                <Card.Img className='project_image' src={project.image} variant='top'/>
            </a>
        <Card.Body className='crd_body '>
            
            <Card.Title className= "project_title" as='div'>
                    <strong>{project.name}</strong>
            </Card.Title>
            
            
            <Card.Text className="project_tool">
            <div>{project.tool_1}</div>
            </Card.Text>
            
            <Card.Text className="project_tool" >
            <div>{project.tool_2}</div>
            </Card.Text>

            <Card.Text className="project_tool" >
            <div>{project.tool_3}</div>
            </Card.Text>

            <Card.Text className="project_text" as='div'>
            <strong>{project.description}</strong>
            </Card.Text>
        

            <Button className ='probtn my-3' variant="dark" href={project.link} target="_blank">Live Website</Button>

        </Card.Body>
        </Card>
        </Container>
    )
}

export default Projects

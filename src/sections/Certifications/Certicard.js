import React from 'react';
import {Container, Card, Button} from 'react-bootstrap'
import '../Certifications/certifications.css'
import { BiLinkExternal } from 'react-icons/bi';


const Certicard = (props) => {
  return(
<>
<Container className='certcon'>
            <Card className="certbody border-0">
                
                <Card.Body className="certbody2">
                <Card.Img className="certimg" variant="top" src={props.img} />
                    <Card.Text className="ctext1">{props.title} </Card.Text>
                    <Card.Text className="ctext2">
                        {props.text1}
                    </Card.Text>
                    

                    <Button className ='certbtn' variant="outline-dark" size="sm" href={props.link} target="_blank">More <BiLinkExternal/> </Button>
    
                </Card.Body>
            </Card>
        </Container>
</>

  ) 
};

export default Certicard;

import React from 'react'
import '../Certifications/certifications.css'
import Certicard from './Certicard'
import {Container, Col , Row} from 'react-bootstrap'
import cert1 from '../../images/certi1.jpg'
import cert2 from '../../images/certi2.JPG'
import cert3 from '../../images/certi3.JPG'
import cert4 from '../../images/certi4.JPG'
import '../../sections/sectionfour.css'


const Certifications = () => {
    return (
        <>
       {/* ----------BIG SCREENS------------ */}
        <section className="certsec" >
        <div className="projectcontainer">
    <h1 className="project1"> Certifications</h1>
    <p className="project2">These are some of the certifications for courses I've completed. <br/></p>
    </div>
            
   

            <Container>
                <Row>
                    <Col>
                    <Certicard
            img={cert3}
            title="Python for Everybody Specialization"
            text1="Coursera"
            link="https://www.coursera.org/account/accomplishments/specialization/certificate/CNEQT934MSWU"
            
            
            />
                    
                    </Col>

                    <Col>
                    <Certicard
            img={cert2}
            title="HTML, CSS and JavaScript ..."
            text1="Coursera"
            link="https://www.coursera.org/account/accomplishments/certificate/HY89FU8THKBZ"
            
            
            />
                    
                    </Col>

                    <Col>
                    <Certicard
            img={cert1}
            title="React + Redux Course"
            text1="SoloLearn"
            link=""
            
            
            />
                    </Col>
                </Row>

                <Row>
                    <Col>
                    <Certicard
            img={cert4}
            title="Blockchain Basics"
            text1="Coursera"
            link="https://www.coursera.org/account/accomplishments/certificate/WN4D3DQQ6BE7"
            
            
            />
                    </Col>

<Col>

</Col>
<Col>
</Col>
                    
                </Row>
            </Container>
            
            

            


            
            
        </section>
        {/* --------- SMALL SCREENS --------- */}
        <section className="certsecsmall" >
        <div className="projectscontainer">
            <h1 className="projects1"> Certifications</h1>
            <p className="projects2">These are some of the certifications for courses I've completed.</p>
        </div>
            
   

            <Container>
                <Row>
                    <Col>
                    <Certicard
            img={cert3}
            title="Python for Everybody Specialization"
            text1="Coursera"
            link="https://www.coursera.org/account/accomplishments/specialization/certificate/CNEQT934MSWU"
            
            
            />
                    
                    </Col>

                    <Col>
                    <Certicard
            img={cert2}
            title="HTML, CSS and JavaScript ..."
            text1="Coursera"
            link="https://www.coursera.org/account/accomplishments/certificate/HY89FU8THKBZ"
            
            
            />
                    
                    </Col>

                    <Col>
                    <Certicard
            img={cert1}
            title="React + Redux Course"
            text1="SoloLearn"
            link=""
            
            
            />
                    </Col>
                </Row>

                <Row>
                    <Col>
                    <Certicard
            img={cert4}
            title="Blockchain Basics"
            text1="Coursera"
            link="https://www.coursera.org/account/accomplishments/certificate/WN4D3DQQ6BE7"
            
            
            />
                    </Col>


                    
                </Row>
            </Container>
            
            

            


            
            
        </section>

        </>
        
    )
}

export default Certifications



import React from 'react'
import '../Certifications/certifications.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Certicard from './Certicard'
import {Container, Col , Row} from 'react-bootstrap'
import cert1 from '../../images/certi1.jpg'



const Certifications = () => {
    return (
        <>
        <Header/>
        <section className="certsec" >
        <div className="headingcert"> Certifications</div>
            
            <Container>
                <Row>
                    <Col>
                    <Certicard
            img={cert1}
            title="Prof. Sarat Saharia"
            text1="Professor in charge"
            text2="Training &amp; Placement Cell,"
            text3="School of Engineering"
            
            />
                    </Col>

                    <Col>
                    <Certicard
            img={cert1}
            title="Prof. Sarat Saharia"
            text1="Professor in charge"
            text2="Training &amp; Placement Cell,"
            text3="School of Engineering"
            
            />
                    </Col>

                    <Col>
                    <Certicard
            img={cert1}
            title="Prof. Sarat Saharia"
            text1="Professor in charge"
            text2="Training &amp; Placement Cell,"
            text3="School of Engineering"
            
            />
                    </Col>
                </Row>
            </Container>
            
            

            


            
            
        </section>
        <Footer/>
        </>
        
    )
}

export default Certifications



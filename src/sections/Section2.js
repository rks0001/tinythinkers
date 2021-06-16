import React from 'react'
import {Container,Row, Col ,Card} from 'react-bootstrap'
import {FaHtml5,FaCss3Alt,FaReact,FaNode,FaGithub,FaPython} from 'react-icons/fa'
import {SiJavascript,SiJquery,SiMongodb,SiRedux,SiAdobexd} from 'react-icons/si'
import {DiGitBranch} from 'react-icons/di'

const Section2 = () => {
    return (
        <section>
            <Container className="sctn_two">
            <h1 className="exptwo"> Take a look at my skills</h1>
            <p className="desp">These are my skills and this contains all the technologies and programming<br/>
            languages that I have learnt until now.</p>

            <Row>
                <Col>
                    <Row className="py-2 px-3 anm"><Card body className="bdsty"><span className="bdstyy"><FaHtml5 size={32}  color="#020061 " /></span>HTML</Card> </Row>
                    <Row className="py-2 px-3 anm"><Card body className="bdsty"><span className="bdstyy"><FaCss3Alt size={32}  color="#020061" /></span>CSS</Card> </Row>
                    <Row className="py-2 px-3 anm"><Card body className="bdsty"><span className="bdstyy"><SiJavascript size={32}  color="#020061" /></span>Javascript</Card> </Row>
                    <Row className="py-2 px-3 anm"><Card body className="bdsty"><span className="bdstyy"><SiJquery size={32}  color="#020061" /></span>jQuery</Card> </Row>
                    
                </Col>
                <Col>
                    <Row className="py-2 px-3 anm"><Card body className="bdsty"><span className="bdstyy"><FaReact size={32}  color="#020061 " /></span>React</Card> </Row>
                    <Row className="py-2 px-3 anm"><Card body className="bdsty"><span className="bdstyy"><FaNode size={32}  color="#020061" /></span>Node JS</Card> </Row>
                    <Row className="py-2 px-3 anm"><Card body className="bdsty"><span className="bdstyy"><SiMongodb size={32}  color="#020061" /></span>Mongo DB</Card> </Row>
                    <Row className="py-2 px-3 anm"><Card body className="bdsty"><span className="bdstyy"><SiRedux size={32}  color="#020061" /></span>Redux</Card> </Row>
                    
                </Col>
                <Col>
                    <Row className="py-2 px-3 anm"><Card body className="bdsty"><span className="bdstyy"><DiGitBranch size={32}  color="#020061 " /></span>Git</Card> </Row>
                    <Row className="py-2 px-3 anm"><Card body className="bdsty"><span className="bdstyy"><FaGithub size={32}  color="#020061" /></span>Github</Card> </Row>
                    <Row className="py-2 px-3 anm"><Card body className="bdsty"><span className="bdstyy"><SiAdobexd size={32}  color="#020061" /></span>Adobe Xd</Card> </Row>
                    <Row className="py-2 px-3 anm"><Card body className="bdsty"><span className="bdstyy"><FaPython size={32}  color="#020061" /></span>Python</Card> </Row>
                    
                </Col>
                
                

                
            </Row>
            </Container>
        </section>
    )
}

export default Section2

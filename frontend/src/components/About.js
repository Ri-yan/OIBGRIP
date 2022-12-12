import { Col, Container, Row } from 'react-bootstrap'
import styled from 'styled-components'

const About = () => {
  return (
    <Me>
        <Container>
            <Row>
                <Col>
                <h1>Pizzasio</h1>
                <h5>by Mohd Riyan</h5>
                </Col>
            </Row>
        </Container>
    </Me>
  )
}

export default About
const Me = styled.div`
    height: 100vh;
    display: flex;
    text-align: center;
    width: -webkit-fill-available;
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1{
        font-family: 'Courgette', cursive;
        color: red;
        font-size: -webkit-xxx-large;
    }
`
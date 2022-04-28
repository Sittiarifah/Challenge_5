import React from 'react'
import '../css/header.css'
import {Navbar,Container,Nav,Button,Row,Col} from 'react-bootstrap';


const Header = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#">
            <img src="./logo.png" alt="" />
          </Navbar.Brand>
          <Navbar.Toggle  />
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <Nav.Link href="#action1" className="link">Our Services</Nav.Link>
              <Nav.Link href="#action2" className="link">Why Us</Nav.Link>
              <Nav.Link href="#action3" className="link">Testimonial</Nav.Link>
              <Nav.Link href="#action4" className="link">FAQ</Nav.Link>
              <Button variant="success" className="button">Register</Button>{' '}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div>
        <Container>
          <Row>
            <Col md="6">
              <h1 className="title">Sewa & Rental Mobil Terbaik di<br/> kawasan (Lokasimu)</h1>
              <p className="text">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas<br/> terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu<br/> untuk sewa mobil selama 24 jam.</p>
            </Col>

            <Col md="6">
              <img src="./img_car.png" alt="" className="img" /> 
            </Col>
          </Row>
        </Container>
      </div>
    </> 
  )
}

export default Header


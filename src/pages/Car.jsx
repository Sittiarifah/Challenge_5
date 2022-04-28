import React from 'react';
import {Card, Button, Row, Col, Container} from 'react-bootstrap';
import {FaUserFriends} from 'react-icons/fa';
import {FaCog} from 'react-icons/fa';
import {FaRegCalendar} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {useEffect} from 'react';
import '../css/car.css'

const Car = () => {
  const navigate = useNavigate()

  useEffect(() => {
    axios.get('https://rent-cars-api.herokuapp.com/admin/car')
    .then(res => console.log(res.data))
  }, [])

  return (
    <>
      <Container>
        <Row>
          <Col md={3}>
            <Card style={{ width: '333px', height: '586px' }} className="card">
              <Card.Img variant="top" src="./image 1.jpg" />
              <Card.Body className="body">
                <Card.Title>Innova</Card.Title>
                <Card.Subtitle>Rp 430.000 / hari</Card.Subtitle>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia dolor laudantium repellendus quas incidunt obcaecati impedit molestiae praesentium odio. 
                </Card.Text>
                <Card.Text><FaUserFriends /> 4 orang</Card.Text>
                <Card.Text><FaCog /> Manual</Card.Text>
                <Card.Text><FaRegCalendar /> Tahun 2020</Card.Text>
                <Button variant="success" onClick={() => {navigate('/detailcar')}}>Pilih Mobil</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3}>
            <Card style={{ width: '333px', height: '586px', left: "110px" }} className="card">
              <Card.Img variant="top" src="./image 1.jpg" />
              <Card.Body className="body">
                <Card.Title>Innova</Card.Title>
                <Card.Subtitle>Rp 430.000 / hari</Card.Subtitle>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia dolor laudantium repellendus quas incidunt obcaecati impedit molestiae praesentium odio. 
                </Card.Text>
                <Card.Text><FaUserFriends /> 4 orang</Card.Text>
                <Card.Text><FaCog /> Manual</Card.Text>
                <Card.Text><FaRegCalendar /> Tahun 2020</Card.Text>
                <Button variant="success" onClick={() => {navigate('/detailcar')}}>Pilih Mobil</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3}>
            <Card style={{ width: '333px', height: '586px', left: "220px" }} className="card">
              <Card.Img variant="top" src="./image 1.jpg" />
              <Card.Body className="body">
                <Card.Title>Innova</Card.Title>
                <Card.Subtitle>Rp 430.000 / hari</Card.Subtitle>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia dolor laudantium repellendus quas incidunt obcaecati impedit molestiae praesentium odio. 
                </Card.Text>
                <Card.Text><FaUserFriends /> 4 orang</Card.Text>
                <Card.Text><FaCog /> Manual</Card.Text>
                <Card.Text><FaRegCalendar /> Tahun 2020</Card.Text>
                <Button variant="success" onClick={() => {navigate('/detailcar')}}>Pilih Mobil</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Car
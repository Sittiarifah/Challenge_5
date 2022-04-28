import React from 'react'
import {Card, Button, Row, Col, Container, Accordion} from 'react-bootstrap';
import {FaUserFriends} from 'react-icons/fa';
import {FaCog} from 'react-icons/fa';
import {FaRegCalendar} from 'react-icons/fa';
import '../css/detailcar.css'

const DetailCar = () => {
  return (
    <>
      <Container>
        <Row>
          <Col md={3}>
            <Card style={{ width: '605px', height: '700px' }} className="detail">
              <Card.Title>Tentang Paket</Card.Title>
              <Card.Subtitle>Include</Card.Subtitle>
              <ul>
                <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
                <li>Sudah termasuk bensin selama 12 jam</li>
                <li>Sudah termasuk Tiket Wisata</li> 
                <li>Sudah termasuk pajak</li>
              </ul>
              <Card.Subtitle>Exclude</Card.Subtitle>
              <ul>
                <li>Tidak termasuk biaya makan sopir Rp 75.00/hari</li>
                <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                <li>Tidak termasuk akomodasi penginapan</li> 
              </ul>
              <Card.Body >
              <Accordion>
                <Accordion.Item>
                  <Accordion.Header>Refund, Reschedule, Overtime</Accordion.Header>
                  <Accordion.Body>
                  <ul>
                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                    <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                    <li>Ridak termasuk akomodasi penginapan</li> 
                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                    <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                    <li>Ridak termasuk akomodasi penginapan</li> 
                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                    <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                    <li>Ridak termasuk akomodasi penginapan</li> 
                  </ul>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              </Card.Body>
            </Card>
            <Button variant="success" className="ton">Lanjutkan Pembayaran</Button>
          </Col>

          <Col md={3}>
            <Card style={{ width: '405px', height: '435px', left: "400px" }} className="detail">
              <Card.Img variant="top" src="./image-car.jpg" className="image" />
              <Card.Body className="col">
                <Card.Title>Innova</Card.Title>
                <Card.Text><FaUserFriends /> 4 orang</Card.Text>
                <Card.Text><FaCog /> Manual</Card.Text>
                <Card.Text><FaRegCalendar /> Tahun 2020</Card.Text>
                <Card.Text> Total Rp 430.000</Card.Text>
                <Button variant="success" className="toogle">Lanjutkan Pembayaran</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default DetailCar
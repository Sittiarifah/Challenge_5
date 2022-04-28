import React from 'react'
import '../css/footer.css'
import {FaFacebookSquare} from 'react-icons/fa'
import {FaInstagramSquare} from 'react-icons/fa'
import {FaTwitterSquare} from 'react-icons/fa'
import {FaEnvelopeSquare} from 'react-icons/fa'
import {FaTwitch} from 'react-icons/fa'


const Footer = () => {
  return ( 
    <>
      <footer className="foot">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mx-auto mb-4">
              
                <ul className="tex">
                  <li>Jalan Suroyo No. 161 Mayangan Kota Probollingo 67200</li>
                  <li>binarcarrental@gmail.com</li>
                  <li>081-233-334-808</li> 
                </ul>
              
            </div>
            <div className="col-md-2 mx-auto mb-4">
              
                <ul className="tex">
                  <li>Our services</li>
                  <li>Why Us</li>
                  <li>Testimonial</li> 
                  <li>FAQ</li>
                </ul> 
              
            </div>
            <div className="col-md-3 mx-auto mb-4">
              
                <ul className="tex">
                  <li>Connect with us</li>
                  <li>
                    <FaFacebookSquare color="blue" size="2rem" />
                    <FaInstagramSquare color="blue" size="2rem" />
                    <FaTwitterSquare color="blue" size="2rem" />
                    <FaEnvelopeSquare color="blue" size="2rem" />
                    <FaTwitch color="blue" size="2rem" />
                  </li>
                </ul> 
              
            </div>
            <div className="col-md-2 mx-auto mb-4">
              
                <ul className="tex">
                  <li>Copyright Binar {new Date().getFullYear()}</li>
                  <li><img src="./logo.png" alt="" /></li>
                </ul> 
              
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer

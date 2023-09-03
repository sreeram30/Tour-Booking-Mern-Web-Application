import React from 'react'
import '../../styles/footer.css'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import {Link} from "react-router-dom"
import logo from "../../assets/images/logo.png"

const quick__Links = [
  {
    path: '/home',
    display: 'Home'
  },
  {
    path: '/about',
    display: 'About',
  },
  {
    path: '/Tours',
    display: 'Tours'
  }
];
const quick__Links2 = [
  {
    path: '/gallery',
    display: 'Galley'
  },
  {
    path: '/login',
    display: 'Login',
  },
  {
    path: '/register',
    display: 'Register'
  }
];


const Footer = () => {
  const year =new Date().getFullYear();
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg="3">
            <div className='logo'>
              <img src={logo} alt='logoImg'/>
              <p> ThankYou for visiting us</p>
              <div className='social__links d-flex align-item-center gap-4'>
              <span>
                  <a href='https://github.com/sreeram30' target='_blank' rel='noopener noreferrer'>
                    <i className="ri-github-fill"></i>
                  </a>
                </span>
                <span>
                  <a href='https://www.instagram.com/quotes.__.360/' target='_blank' rel='noopener noreferrer'>
                    <i className="ri-instagram-fill"></i>
                  </a>
                </span>
                <span>
                  <a href='https://twitter.com/sreeram________' target='_blank' rel='noopener noreferrer'>
                    <i className="ri-twitter-fill"></i>
                  </a>
                </span>
              </div>
            </div>
          </Col>
          <Col lg="3">
            <h5 className="footer__link-title">Discover</h5>
            <ListGroup className='footer__quick-links'>
              {
                quick__Links.map((item,index)=>(
                  <ListGroupItem key={index} className='ps-0 border-0'>
                    <Link to ={item.path}> {item.display}</Link>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
          </Col>
          <Col lg="3">
          <h5 className="footer__link-title">Quick Links</h5>
            <ListGroup className='footer__quick-links'>
              {
                quick__Links2.map((item,index)=>(
                  <ListGroupItem key={index} className='ps-0 border-0'>
                    <Link to ={item.path}> {item.display}</Link>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
          </Col>
          <Col lg="3">
          <h5 className="footer__link-title">Contact</h5>
            <ListGroup className='footer__quick-links'>
            {
                
                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                  <h6 className='mb-0 d-flex align-items-center gap-2'>
                    <span><i class ="ri-map-pin-line"></i></span>Address:</h6>
                    <p className='mb-0'>Tharamani,Chennai</p>
                </ListGroupItem>
          
            }
            {
                
                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                  <h6 className='mb-0 d-flex align-items-center gap-2'>
                    <span><i class="ri-mail-line"></i></span>Email:</h6>
                    <p className='mb-0'>sreeram63701@gmail.com</p>
                </ListGroupItem>
          
            }
              {
                
                  <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                    <h6 className='mb-0 d-flex align-items-center gap-2'>
                      <span><i class ="ri-phone-fill"></i></span>Phone:</h6>
                      <p className='mb-0'>+91 6379063701</p>
                  </ListGroupItem>
            
              }
            </ListGroup>
            
          </Col>
          <Col lg="12" className='text-center pt-5'>
            <p className='copyright'>Copyright {year}, Design and Develop by Sree Ram. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
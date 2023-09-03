import React from "react";
import '../styles/home.css'
import { Container, Row, Col } from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpg';
import heroImg02 from '../assets/images/hero-img02.jpg';
import heroVideo from '../assets/images/hero-video.mp4';
import worldImg from '../assets/images/world.png';
import Subtitle from './../shared/Subtitle';
import SearchBar from "../shared/SearchBar";
import ServiceList from "../services/ServiceList";
import FeaturedTourList from "../components/Featured-tours/FeaturedTourList";
import experienceImg from "../assets/images/experience.png"
import GalleryImages from "../components/Gallery/GalleryImages";
import Testimonial from "../components/Testimonial/Testimonial";
import NewsLetter from "../components/NewsLetter/NewsLetter";

const Home = () => {
  return (
    <>
    {/* hero section starts */}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle subtitle={"Know Before You Go"} />
                  <img src={worldImg} alt="worldImg" />
                </div>
                <h1>
                  Traveling opens the door to creating memories
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Ullam ipsum nobis asperiores soluta voluptas quas voluptates.
                  Molestiae tempora dignissimos, animi praesentium molestias.
                </p>
              </div>
            </Col>
            <Col lg='2'>
              <div className="hero__img-box">
                <img src={heroImg} alt="img01"/>
              </div>
            </Col>
            <Col lg="2">
              <div className= "hero__img-box mt-4">
                <video src={heroVideo}alt="video"/>
              </div>
              </Col>
              <Col lg='2'>
                <div className= "hero__img-box mt-5">
                  <img src={heroImg02}alt="img01"/>
                </div>
              </Col>
              <SearchBar/>
          </Row>
        </Container>
      </section>
      {/* hero section ends */}

      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className="services__subtitle">What we serve</h5>
              <h2 className="services__title">We offer you a best tour guide</h2>
            </Col>
            <ServiceList/>
          </Row>
        </Container>
      </section>

      {/*featured tour section start*/}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <Subtitle subtitle={"Explore"}/>
               <h2 className=" featured tour-title">Our featured tours</ h2>
            </Col>
            <FeaturedTourList/>
          </Row>
        </Container>
      </section>

      {/*featured tour section end*/}


       {/* Experience tour section starts */}
       <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="experience__content">
                <Subtitle subtitle={"Experience"} />
                <h2>
                  With our experience <br/> We will serve you
                </h2>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  <br/>Praesentium nulla aliquid provident, voluptatem laudantium explicabo.
                </p>
              </div>
              <div className="counter__wrapper d-flex align-items-center gap-5">
                <div className="counter__box">
                  <span>10k+</span>
                  <h6>Successful Trips</h6>
                </div>
                <div className="counter__box">
                  <span>1k+</span>
                  <h6>Regular Clients</h6>
                </div>
                <div className="counter__box">
                  <span>10</span>
                  <h6>Years of experinence</h6>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="experience__img">
                <img src={experienceImg}alt="experience img"/>
              </div>
            </Col>

          </Row>
        </Container>
      </section>
      {/* Experience tour section ends */}


      {/* gallery tour section starts */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Gallery"}/>
              <h2 className="gallery__title"> Visit Our Customers Tour gallery</h2>
            </Col>
            <Col lg="12">
              <GalleryImages/>
            </Col>
          </Row>
        </Container>
      </section>
      {/* gallery tour section ends */}

      {/* testimonal tour section starts */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Customers Love"}/>
              <h2 className="testimonial__title"> What Our Customers Say About us</h2>
            </Col>
            <Testimonial/>
          </Row>
        </Container>
      </section>
      {/* testimonal tour section ends */}
      <NewsLetter/>
    </>
  );
};

export default Home;

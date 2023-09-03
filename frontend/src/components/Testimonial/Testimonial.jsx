import React from 'react'
import Slider from 'react-slick'
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'

const Testimonial = () => {
    const settings={
            dots: true,
            infinite: true,
            autoplay: true,
            speed: 1000,
            swipeToSlide:true,
            autoplaySpeed: 5000,
            slidesToShow:3,
            responsive:[
                {
                breakpoint: 992,
                settings: {
                    autoplaySpeed: 5000,
                    autoplay:true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    autoplaySpeed: 5000,
                    autoplay:true,
                    slidesToShow: 1,
                    slidesToScroll:1
                },
            },
            ]
        }
  return <Slider{...settings}>
    <div className="testimonial py-4 px-3">
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div className='d-flex align-content-center gap-4 mt-3'>
            <img src={ava01} className='w-25 h-25 rounded-2' alt={"CustomerImg"} />
            <div>
                <h6 className='mb-0 mt-3'>Sree Ram</h6>
                <p>Customer</p>
            </div>
        </div>
    </div>
    <div className="testimonial py-4 px-3">
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div className='d-flex align-content-center gap-4 mt-3'>
            <img src={ava02} className='w-25 h-25 rounded-2' alt={"CustomerImg"} />
            <div>
                <h6 className='mb-0 mt-3'>Andrew</h6>
                <p>Customer</p>
            </div>
        </div>
    </div>
    <div className="testimonial py-4 px-3">
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div className='d-flex align-content-center gap-4 mt-3'>
            <img src={ava03} className='w-25 h-25 rounded-2' alt={"CustomerImg"} />
            <div>
                <h6 className='mb-0 mt-3'>Prabha</h6>
                <p>Customer</p>
            </div>
        </div>
    </div>
    <div className="testimonial py-4 px-3">
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div className='d-flex align-content-center gap-4 mt-3'>
            <img src={ava01} className='w-25 h-25 rounded-2' alt={"CustomerImg"} />
            <div>
                <h6 className='mb-0 mt-3'>SanKar</h6>
                <p>Customer</p>
            </div>
        </div>
    </div>
    <div className="testimonial py-4 px-3">
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div className='d-flex align-content-center gap-4 mt-3'>
            <img src={ava02} className='w-25 h-25 rounded-2' alt={"CustomerImg"} />
            <div>
                <h6 className='mb-0 mt-3'>Venky</h6>
                <p>Customer</p>
            </div>
        </div>
    </div>
    <div className="testimonial py-4 px-3">
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div className='d-flex align-content-center gap-4 mt-3'>
            <img src={ava03} className='w-25 h-25 rounded-2' alt={"CustomerImg"} />
            <div>
                <h6 className='mb-0 mt-3'>Balaji</h6>
                <p>Customer</p>
            </div>
        </div>
    </div>
    
    
  </Slider>
}

export default Testimonial
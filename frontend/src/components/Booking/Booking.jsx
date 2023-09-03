import React, { useState, useContext } from 'react';
import "../../styles/booking.css";
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from "reactstrap";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "./../../context/AuthContext";
import { BASE_URL } from "./../../utils/config";

const Booking = ({ tour, avgRating }) => {
    const { price, reviews, title } = tour;
    const navigate = useNavigate();

    const { user } = useContext(AuthContext);

    const [booking, setBooking] = useState({
        userid: user && user._id,
        userEmail: user && user.email,
        fullname: title,
        phone: "",
        guestSize: "1",
        bookAt: ""
    });

    const handleChange = e => {
        setBooking(prev => ({ ...prev, [e.target.id]: e.target.value }));
    }

    const handleClick = async e => {
        e.preventDefault();
        console.log(booking);

        try {
            if (!user || user === undefined || user === null) {
                return alert("Please SIGN IN");
            }

            const res = await fetch(`${BASE_URL}/booking`, {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify(booking),
            });

            const result = await res.json();
            console.log(result);

            if (!res.ok) {
                console.log (result.message);
            }
            navigate("/thank-you");
        } catch (err) {
            console.log(err.message);
        }
    }

    const serviceFee = 10;
    const totalAmount = Number(price) * Number(booking.guestSize) + Number(serviceFee);

    return (
        <div className='booking'>
            <div className='booking__top d-flex align-items-center justify-content-between'>
                <h3>${price}<span>/Per Person</span></h3>
                <span className="tour__rating d-flex align-items-center">
                    <i className="ri-star-fill"></i>
                    {avgRating === 0 ? null : avgRating}({reviews?.length})
                </span>
            </div>

            {/* Booking form */}
            <div className='booking__form'>
                <h5>Information</h5>
                <Form className='booking__info-form' onSubmit={handleClick}>
                    <FormGroup>
                        <input type='text' placeholder='Full Name' id="fullName" required onChange={handleChange} className='booking__form-input' />
                    </FormGroup>
                    <FormGroup>
                        <input type='number' placeholder='Phone' id="Phone" required onChange={handleChange} className='booking__form-input' />
                    </FormGroup>
                    <FormGroup className='d-flex align-items-center gap-3'>
                        <input type='date' placeholder='' id="bookAt" required onChange={handleChange} className='booking__form-input' />
                        <input type='number' placeholder='guest' id="guestSize" required onChange={handleChange} className='booking__form-input' />
                    </FormGroup>
                </Form>
            </div>
            
            {/* Booking button */}
            <div className='booking__bottom'>
                <ListGroup>
                    <ListGroupItem className='border-0 px-0'>
                        <h5 className='d-flex align-items-center gap-1'>Per Person</h5>
                        <span>${price}</span>
                    </ListGroupItem>
                    <ListGroupItem className='border-0 px-0'>
                        <h5>Service Charge</h5>
                        <span>${serviceFee}</span>
                    </ListGroupItem>
                    <ListGroupItem className='border-0 px-0 total'>
                        <h5>Total</h5>
                        <span>${totalAmount}</span>
                    </ListGroupItem>
                </ListGroup>
                <Button className='btn primary__btn w-100 mt-4' onClick={handleClick}> Book Now</Button>
            </div>
        </div>
    );
}

export default Booking;

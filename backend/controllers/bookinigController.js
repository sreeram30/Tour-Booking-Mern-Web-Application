import Booking from './../models/Booking.js'

//create new booking

export const createBooking = async(req, res) => {

    const newBooking = new Booking(req.body)

    try {
        const savedBooking = await newBooking.save()
        res.status(200).json({
            success: true,
            message: 'Your Tour is Booked Successfully',
            data: savedBooking
        })

    } catch (err) {
        res.status(500).json({
            success: true,
            message: "Internal Server Error",
            error: err.message
        })

    }
}

//get single booking

export const getBooking = async(req, res) => {
    const id = req.params.id

    try {
        const book = await Booking.findById(id)
        res.status(200).json({
            success: true,
            message: 'Successfull',
            data: book
        })

    } catch (err) {
        res.status(404).json({ success: true, message: "Not Found", error: err.message })

    }
}

//get all booking

export const getAllBooking = async(req, res) => {
    try {
        const books = await Booking.find()
        res.status(200).json({
            success: true,
            message: 'Successfull',
            data: books
        })

    } catch (err) {
        res.status(500).json({
            success: true,
            message: "Internal server error",
            error: err.message
        })

    }
}

export const getBookings = async(req, res) => {
    const id = req.params.id
    try {
        const book = await Booking.findById(id)
        res.status(200).json({
            success: true,
            message: "Successfull",
            data: book
        })

    } catch (err) {
        res.status(404).json({
            success: true,
            message: "Not found",
            error: err.message
        })

    }
}
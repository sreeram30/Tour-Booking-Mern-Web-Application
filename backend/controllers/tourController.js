import Tour from '../models/Tour.js';

//create a new Tour

export const createTour = async(req, res) => {
    const newTour = new Tour(req.body);
    try {
        const savedTour = await newTour.save();
        res
            .status(200)
            .json({
                success: true,
                message: 'Tour created successfully',
                data: savedTour
            });
    } catch (err) {
        console.error('Error creating tour:', err);
        res
            .status(500)
            .json({
                success: false,
                message: 'Failed to create tour',
                error: err.message
            });
    }
};

//update tour

export const updateTour = async(req, res) => {
    const id = req.params.id;

    try {
        console.log('Updating tour with ID:', id);
        console.log('New data:', req.body);

        const updatedTour = await Tour.findByIdAndUpdate(
            id, {
                $set: req.body
            }, { new: true }
        );

        console.log('Updated tour:', updatedTour);

        res
            .status(200)
            .json({
                success: true,
                message: 'Tour updated successfully',
                data: updatedTour
            });
    } catch (err) {
        console.error('Error updating tour:', err);
        res
            .status(500)
            .json({
                success: false,
                message: 'Failed to update tour',
                error: err.message
            });
    }
}


//Delete tour
export const deleteTour = async(req, res) => {
    const id = req.params.id;

    try {
        console.log('Deleting tour with ID:', id);

        await Tour.findByIdAndDelete(id);
        console.log('Deleted tour:', deleteTour);

        res
            .status(201)
            .json({
                success: true,
                message: 'Tour deleted successfully',
                //data: deleteTour
            });
    } catch (err) {
        console.error('Error deleting tour:', err);
        res
            .status(500)
            .json({
                success: false,
                message: 'Failed to delete tour',
                //error: err.message
            });
    }
};


//getSingletour
export const getSingleTour = async(req, res) => {
    const id = req.params.id;

    try {
        const tour = await Tour.findById(id).populate('reviews') //help to show the reviewer name
        res
            .status(200)
            .json({
                success: true,
                message: 'Tour retrieved successfully',
                data: tour
            });

    } catch (err) {
        console.error('Error retrieving tour:', err);
        res
            .status(404)
            .json({
                success: false,
                message: 'Failed to retrieve tour',
                //error: err.message
            });
    }
}


//getAllTour
export const getAllTour = async(req, res) => {

    //for pagination
    const page = parseInt(req.query.page);

    try {
        const tour = await Tour.find({})
            .populate('reviews') //help to show the reviewer name
            .skip(page * 8) // Skip a number of documents based on the current page
            .limit(8); // Limit the number of documents per page to 8
        console.log('Page:', page);
        res
            .status(200)
            .json({
                success: true,
                count: tour.length,
                message: 'Tours retrieved successfully',
                data: tour
            });
    } catch (err) {
        console.error('Error retrieving tour:', err);
        res
            .status(404)
            .json({
                success: false,
                message: 'Failed to retrieve tours',
                error: err.message
            });
    }
};


// Get Datas from search results

export const getTourBySearch = async(req, res) => {

    const city = new RegExp(req.query.city, 'i') // i is case insensitive

    const distance = parseInt(req.query.distance);

    const maxGroupSize = parseInt(req.query.maxGroupSize);


    try {
        //gte means greater than or equal to 

        const tours = await Tour
            .find({
                city,
                distance: { $gte: distance },
                maxGroupSize: { $gte: maxGroupSize }
            })
            .populate('reviews');

        res
            .status(200)
            .json({
                success: true,
                message: 'Tours retrieved successfully',
                data: tours
            })

    } catch (err) {
        res.status(404).json({
            success: false,
            message: 'Failed to retrieve tours',
            error: err.message
        });

    }
}

// get featured tour information

export const getFeaturedTour = async(req, res) => {

    try {
        const tour = await Tour.find({ featured: true })
            .populate('reviews') //help to show the reviewer name
            .limit(8); // Limit the number of documents per page to 8

        // Respond with a success status, the count of retrieved tours, a success message, and the retrieved tour data
        res
            .status(200)
            .json({
                success: true,
                count: tour.length,
                message: 'Tours retrieved successfully',
                data: tour
            });
    } catch (err) {
        // If an error occurs during data retrieval, log the error and respond with an error status and message
        console.error('Error retrieving tour:', err);
        res
            .status(404)
            .json({
                success: false,
                message: 'Failed to retrieve tours',
                error: err.message
            });
    }
};

//get tour count

export const getTourCount = async(req, res) => {
    try {
        const tourCount = await Tour.estimatedDocumentCount()
        res
            .status(200)
            .json({
                success: true,
                data: tourCount
            });

    } catch (err) {
        res
            .status(500)
            .json({
                success: false,
                message: "failed to fetch the count",
                error: err.message
            });

    }
}
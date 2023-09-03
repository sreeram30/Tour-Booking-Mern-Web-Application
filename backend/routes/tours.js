import express from 'express';
import {
    createTour,
    updateTour,
    deleteTour,
    getSingleTour,
    getAllTour,
    getTourBySearch,
    getFeaturedTour,
    getTourCount
} from './../controllers/tourController.js';

const router = express.Router();
import { verifyAdmin } from './../utils/verifyToken.js';

// Create new tour
router.post('/', verifyAdmin, createTour);


//update tour
router.put('/:id', verifyAdmin, updateTour);

//delete tour
router.delete('/:id', verifyAdmin, deleteTour);

//get single tour
router.get('/:id', getSingleTour);

//get all tour
router.get('/', getAllTour);

//get tours by search tour

router.get("/search/getTourBySearch", getTourBySearch);


//get tours by  searching the featured of the tour

router.get("/search/getFeaturedTour", getFeaturedTour);

// get tour count
router.get("/search/getTourCount", getTourCount);

export default router;
import User from '../models/User.js';


export const createUser = async(req, res) => {
    //const newUserData = req.body;
    const newUser = new User(req.body);
    console.log(newUser)
    try {

        const savedUser = await newUser.save();
        res.status(200).json({
            success: true,
            message: 'User created successfully',
            data: savedUser
        });
    } catch (err) {
        console.error('Error creating User:', err);
        res.status(500).json({
            success: false,
            message: 'Failed to create User',
            error: err.message
        });
    }
};

//update User

export const updateUser = async(req, res) => {
    const id = req.params.id;

    try {
        //console.log('Updating User with ID:', id);
        //console.log('New data:', req.body);

        const updatedUser = await User.findByIdAndUpdate(
            id, {
                $set: req.body,
            }, { new: true }
        );

        console.log('Updated User:', updatedUser);

        res.status(200).json({
            success: true,
            message: 'User updated successfully',
            data: updatedUser
        });
    } catch (err) {
        //console.error('Error updating User:', err);
        res.status(500).json({
            success: false,
            message: 'Failed to update User',
            //error: err.message
        });
    }
}


//Delete User
export const deleteUser = async(req, res) => {
    const id = req.params.id;

    try {
        //console.log('Deleting User with ID:', id);

        await User.findByIdAndDelete(id);

        //console.log('Deleted User:', deleteUser);

        res.status(200).json({
            success: true,
            message: 'User deleted successfully',
            data: deleteUser
        });
    } catch (err) {
        console.error('Error deleting User:', err);
        res.status(500).json({
            success: false,
            message: 'Failed to delete User',
            //error: err.message
        });
    }
};


//getSingleUser
export const getSingleUser = async(req, res) => {
    const id = req.params.id;

    try {
        const user = await User.findById(id);

        res.status(200).json({
            success: true,
            message: 'User retrieved successfully',
            data: user
        });

    } catch (err) {
        //console.error('Error retrieving User:', err);
        res.status(404).json({
            success: false,
            message: 'Failed to retrieve User',
            error: err.message
        });
    }
}


//getAllUser
export const getAllUser = async(req, res) => {
    try {
        // Use the 'User' model to retrieve User from the database
        const users = await User.find({});

        // Log the retrieved users to the console for debugging
        console.log('Retrieved Users:', users);

        // Respond with a success status and the retrieved user data
        res.status(200).json({
            success: true,
            message: 'Users retrieved successfully',
            data: users
        });
    } catch (err) {
        // If an error occurs during data retrieval, log the error and respond with an error status and message
        console.error('Error retrieving Users:', err);
        res.status(500).json({
            success: false,
            message: 'Failed to retrieve Users',
            error: err.message
        });
    }
};
import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
    //console.log('Request Headers:', req.headers);
    const token = req.cookies.accessToken;

    //console.log('Token:', token); // access token from cookies in postman 

    if (!token) {
        return res.status(401).json({
            success: false,
            message: 'You are not authorized'
        });
    }

    // Verify the token
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
        if (err) {
            return res.status(401).json({
                success: false,
                message: 'Token is invalid'
            });
        }
        req.user = user;
        next();
    });
};

export const verifyUser = (req, res, next) => {
    // Check if the user is authenticated
    verifyToken(req, res, next, () => {
        // Check if the user's ID matches the tour ID or if the user is a 'user'
        if (req.user.id === req.params.id || req.user.role === 'admin') {
            next();
        } else {
            return res.status(401).json({
                success: false,
                message: 'You are not authorized'
            });
        }
    });
};

export const verifyAdmin = (req, res, next) => {
    // Check if the user is authenticated
    verifyToken(req, res, () => {
        // Check if the user's role is 'admin'
        if (req.user.role === 'admin') {
            next();
        } else {
            return res.status(401).json({
                success: false,
                message: 'You are not authorized'
            });
        }
    });
};
import User from '../models/User.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

//User registration

export const register = async(req, res) => {
    try {
        // hashing password
        console.log('Received registration request:', req.body);

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hash,
            photo: req.body.photo,
        });

        await newUser.save();
        console.log('User registered successfully:', newUser);
        res.status(200).json({
            success: true,
            message: 'Successfully Created',
        });
    } catch (err) {
        console.error('Error during registration:', err);
        res.status(500).json({
            success: false,
            message: 'Failed to Create Try Again',
            error: err.message,
        });
    }
};

//user login

export const login = async(req, res) => {
    const email = req.body.email;

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'No user found'
            });
        }

        const checkCorrectPassword = await bcrypt.compare(req.body.password, user.password);

        if (!checkCorrectPassword) {
            return res.status(401).json({
                success: false,
                message: 'Incorrect email or password'
            });
        }

        const { password, role, ...rest } = user._doc;

        const token = jwt.sign({
                id: user._id,
                role: user.role
            },
            process.env.JWT_SECRET_KEY, {
                expiresIn: '15d'
            }
        );

        // Calculate the expiration time for the cookie
        //const expirationDate = new Date();
        //expirationDate.setDate(expirationDate.getDate() + 15); // 15 days from now

        // Set the token in the browser cookies and send it to the client
        res.cookie('accessToken', token, {
            httpOnly: true,
            expires: token.expiresIn // Set the expiration date here
        }).status(200).json({
            token,
            data: {...rest },
            role,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Failed to login'
        });
    }
};
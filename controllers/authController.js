import User from "../models/userModel.js";

export const signUpController = async (req, res) => {
    try {
        const body = req.body;
        // Check if the user with the provided email already exists
        const user = await User.findOne({email: body.email});
        if (user) {
            return res.status(409).json({message: "User already exists"});
        }

        // If the user does not exist, create a new user
        const newUser = await User.create(body);
        res.status(201).json({message: "New user created"});
    } catch (error) {
        res.status(400).json({message: `Error occured: ${error}`})
    }
}

export const signInController = async (req, res) => {
    
}
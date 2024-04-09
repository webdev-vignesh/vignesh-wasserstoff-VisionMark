import User from "../models/userModel.js";

export const signUpController = async (req, res) => {
    try {
        const body = req.body;
        const user = await User.findOne({email: body.email});
        if (user) {
            res.status(400).json({message: "User already exists"});
        }
        const newUser = await User.create(body);
        res.status(201).json({message: "New user created"});
    } catch (error) {
        res.status(500).json({message: `Error occured: ${error}`})
    }
}

export const signInController = async (req, res) => {
    
}
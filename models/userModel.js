import mongoose from "mongoose";

const UserType = {
    ADMIN: "ADMIN",
    REGULAR: "REGULAR"
}

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: false
    },
    lastName: {
        type: String,
        required: false
    },
    userType: {
        type: String,
        enum: Object.values(UserType),
        default: UserType.REGULAR
    },
})

const User = mongoose.model("User", userSchema); 

export default User;
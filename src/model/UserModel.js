import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {
        type: String,
        min: 3,
        max: 225
    },
    email: {
        type: String,
        required: true,
        unique: true
    }
})

export default mongoose.model("Users", userSchema)
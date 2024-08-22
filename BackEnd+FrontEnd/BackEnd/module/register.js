import mongoose from "mongoose";

const { Schema } = mongoose;

const todoSchema = new Schema({
    name: String,
    email: { type: String, unique: true }, // Define email as unique
    password: String,
});

const Register = mongoose.model('Register', todoSchema); // Remove extra space in model name

export default Register;

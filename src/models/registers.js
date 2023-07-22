const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: Number,
        required: true,
        unique: true
    },
    subjects: {
        type: Number,
        required: true
    },
    rollnumber: {
        type: Number,
        required: true,
        unique: true
    },
    subject1: {
        type: String,
    },
    subject2: {
        type: String,
    },
    subject3: {
        type: String,
    },
    subject4: {
        type: String,
    },
    subject5: {
        type: String,
    },
    subject6: {
        type: String,
    },
    present1: {
        type: Number,
    },
    absent1: {
        type: Number,
    },
    present2: {
        type: Number,
    },
    absent2: {
        type: Number,
    },
    present3: {
        type: Number,
    },
    absent3: {
        type: Number,
    },
    present4: {
        type: Number,
    },
    absent4: {
        type: Number,
    },
    present5: {
        type: Number,
    },
    absent5: {
        type: Number,
    },
    present6: {
        type: Number,
    },
    absent6: {
        type: Number,
    },
    password: {
        type: String,
        required: true
    },
    confirmpassword: {
        type: String,
        required: true
    }
})


//creating collection

const Register = new mongoose.model("Register", studentSchema);

module.exports = Register;
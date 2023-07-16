const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    firstname : {
        type : String,
        required:true
    },
    lastname : {
        type : String,
        required:true
    },
    email : {
        type : String,
        required:true,
        unique:true
    },
    phone : {
        type : Number,
        required:true,
        unique:true
    },
    subjects : {
        type : Number,
        required:true
    },
    rollnumber : {
        type : Number,
        required:true,
        unique:true
    },
    password : {
        type : String,
        required:true
    },
    confirmpassword : {
        type : String,
        required:true
    }
})


//creating collection

const Register = new mongoose.model("Register", studentSchema);

module.exports = Register;
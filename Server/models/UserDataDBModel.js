const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;
const conn = require('../db');

conn.connectToMongoDB();

// username
// password
// age
// dob
// active
// email
// ProductsB
// yearofjoining
// Wishlist
// img
// mobileno
// shippingaddress
// Currentaddress
// location
// language

const Ecommarceschma = new Schema({
    username: {
        type: String,
        required: [true, "Please enter the user Name"]
    },
    password: {
        type: String,
        required: [true, "Please enter the Password"]
    },
    age: {
        type: Number,
        required: [true, "Please enter the age"]
    },
    dob: {
        type: String
    },
    active: {
        type: Boolean,
    },
    email: {
        type: String
    },
    ProductsB: {
        type: String,
        enum: ["Laptop",
        "Camera",
        "Hard DIsk"]
    },
    yearofjoining: {
        type: Number
    },
    Wishlist: {
        type: String,
        enum: ["Mixi",
        "Grainder",
        "Washing Machine"]
    },
    img: {
        type: String,
    },
    mobileno: {
        type: Number,
    },
    shippingaddress: {
        type: String,
    },
    Currentaddress: {
        type: String,
    },
    location: {
        type: String,
    },
    language: {
        type: String,
        enum: ["Tamil",
        "English"]
    }
});

const UserDataCollection = mongoose.model("trainee", Ecommarceschma);

module.exports = UserDataCollection;
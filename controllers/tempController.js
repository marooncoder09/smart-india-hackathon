const Temp = require('../models/tempSchema');
const { mongoose } = require("mongoose");



exports.landingPage = (req, res) => {
    res.send(`:) let's get started with the smart india hackathon`);
}

exports.getTemp = async (req, res) => {
    try {
        const temp = await Temp.find();
        res.status(200).json({
            status: 'success',
            data: temp
        })
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        })
    }
}

exports.pushTemp = async (req, res) => {
    try {
        const {name, email, age} = req.body;
        const temp = await Temp.create({name, email, age});
        
        res.status(200).json({
            status: 'success',
            data: temp
        })
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        })
    }
}

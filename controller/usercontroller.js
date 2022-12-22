const { query, response } = require("express");
const userModel = require("../model/userModel");


const createUser = async function (req, res,next) {
    try {
        let requestBody = req.body
        let userSaved = await userModel.create(requestBody);
        res.status(201).send({ status: true, message: "user successfully created", data: userSaved });
    }
    catch (error) {
        res.status(500).send({ status: false, message: error.message });
    }
};

const getUserName = async (req, res,next) => {
    try{
    let data = req.query.name;
    let userData = await userModel.find({isDeleted: false}).select({_id: 1, name: 1, age: 1})
   // let userData = await userModel.find({isDeleted: false,name:'manish'}).select({_id: 1, name: 1, age: 1})
    return res.status(200).send({status: true,message: "Name List", data: userData})
    }
    catch (error) {
        res.status(500).send({ status: false, message: error.message });
    }
}

const getUserAge = async (req, res,next) => {
    try{
    let data = req.query;
    let UserAge = await userModel.find({ isDeleted: false}).select({_id: 1, name: 1, age: 1}).sort({age: +1 })
    return res.status(200).send({status: true,message: "Age List", data: UserAge})
    }
    catch (error) {
        res.status(500).send({ status: false, message: error.message });
    }
}

const getpaginate = async (req,res,next) => {
        userModel.paginate({}, { page : req.query.page, limit :req.query.limit})
        .then(response =>{
            res.json({
                response
            })
        })
    .catch (error=> {
        res.json({
            message : "An error Occured"+error
        })
    })
}

module.exports = { createUser, getUserName ,getUserAge, getpaginate }
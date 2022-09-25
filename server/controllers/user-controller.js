const { response } = require("express");


const login = async (req, res) => {
    console.log("in login conroller")
    let result = {status: 200}
    console.log(req.body)
    result.result = req.body;
    res.status(result.status).send(result);
}

const logOut = async (req, res) => {
    res.send("in logout conroller")
}

const getCurrentUser = async (req, res) => {
    res.send("In getCurrentUser controller");
}

module.exports = {login, logOut, getCurrentUser};
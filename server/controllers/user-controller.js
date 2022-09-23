

const login = async (req, res) => {
    res.send("in login conroller")
}

const logOut = async (req, res) => {
    res.send("in logout conroller")
}

const getCurrentUser = async (req, res) => {
    res.send("In getCurrentUser controller");
}

module.exports = {login, logOut, getCurrentUser};
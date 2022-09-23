const mongoose = require('mongoose');
const dbUri = process.env.DB_CONNECTION_URL;

const dbUtil = {
    connect: async () => {
        console.log("In DB")
        try {
            console.log("In try")
            console.log(dbUri[1])
            await mongoose.connect(dbUri);
            console.log(`Successfully connected to DB`)
        } catch (error) {
            console.log(`Error: ${JSON.stringify(error)}`)
        }
        
    }
}

module.exports = {dbUtil};
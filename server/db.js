const mongoose = require('mongoose');
const dbUri = process.env.DB_CONNECTION_URL;

const dbUtil = {
    connect: async () => {
        try {
            await mongoose.connect(dbUri);
            console.log(`Successfully connected to DB`)
        } catch (error) {
            console.log(`Error: ${JSON.stringify(error)}`)
        }
        
    }
}

module.exports = {dbUtil};
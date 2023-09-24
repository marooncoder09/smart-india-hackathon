const mongoose = require('mongoose');

const connectDatabase = (MONGO_URI) => {
    mongoose.connect(`${MONGO_URI}`, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log("Mongoose Connected");
        })
        .catch((err) => {
            console.log(err);
        }
        )
}

module.exports = connectDatabase;
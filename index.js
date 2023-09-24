const app = require('./app');
const connectDatabase = require('./config/databases');
require('dotenv').config({ path: './config/config.env' })

const PORT = process.env.PORT || 4000;
const MONGO_URI = process.env.MONGO_URI;

connectDatabase(MONGO_URI);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} in ${process.env.NODE_ENV} mode`);
})
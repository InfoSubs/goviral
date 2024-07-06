require('dotenv').config();

const config = {
    PORT: process.env.PORT || 3000,
    MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost:27017/your-database-name',
    JWT_SECRET: process.env.JWT_SECRET || 'yourjwtsecretkey'
};

module.exports = config;

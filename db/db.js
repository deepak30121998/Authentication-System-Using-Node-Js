const mysql = require("mysql");
const config = require('./config');

const connectDB = async () => {
    const pool = mysql.createPool(config);

    pool.getConnection((err, connection) => {
        if (err) {
            console.error({error: err.message});
        }

        console.log("Connected to database successfully!!");
        connection.release();
    });
};

module.exports = connectDB;
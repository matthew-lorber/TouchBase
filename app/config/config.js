require("dotenv").config();

module.exports = {
    "development": {
        "username": "root",
        "password": process.env.MYSQL_KEY,
        "database": "chatroom_db",
        "host": "localhost",
        "dialect": "mysql"
    },
    "test": {
        "username": "root",
        "password": process.env.MYSQL_KEY,
        "database": "chatroom_db",
        "host": "localhost",
        "dialect": "mysql"
    },
    "production": {
        "use_env_variable": "JAWSDB_URL",
        "username": "sxwl53txwa01eraj",
        "password": process.env.MYSQL_KEY,
        "database": "c8uqfusf09qdnwxt",
        "host": "llolyz0ok3stvj6f0.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        "dialect": "mysql"
    }
}
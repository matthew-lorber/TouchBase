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
        // "use_env_variable": "JAWSDB_URL",
        // "use_env_variable": "mysql://sxwl53txwa01eraj:qxc2ueu1oqs0rn2t@lolyz0ok3stvj6f0.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/c8uqfusf09qdnwxt",
        // "username": process.env.MYSQL_UN,
        // "password": process.env.MYSQL_KEY,
        // "database": process.env.MYSQL_DB,
        // "host": process.env.MYSQL_HOST,
        "dialect": "mysql",
        "username": "sxwl53txwa01eraj",
    "password": "qxc2ueu1oqs0rn2t",
    "database": "c8uqfusf09qdnwxt",
    "host": "lolyz0ok3stvj6f0.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    "dialect": "mysql",
    "operatorsAliases": false
    }
}
module.exports = {
    db: {
        host: "localhost",
        port: 3306,
        user: "root",
        password: process.env.PASSWORD,
        database: "burgersDB"
    },
    heroku: {
        host: "us-cdbr-east-06.cleardb.net",
        port: 3306,
        user: "b7b8a95dceda29",
        password: process.env.DB_PASSWORD,
        database: "heroku_44410e69722b71e",
    }
}

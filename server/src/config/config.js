module.exports = {
    port : process.env.DB_PORT ||3000,
    db:{
        database: process.env.DB_NAME || 'defensoresdb',
        user: process.env.DB_USER || 'root',
        password:process.env.DB_PASS || '',
        options:{
            dialect: process.env.DB_DIALECT || 'mysql',
            host: process.env.DB_HOST || 'localhost',
        }
    }
}
const session = require('express-session');

const MongoStore = require('connect-mongo');

// const mongoose = require('mongoose')

module.exports = app => {
    app.use(
        session({
            secret: process.env.SESS_SECRET,
            resave: true,
            saveUninitialized: true,
            cookie: {
                sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
                secure: process.env.NODE_ENV === 'production',
                httpOnly: true,
                maxAge: 24*60*60*1000 
            },
            store: MongoStore.create({
                mongoUrl: process.env.MONGODB_URI || 'mongodb://localhost:27017/project-CookHelper',
                ttl: 60 * 60* 24 // 60sec * 60min * 24h => 1 day
            })
        })
    )
}
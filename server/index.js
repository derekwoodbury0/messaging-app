let express = require('express')
let app = express()
let massive = require('massive')
require('dotenv').config()
let session = require('express-session')
let authCtrl = require('./authCtrl')
let postCtrl = require('./postCtrl')

let { CONNECTION_STRING, SERVER_PORT, SESSION_SECRET } = process.env

app.use( express.static( `${__dirname}/../build` ) )

app.use(express.json())

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    app.listen(SERVER_PORT, () => console.log(`listening on port ${SERVER_PORT}`))
})

app.use((req, res, next) => {console.log('hey'); next()})

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 365
    }
}))

app.post('/auth/register', authCtrl.checkRegister, authCtrl.register)
app.post('/auth/login', authCtrl.login)
app.get('/auth/currentUser', authCtrl.currentUser)
app.get('/auth/logout', authCtrl.logout)

app.get('/posts/getposts', postCtrl.getPosts)
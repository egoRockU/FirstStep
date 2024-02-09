import express from 'express'
import cors from 'cors'
import localAccountRoutes from './routes/localAccountRoutes.js'
import googleAccountRoutes from './routes/googleAccountRoutes.js'
import dotenv from 'dotenv'
dotenv.config()
import connectDB from './db/db.js'
import session from 'express-session'

const app = express()
const port = process.env.PORT || 8000
connectDB()
const sessionStore = new session.MemoryStore()

app.use(cors())
app.use(express.urlencoded({ extended: false }))

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 7
    },
    saveUninitialized: false,
    store: sessionStore
}))

app.use((req, res, next)=>{
    console.log(sessionStore)
    next()
})


//routes
app.use('/localaccounts', localAccountRoutes)
app.use('/googleaccounts', googleAccountRoutes)

app.listen(port, ()=>{
    console.log(`Express app is listening at port ${port}`)
})
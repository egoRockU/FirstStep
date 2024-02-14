import express from 'express'
import cors from 'cors'
import localAccountRoutes from './routes/localAccountRoutes.js'
import googleAccountRoutes from './routes/googleAccountRoutes.js'
import verifyEmail from './controllers/verifyEmail.js'
import logout from './routes/logout.js'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
dotenv.config()
import connectDB from './db/db.js'
import { errorHandler } from './middlewares/errorMiddlewares.js'

const app = express()
const port = process.env.PORT || 8000
connectDB()

app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({ extended: false }))


//routes
app.use('/localaccounts', localAccountRoutes)
app.use('/googleaccounts', googleAccountRoutes)
app.use('/logout', logout)
app.get('/verify/:uniqueString', verifyEmail)


app.use(errorHandler)

app.listen(port, ()=>{
    console.log(`Express app is listening at port ${port}`)
})
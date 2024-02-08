import express from 'express'
import cors from 'cors'
import localAccountRoutes from './routes/localAccountRoutes.js'
import googleAccountRoutes from './routes/googleAccountRoutes.js'
import dotenv from 'dotenv'
dotenv.config()
import connectDB from './db/db.js'

const app = express()
const port = process.env.PORT || 8000
connectDB()

app.use(cors())
app.use(express.urlencoded({ extended: false }))


//routes
app.use('/localaccounts', localAccountRoutes)
app.use('/googleaccounts', googleAccountRoutes)

app.listen(port, ()=>{
    console.log(`Express app is listening at port ${port}`)
})
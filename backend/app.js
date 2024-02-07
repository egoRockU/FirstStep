import express from 'express'
import localAccountRoutes from './routes/localAccountRoutes.js'
import dotenv from 'dotenv'
dotenv.config()
import connectDB from './db/db.js'

const app = express()
const port = process.env.PORT || 8000
connectDB()

app.use(express.urlencoded({ extended: false }));
app.use('/localaccounts', localAccountRoutes)

app.listen(port, ()=>{
    console.log(`Express app is listening at port ${port}`)
})
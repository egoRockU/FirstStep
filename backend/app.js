import express from 'express'
import accountRoutes from './routes/accountRoutes.js'
import dotenv from 'dotenv'
dotenv.config()
import connectDB from './db/db.js'

const app = express()
const port = process.env.PORT || 8000
connectDB()

app.use(express.urlencoded({ extended: false }));
app.use('/accounts', accountRoutes)

app.listen(port, ()=>{
    console.log(`Express app is listening at port ${port}`)
})
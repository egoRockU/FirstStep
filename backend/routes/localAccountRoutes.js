import express from 'express'
const router = express.Router()
import dotenv from 'dotenv'
dotenv.config()
import { getAllLocalAccounts,
        createLocalAccount,
        loginLocal,
        changeLocalPassword,
        logout

} from '../controllers/localAccountController.js'
import protect from '../middlewares/protect.js'


router.get('/', protect, getAllLocalAccounts)
router.post('/create', createLocalAccount, loginLocal)
router.post('/login', loginLocal)
router.post('/changepassword', protect, changeLocalPassword)
router.get('/logout', protect, logout)



export default router
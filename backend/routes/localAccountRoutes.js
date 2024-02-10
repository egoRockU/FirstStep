import express from 'express'
const router = express.Router()
import { getAllLocalAccounts,
        createLocalAccount,
        loginLocal,
        changeLocalPassword
} from '../controllers/localAccountController.js'
import authenticateToken from '../middlewares/authenticateToken.js'

router.get('/', authenticateToken, getAllLocalAccounts)
router.post('/create', createLocalAccount)
router.post('/login', loginLocal)
router.post('/changepassword', changeLocalPassword)


export default router
import express from 'express'
import { createGoogleAccount, 
    getAllGoogleAccounts,
    loginGoogle
} from '../controllers/googleAccountController.js'
import authenticateToken from '../middlewares/authenticateToken.js'
import { logout } from '../controllers/localAccountController.js'
const router = express.Router()

router.get('/', authenticateToken, getAllGoogleAccounts)
router.post('/create', createGoogleAccount)
router.post('/login', loginGoogle)
router.get('/logout', logout)


export default router
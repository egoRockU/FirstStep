import express from 'express'
import protect from '../middlewares/protect.js'
import { createGoogleAccount, 
    getAllGoogleAccounts,
    loginGoogle
} from '../controllers/googleAccountController.js'
import { logout } from '../controllers/localAccountController.js'
const router = express.Router()

router.get('/', protect, getAllGoogleAccounts)
router.post('/create', createGoogleAccount, loginGoogle)
router.post('/login', loginGoogle)
router.get('/logout', protect, logout)

export default router
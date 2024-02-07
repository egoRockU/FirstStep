import express from 'express'
import { createGoogleAccount, 
    getAllGoogleAccounts,
    loginGoogle
} from '../controllers/googleAccountController.js'
const router = express.Router()

router.get('/', getAllGoogleAccounts)
router.post('/create', createGoogleAccount)
router.post('/login', loginGoogle)

export default router
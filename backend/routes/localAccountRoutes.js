import express from 'express'
const router = express.Router()
import { getAllLocalAccounts,
        createLocalAccount,
        loginLocal,
        changeLocalPassword

} from '../controllers/localAccountController.js'

router.get('/', getAllLocalAccounts)
router.post('/create', createLocalAccount)
router.post('/login', loginLocal)
router.post('/changepassword', changeLocalPassword)


export default router
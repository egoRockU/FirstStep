import express from 'express'
const router = express.Router()
import { getAllAccounts,
        createAccount

} from '../controllers/localAccountController.js'

router.get('/', getAllAccounts)
router.post('/create', createAccount)


export default router
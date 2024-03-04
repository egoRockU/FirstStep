import express from 'express'
const router = express.Router();
import { retrieveAll,
        create,
        retrieveOne,
        update,
        deleteEmployer
} from '../controllers/EmployerProfileController.js'

router.get('/retrieve', retrieveAll)
router.post('/create', create)
router.post('/retrieveone', retrieveOne)
router.post('/update', update)
router.post('/delete', deleteEmployer)

export default router
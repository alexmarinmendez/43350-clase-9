import { Router } from 'express'

const users = [
    { id: 1, name: 'Alex', role: 'teacher' },
    { id: 2, name: 'Felipe', role: 'student' },
    { id: 3, name: 'Alezhia', role: 'student' },
]

const router = Router()

router.get('/', (req, res) => {
    res.json({ users })
})

export default router
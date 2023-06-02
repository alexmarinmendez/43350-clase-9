import { Router } from 'express'

const users = [
    { id: 1, name: 'Alex', role: 'teacher' },
    { id: 2, name: 'Felipe', role: 'student' },
    { id: 3, name: 'Alezhia', role: 'student' },
]

const foods = [
    { id: 1, name: 'Banana' },
    { id: 2, name: 'Grapes' },
    { id: 3, name: 'Beer' },
]

const router = Router()

router.get('/', (req, res) => {
    // res.json({ users })
    res.render('showUsers', {styles: 'blue.css', users})
})

router.get('/:id', (req, res) => {
    const id = req.params.id
    const user = users.find(item => item.id == id)
    res.render('showUser', {
        user,
        isTeacher: user.role == 'teacher' ? true : false,
        foods
    })
})

export default router
const router = require('express').Router()

const studentRoutes = require('./student')

const TeacherController = require('../controllers/teacher')

const authentication = require('../middlewares/authentication')

router.post('/register', TeacherController.register)

router.post('/login', TeacherController.login)

router.use(authentication)

router.use('/students', studentRoutes)

module.exports = router

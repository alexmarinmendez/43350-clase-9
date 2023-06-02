import express from 'express'
import handlebars from 'express-handlebars'
import userRouter from './routers/user.router.js'

const app = express()

//configuracion del motor de plantillas
app.engine('handlebars', handlebars.engine())
app.set('views', './src/views')
app.set('view engine', 'handlebars')

//middleware
// app.use(express.static('./public'))
app.use('/contenido', express.static('./public'))
app.get('/health', (req, res) => res.send('ok'))
app.use('/users', userRouter)
app.get('/ejemplo', (req, res) => {
    res.render('ejemplo', {
        nombre_vista: 'Ejemplo de Handlebars'
    })
})
app.get('/motor', (req, res) => res.render('motor', { nombre_vista: 'Motor'}))
app.listen(8080, () => console.log('Server Up!'))
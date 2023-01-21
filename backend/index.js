import express from 'express'
import profileRouter from './routes/profileRouter.js'

const app = express()
const port = 3000


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/profile', profileRouter)

app.listen(port, () => {
    console.log(`Stride backend listening on port ${port}`)
})
import express, { json } from 'express'
import planetRouter from './routes/planets/planets.router'


const app = express()
app.use(express.json())
const PORT = 1000

app.use(planetRouter)


app.listen(PORT, () => console.log(' Nothing much just listing'))
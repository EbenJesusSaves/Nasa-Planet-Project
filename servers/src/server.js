import express, { json } from 'express'
import planetRouter from './routes/planets/planets.router.js'
import cors from "cors";
import { loadedPlanetsOBject } from './models/planet.modules.js';
import morgan from 'morgan'
import { getLaunches } from './routes/launches/launches.router.js';
const app = express()
app.use(express.json())
app.use(cors({ origin: '*' }))

app.use(morgan('combined'))

const PORT = 1000
await loadedPlanetsOBject.loadPlanetsData()

//
app.use(planetRouter)
app.use(getLaunches)

app.get('/', (req, res) => res.send({ message: 'thanks for getting' }))
app.listen(PORT, () => console.log(' Nothing much just listing' + PORT))
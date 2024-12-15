import { Router } from "express"
import launches, { addNewLaunches } from "../../models/lauches.model.js"

export const launchesRouter = Router()

export const getLaunches = launchesRouter.get('/',
    (req, res) => {
        return res.status(200).json(Array.from(launches.values()))
    }
)



export const addNewLaunch = launchesRouter.post('/', (req, res) => {
    const launch = req.body
    console.log(launch)
    launch.launchDate = new Date(launch.launchDate)
    addNewLaunches(launch)
    res.status(201).json(launch)
})
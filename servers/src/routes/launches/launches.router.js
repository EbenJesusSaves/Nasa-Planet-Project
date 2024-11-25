import { Router } from "express"
import launches from "../../models/lauches.model.js"

const launchesRouter = Router()

export const getLaunches = launchesRouter.get('/launches',
    (req, res) => {
        return res.status(200).json(Array.from(launches.values()))
    }
)
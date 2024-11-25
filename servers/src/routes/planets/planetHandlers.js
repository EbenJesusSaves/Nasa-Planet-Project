import { loadedPlanetsOBject } from "../../models/planet.modules.js"

const planets = ['king', 'forth']

export const getAllPlanets = (req, res) => {

    // good practice
    return res.status(200).json({
        message: loadedPlanetsOBject.habitablePlanets
    })
}
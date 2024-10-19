const planets = []

const getAllPlanets = (req, res) => {

    res.status(200).json({
        message: planets
    })
}
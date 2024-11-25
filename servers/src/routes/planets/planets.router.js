import { Router } from "express";
import { getAllPlanets } from "./planetHandlers.js";

const planetRouter = Router()



planetRouter.get('/planets', getAllPlanets)



export default planetRouter
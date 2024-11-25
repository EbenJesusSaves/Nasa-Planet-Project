import fs from 'node:fs'
import { parse } from 'csv-parse'
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const habitablePlanets = [];
// Get the current file path and directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, '..', '..', 'data', 'kepler_data.csv');
function isHabitablePlanet(planet) {
    return planet['koi_disposition'] === 'CONFIRMED'
        && planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11
        && planet['koi_prad'] < 1.6;
}


const loadPlanetsData = () => {

    return new Promise((resolve, reject) => {

        fs.createReadStream(filePath)
            .pipe(parse({
                comment: '#',
                columns: true,
            }))
            .on('data', (data) => {
                if (isHabitablePlanet(data)) {
                    habitablePlanets.push(data);
                }
            })
            .on('error', (err) => {
                console.log(err);
                reject(err)
            })
            .on('end', () => {
                resolve()
                console.log(`${habitablePlanets.length} habitable planets found!`);
            });

    })


}



export const loadedPlanetsOBject = {
    habitablePlanets,
    loadPlanetsData

}


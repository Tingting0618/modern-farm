import {addPlant} from "./field.js"




export const plantSeeds  = (aPlan) => {
    const plants  = []

    for (const seed_row of aPlan) {
        const plant_row = []
        for (const seed of seed_row) {
            
            plant_row.push(addPlant(seed))
            
        }
        plants.push(plant_row)
    }

    return plants
}


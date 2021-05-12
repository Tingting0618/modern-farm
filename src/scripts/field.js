storePlant = []
import { createPotato } from "./seeds/potato.js"
const potatoSeed = createPotato()
export const addPlant = () => {
    storePlant.push(potatoSeed)
    return storePlant
    }
console.log(storePlant)
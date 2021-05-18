
import { createPotato } from "./seeds/potato.js"
import { createCorn } from "./seeds/corn.js"
import { createAsparagus } from "./seeds/asparagus"
import { createSoybean } from "./seeds/soybean"
import { createSunflower } from "./seeds/sunflower"
import { createWheat } from "./seeds/wheat"

storePlant = []
export const addPlant = (aSeed) => {
    if (aSeed === potatoSeed) {
        const potatoSeed = createPotato()
        for (const i of potatoSeed) {
            storePlant.push(i)
            return storePlant
        }
    } else if (aSeed === cornSeed) {
        const cornSeed = createCorn()
        for (const i of cornSeed) {
            storePlant.push(i)
            return storePlant
        }
    } else if (aSeed === asparagusSeed) {
        const asparagusSeed = createAsparagus()
        for (const i of asparagusSeed) {
            storePlant.push(i)
            return storePlant
        }
    }
    else if (aSeed === soybeanSeed) {
        const soybeanSeed = createSoybean()
        for (const i of soybeanSeed) {
            storePlant.push(i)
            return storePlant
        }
    }
    else if (aSeed === sunflowerSeed) {
        const sunflowerSeed = createSunflower()
        for (const i of sunflowerSeed) {
            storePlant.push(i)
            return storePlant
        }
    }
    else {
        const wheatSeed = createWheat()
        for (const i of wheatSeed) {
            storePlant.push(i)
            return storePlant
        }
    }

}
addPlant(cornSeed)
console.log(storePlant)

export const usePlants = () => {
    addPlant()
}

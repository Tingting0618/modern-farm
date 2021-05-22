//check if things works
import { createPotato } from "./seeds/potato.js"
import { createCorn } from "./seeds/corn.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"



export const addPlant = (aSeed) => {
    const storePlant = []
    if (aSeed === "Potato") {
        let potatoSeed = createPotato()

        storePlant.push(potatoSeed)

        return storePlant
    }
    else if (aSeed === "Corn") {
        let cornSeed = createCorn()
        for (const i of cornSeed) {
            storePlant.push(i)

        }
    }
    else if (aSeed === "Wheat") {
        let wheatSeed = createWheat()
        storePlant.push(wheatSeed)
    }

    else if (aSeed === "Sunflower") {
        let sunflowerSeed = createSunflower()
        storePlant.push(sunflowerSeed)
    }
    else if (aSeed === "Asparagus") {
        let asparagusSeed = createAsparagus()
        storePlant.push(asparagusSeed)
    }
    else if (aSeed === "Soybean") {
        let soybeanSeed = createSoybean()
        storePlant.push(soybeanSeed)
    }
    else {
        storePlant.push({ name: "seed not found"})
    }
    return storePlant
}


export const usePlants = () => {
    return []
}
import {createPlan} from "./plan.js"
import {createCorn } from "./seeds/corn.js"
import {createPotato } from "./seeds/potato.js"
import {addPlant} from "./field.js"
import {usePlants} from "./field.js"
import {plantSeeds} from "./tractor.js"
import {harvestPlants} from "./harvester.js"
import { Catalog } from "./catalog.js"




const yearlyPlan = createPlan()
console.log(yearlyPlan)

const cornSeed = createCorn()
console.log(cornSeed)

const potatoSeed = createPotato()
console.log(potatoSeed)

addPlant("Corn")
addPlant("Potato")
addPlant("Corn")
const somePlants = usePlants()
console.log(somePlants)

const allPlants = plantSeeds(yearlyPlan)
console.log(allPlants)

const allOutput = harvestPlants(allPlants)
console.log(allOutput)
console.log(Catalog())

console.log("Welcome to the main module")

const applicationHTML =Catalog()

const mainContainer = document.querySelector("#container")


mainContainer.innerHTML = applicationHTML



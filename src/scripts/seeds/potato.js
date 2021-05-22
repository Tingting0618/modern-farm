import { getPlants } from "../database.js"

const plants = getPlants()


export const createPotato = () => {
    let objList = []

    for (const i of plants) {
        if (i.name === "Potato") {
        objList.push(i)
        }
    }

//    obj += i

    return objList 
}
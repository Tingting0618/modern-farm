import { getPlants } from "../database.js"

const plants = getPlants()

export const createWheat = () => {
    let objList =[]

    for (const i of plants) {
        if (i.name === "Wheat") {
        objList.push(i)
        }
    }

//    obj += i

    return objList
}
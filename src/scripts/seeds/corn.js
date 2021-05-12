import { getPlants } from "../database.js"

const plants = getPlants()

export const createCorn = () => {
    let objList = []

    for (const i of plants) {
        if (i.name === "Corn") {
        objList.push(i)
        objList.push(i)
        }
    }

//    obj += i

    return objList 
}
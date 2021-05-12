import { getPlants } from "../database.js"

const plants = getPlants()

export const createAsparagus = () => {
    let objList = []

    for (const i of plants) {
        if (i.name === "Asparagus") {
        objList.push(i)
        }
    }

//    obj += i

    return objList
}
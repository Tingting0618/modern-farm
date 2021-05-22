import { getPlants } from "../database.js"

const plants = getPlants()

export const createSoybean = () => {
    let objList =[]

    for (const i of plants) {
        if (i.name === "Soybean") {
        objList.push(i)
        }
    }

//    obj += i

    return objList
}
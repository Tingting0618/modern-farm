import {createPlan} from "./plan.js"
import {plantSeeds} from "./tractor.js"


export const harvestPlants = (plants) => {
    const seeds = []

    for (const row_plant of plants) {
        const row_results = []
        for (const a of row_plant) {
        const plant_obj=a[0]

        if (plant_obj.name = "Corn") {
            let temp = parseInt(plant_obj.output)
            let repeat=temp/2

            for (let i = 0; i < repeat + 1; i++) {
                row_results.push(plant_obj)

            }
        }
        else {
            let repeat = parseInt(plant_obj.output)
            for (let i = 0; i < repeat + 1; i++) {
                row_results.push(plant_obj)
            }
        }
    }
    seeds.push(row_results)
    }
    return seeds
}

const yearlyPlan = createPlan()
const allPlants = plantSeeds(yearlyPlan)


export const all_Foods = () => {
    const allOutput = harvestPlants(allPlants)
    let html = "<ul>"

    // This is how you have been converting objects to <li> elements
    for (const output of allOutput) {
        let all_food= "<ul>"
        for (const single_output of output){
            html += `<li>
            <section class="plant"> ${single_output.name}</section>`  
        }
        all_food+=html
        return all_food
    }
    

    

}
console.log(all_Foods())
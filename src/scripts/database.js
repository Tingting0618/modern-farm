const database = {
    plants: [
        {name:"Soybean",
        height:20,
        output:4},
        {name:"Corn",
        height:180,
        output:6},
        {name:"Sunflower",
        height:380,
        output:3},
        {name:"Asparagus",
        height:24,
        output:4},
        {name:"Wheat",
        height:230,
        output:6},
        {name:"Potato",
        height:32,
        output:2}
    ]
}

export const getPlants = () => {
    return [...database.plants]
}
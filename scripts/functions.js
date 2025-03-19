import { database } from './aquariumData.js';



export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const holyFish = []
    for (const oneFish of database.fish) {
        if (oneFish.fishLength % 3 === 0) {
            holyFish.push(oneFish)
        }
    }
     return holyFish
}

export const mostSoldierFish = () => {
    const soldierFish = []

    for (const oneFish of database.fish) {
        // 5, 10, 15, 20, 25, etc... 
        if (oneFish.fishLength % 5 === 0) {
            soldierFish.push(oneFish)
        }
    }
    return soldierFish
}

export const regularFish = () => {
    // Any fish not a multiple of 3 or 5
    let otherFish = []
    for (const oneFish of database.fish) {
        if (oneFish.fishLength % 5 && oneFish.fishLength % 3 ) {
            otherFish.push(oneFish)
        }
    }
    
    return otherFish
}


// export const sortFish = () => {
//     const holyFish = []
//     const soldierFishArray = []
//     let otherFish = []
//     const oneFish = database.fish
//     if (oneFish.fishLength % 3 === 0) {
//         holyFish.push(oneFish)
//     } else if (oneFish.fishLength % 5 === 0) {
//         soldierFishArray.push(oneFish)
//     } else (oneFish.fishLength != 0)
//     otherFish.push(oneFish)
// }



import { fishList, renderFishToDOM } from './fishList.js'
import { tipList, renderTipsToDOM } from './tipList.js'
import { locationList, renderLocationsToDOM } from './locationList.js'
import { mostHolyFish, mostSoldierFish, regularFish } from './functions.js';

// Generate the fish list
// const fishHTML = fishList();

// // Generate the care tips
const tipHTML = tipList();

// // Generate the location list
const locationHTML = locationList();

const holyFishHTML = fishList(mostHolyFish());
const soldierFishHTML = fishList(mostSoldierFish());
const regularFishHTML = fishList(regularFish());


const allFishHTML = [holyFishHTML, soldierFishHTML, regularFishHTML];

renderFishToDOM(allFishHTML);
//  renderFishToDOM(soldierFishHTML);
 renderTipsToDOM(tipHTML)
 renderLocationsToDOM(locationHTML)

//  domReference.innerHTML = `${string1}${string2}${string3}`
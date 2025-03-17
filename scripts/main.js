import { fishList, renderFishToDOM } from './fishList.js'
// import { tipList } from './tipList.js'
// import { locationList } from './locationList.js'

// Generate the fish list
const fishHTML = fishList();

// Generate the care tips
const tipHTML = tipList();

// Generate the location list
const locationHTML = locationList();

// Render each HTML string to the correct DOM element

// const renderFishToDOM = (fishHTML) => {
//     const fishList = document.getElementById('fishList');
 
//     if (fishList) {
//         fishList.innerHTML = fishHTML;
//     } else {
//         console.error('Could not find element with id "fishList"');
//     }
//  };

 renderFishToDOM(fishHTML);
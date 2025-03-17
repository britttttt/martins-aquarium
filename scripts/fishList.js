import { database } from './aquariumData.js';

export const fishList= () => {
    // Generate an HTML representation of each fish
    let fishHTML = '';

    for (const fish of database) {
        fishHTML += `
            <article class="fish-article">
                <img src="${fish.image}" alt="${fish.name}" class="fish_image">
                <div class="fish__details">
                    <h2 class="fish__name">${fish.name}</h2>
                    <p class="fish__species">${fish.species}</p>
                </div>
            </article>
        `;
    }
 
    return fishHTML
};

export const renderFishToDOM = (fishHTML) => {
    const fishList = document.getElementById('fishList');
 
    if (fishList) {
        fishList.innerHTML = fishHTML;
    } else {
        console.error('Could not find element with id "fishList"');
    }
 };
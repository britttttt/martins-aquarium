import { database } from './aquariumData.js';

export const tipList = () => {
    let tipHTML = ''

    for (const tip of database.tips) {
        tipHTML+=`
            <article class="tip-article">
            <p class="tip__topic">${tip.topic}</p>
                <ul class ="tips">
                    <p><li class="tip__text">${tip.text}</li></p>
                </ul>
            </article>
        `;
    }
    return tipHTML
}

export const renderTipsToDOM = (tipHTML) => {
    const tipList = document.getElementById('tipList');
    if (tipList) {
        tipList.innerHTML = tipHTML;
    } else {
        console.error('Could not find element with id "tipList"');
    }
 };
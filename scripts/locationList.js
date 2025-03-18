import { database } from './aquariumData.js';

export const locationList = () => {
    let locationHTML = ''

    for (const location of database.locations) {
        locationHTML+=`
            <article class="locations">
            <section class="location">${location.name}</section>
            <p class="country">${location.country}</p>
            <p class="description">${location.description}</p>
            </article>
        `;
    }
    return locationHTML
}

export const renderLocationsToDOM = (locationHTML) => {
    const locationList = document.getElementById('locationList');
    if (locationList) {
        locationList.innerHTML = locationHTML;
    } else {
        console.error('Could not find element with id "locationList"');
    }
 };
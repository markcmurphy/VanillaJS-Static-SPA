class UI {
    constructor(data) {
        this.track = document.querySelector('.tab');
        this.desc = document.getElementById('desc');
    }

    // Display tracks in UI
    showTracks(data, tracksArr, newTracks) {
        let output = '';

        newTracks.forEach(element => {
            output += `
            <li class="tablinks" id="${element}">${element}</li>`
        });

        // Output tracks to navbar
        this.track.innerHTML = output;
    }

    // Display titles in UI
    showTitles(data, trackKeyResult, titleID) {
        let output = '';

        trackKeyResult[titleID].forEach(element => {
            output += `<li class="${element.Track.Title}" id="${element.Id}">${element.Title}</li>`
        });

        // output title to side nav
        this.desc.innerHTML = output;
        // output selected track to side nav
        document.querySelector('.ul-title').innerHTML = `${titleID}`;
    }

    // Display descriptions in ui
    showDesc(data, trackKeyResult, titleID, titleObj) {
        const found = trackKeyResult[titleObj].find(element => element.Id === titleID);     
        
        // output selected title above article as header
        document.querySelector('.article-title').innerHTML = `<h2>${found.Title}</h2>`;
        
        // output title description as article
        document.querySelector('.tabcontent').innerHTML = `<div><p>${found.Description}</p></div>`;
    }
}
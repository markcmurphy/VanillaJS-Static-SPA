// Init Session
const sessions = new Sessions;

// Init UI
const ui = new UI;

// make http call
sessions.getSessions().then(data => {

    let dataArr = data.sessions.Items;

    // create array of available tracks
    const newTracks = [...new Set(dataArr.map(x => x.Track.Title))];    

    // empty array for track titles
    let tracksArr = [];

    // push eack title to cooresponding unique track array
    newTracks.forEach(element => {
        let e = dataArr.filter(x => x.Track.Title == element);
        tracksArr.push(e);
    })    

    // map title arrays to appropriate track object
    var trackKeyResult = tracksArr.reduce(function (trackKeyResult, field, index) {
        trackKeyResult[newTracks[index]] = field;
        return trackKeyResult;
    }, {}) 

    // Display tracks in UI
    ui.showTracks(data, tracksArr, newTracks);

    // display titles on click of track in navbar
    ui.track.addEventListener('click', (e) => {
        let titleID = e.target.id;
        ui.showTitles(data, trackKeyResult, titleID);
    })

    // to display titles for default track on page load
    ui.showTitles(data, trackKeyResult, "Build");

    // display cooresponding description/article when title selected from sidebar
    ui.desc.addEventListener('click', (e) => {
        let titleID = e.target.id;
        let titleObj = e.target.classList.value;        
        ui.showDesc(data, trackKeyResult, titleID, titleObj);
    })
})

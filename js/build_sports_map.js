/*-----------------------------------------------------------------------*/
/* Build the map of MCPS High School Sports Facilities                   */
/*-----------------------------------------------------------------------*/

/*-----------------------------------------------------------------------*/
/* Globals                                                               */
/*-----------------------------------------------------------------------*/

/*-----------------------------------------------------------------------*/
/* Main functionality
/*-----------------------------------------------------------------------*/
//Center map at geographical center of Montgomery County
var map = L.map( 'viz_map', {
    center: [39.1439076, -77.2077942],
    minZoom: 1,
    zoom: 11
});

//Control where we show the MSA Name
var info = L.control();

//First arg is url template to fetch tiles, second is attribution statement
L.tileLayer( 'http://{s}.mqcdn.com/tiles/1.0.0/map/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright" title="Open StreetMap" target="_blank">OpenStreetMap</a> contributors | Tiles Courtesy of <a href="http://www.mapquest.com/" title="MapQuest" target="_blank">MapQuest</a> <img src="http://developer.mapquest.com/content/osm/mq_logo.png" width="16" height="16"> | Icons from <a href="https://mapicons.mapsmarker.com">Maps Icons Collections</a>',
    subdomains: ['otile1', 'otile2', 'otile3', 'otile4']
}).addTo( map );

/*--------------------------------------------------------------------*/
/* Info control to hold MSA name, from                                */
/* http://leafletjs.com/examples/choropleth.html#map                  */
/*--------------------------------------------------------------------*/
/* info.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
}; */

// method that we will use to update the info control
// based on feature properties passed
/* info.update = function (name) {
    this._div.innerHTML = '<h4>Metro Area</h4><br>' + (name ? name : "Select a metro area");
};

info.addTo(map);
*/



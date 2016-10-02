/*-----------------------------------------------------------------------*/
/* Build the map of MCPS High School Sports Facilities                   */
/*-----------------------------------------------------------------------*/

/*-----------------------------------------------------------------------*/
/* Globals                                                               */
/*-----------------------------------------------------------------------*/

/*-----------------------------------------------------------------------*/
/* Main functionality
   /*-----------------------------------------------------------------------*/
function buildMap(data) {
    //Center map at geographical center of Montgomery County
    var map = L.map( 'viz_map', {
	center: [39.1439076, -77.2077942],
	minZoom: 1,
	zoom: 11
    });

    //Control where we show the High School Name
    var info = L.control();

    //First arg is url template to fetch tiles, second is attribution statement
    L.tileLayer( 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="http://osm.org/copyright" title="Open StreetMap" target="_blank">OpenStreetMap</a> contributors | Icons from <a href="https://mapicons.mapsmarker.com">Maps Icons Collections</a>'}).addTo( map );

    //Create a feature layer from all the high schools
    //add markers to map for each

    //School icon from mapkey
    var mki = L.icon.mapkey({icon:"school", color:'#725139',background:'#f2c357',size:30});
    var thisSchool = {}; //Temp var to simplify indexing
    for (var i = 0; i < schoolsData.length; i++)
    {
	thisSchool = schoolsData[i];
	var newMarker = L.marker([thisSchool.lat, thisSchool.long], {icon:mki})
	    .bindPopup(thisSchool.School);
	newMarker.addTo(map);
    }

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

}

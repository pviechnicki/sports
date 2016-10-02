/*--------------------------------------------------*/
/* draws scatter plot of team records by farms rate */
/*--------------------------------------------------*/

/*-------------------------------------------------*/
/* Globals                                         */
/*-------------------------------------------------*/
var viz_chart = {};


/*------------------------------------------------------------*/
/* Build the horizontal bar chart, passing in array of values */
/*------------------------------------------------------------*/
function buildViz(data) {
    viz_chart = d3plus.viz()
    	.container("#viz_chart")
    	.data(data)
    	.type("scatter")
    	.id("School")
    	.x("Total All Sports")
    	.y("FARMS Rate")
	.ui([
	    {
		"method": "x",
		"label": "Select sport",
		"value": ["Total All Sports", "Football", "Baseball", "Softball", "Field Hockey",
			  "Lacrosse (G)", "Lacrosse (B)", "Soccer (G)",
			  "Soccer (B)", "Basketball (G)", "Basketball (B)",
			  "Tennis (G)", "Tennis (B)"]
	    }
	])
    	.draw();
    
    return true;
}

/*--------------------------------------------------*/
/* Main functionality                               */
/*--------------------------------------------------*/

getJSON(jsonFilename).then(function(response) {
    for (var i = 0; i < response.length; i++) {
	schoolsData.push(response[i]);
    }
    //Draw the commute times graph
    buildViz(schoolsData);

    //Draw the map of high schools with the same data
    buildMap(schoolsData);

}
			  );

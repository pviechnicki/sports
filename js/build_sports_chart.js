/*--------------------------------------------------*/
/* draws scatter plot of team records by farms rate */
/*--------------------------------------------------*/

/*-------------------------------------------------*/
/* Globals                                         */
/*-------------------------------------------------*/
var viz_chart = {};
//var jsonURL = "./data/mcps_hs_sports_records_2015_2016.json";

var fakeData = [
    {
	"School": "one",
	"Football": .5,
	"Baseball": .3,
	"FARMS Rate": .2
    },
    {
	"School": "two",
	"Football": .3,
	"Baseball": .7,    
	"FARMS Rate": .6
    }
];


/*------------------------------------------------------------*/
/* Build the horizontal bar chart, passing in array of values */
/*------------------------------------------------------------*/
function buildViz(data) {
    viz_chart = d3plus.viz()
    	.container("#viz_chart")
    	.data(data)
    	.type("scatter")
    	.id("School")
    	.x("Football")
    	.y("FARMS Rate")
	.ui([
	    {
		"method": "x",
		"label": "Select sport",
		"value": ["Football", "Baseball", "Softball", "Field Hockey",
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

}
			  );

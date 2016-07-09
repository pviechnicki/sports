//---------------------------------------------------------------//
// Geographical utilty and helper functions
//---------------------------------------------------------------//


/*--------------------------------------------------*/
/* Load data from a json file and return the array  */
/* of objects                                       */
/*--------------------------------------------------*/

function loadData(filename) {
    var results = [];
    getJSON(filename).then(function(data) {
	console.log(data);

	//Copy data to results array
	for (var i = 0; i < data.length; i++) {
	    results.push(data[i]);
	}
    });

    return results;
}

/*--------------------------------------------------*/
/* Get information from a URL                       */
/* From Haverbeke pg 308                            */
/*--------------------------------------------------*/
function get(url) {
    return new Promise(function(succeed, fail) {
      	var req = new XMLHttpRequest();
      	req.open("GET", url, true);
      	req.addEventListener("load", function() {
    	    if (req.status < 400)
        		succeed(req.responseText);
    	    else
        		fail(new Error("Request failed: " + req.statusText));
      	});
      	req.addEventListener("error", function() {
    	    fail(new Error("Network error"));
      	});
      	req.send(null);
    });
}
/*------------------------------------------------------------*/
/* Return a promise whose result is the content of the url    */
/* parsed as JSON                                             */
/* Haverbeke pg. 309                                          */
/*------------------------------------------------------------*/
function getJSON(url) {
    return get(url).then(JSON.parse);
}

/*------------------------------------------------------------*/
/* Build array of field, value objects from headers, data     */
/*------------------------------------------------------------*/
function dataFold(data, header) {
    var result = [];
    var arrayLength = data.length;

    var elementLength = data[0].length;
    for (var i = 0; i < arrayLength; i++) {
    	var newObject = {};
    	for (var j = 0; j < elementLength; j++) {
  	    newObject[header[j]] = data[i][j];
    	}
    	result.push(newObject);
    }

    return result;
}

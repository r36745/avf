
$(function() {
var tag = "bars",

	url = "https://api.instagram.com/v1/tags/" + tag + "/media/recent?callback=?&amp;client_id=134427b420784a59ad7cddba9e547892";

$.getJSON(url, screenOutput); 
});	
	


var screenOutput = function(bStats) {
	

	$.each(bStats.data, function(index, photo) {
		

		var pic = "<li><img src ='" + photo.images.standard_resolution.url + "' alt='" + photo.user.id + "'/><li>";
		console.log(pic);
		$("#data-output").append(pic);
	});



	 
		

};

$(function(){
	var eUrl = "http://api.espn.com/:version/sports/:sportname?apikey=:uh3yz7wpdhatdpyqj2ykg8j3";

	$.getJSON(eUrl, espnOutput);
});

var espnOutput = function(info) {
	console.log(info);
};


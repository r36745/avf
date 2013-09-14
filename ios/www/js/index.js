
$(function() {
  var tag = "bars",
  
  url = "https://api.instagram.com/v1/tags/" + tag + "/media/recent?callback=?&amp;client_id=134427b420784a59ad7cddba9e547892";
  
  $.getJSON(url, screenOutput);
  });



var screenOutput = function(bStats) {
	
	console.log(bStats);
    
    
	$.each(bStats.data , function(index, photo) {
           var pic = "'<li><img src='" + photo.images.standard_resolution.url + "' alt= '" + photo.user.id
           + "' /><h4>" +photo.user.full_name +", <em>(" + photo.user.username +")</em></h4></li>
           ";
           $("#data-output").append(pic);
           
           }); 
    
    
};
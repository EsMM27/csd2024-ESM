$("document").ready(function() {

	$.post("getAlbums.php", {"artist_id" : "1"}, function(data){
		console.log(data);
		$.each(data.albums, function(index, value) {	
			$("#myDiv").append(`${value.album_name} <br>`);
		});
	  }, "json");
  
});




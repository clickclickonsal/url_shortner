$(document).ready(function() {

	function sendUrlToShorten(url) {
		$.post('/shrink_urls', {shrink_url: url}, function(data, status) {
			console.log(data);
		});
	}
		// $.ajax({
		// 	url: "/shrink_urls",
		// 	type: 'POST',
		// 	dataType: "json",
		// 	data; { shrink_url: { original_url: url, short_url:  }}
		// 	error: function(){

		// 	},
		// 	success: function(response){

		// 	}

		// })
	

	$(".original-url-form").on("submit", function(event) {
		event.preventDefault();
		var originalUrl = $("#original-url").val();
  	console.log(originalUrl);
		$("#original-url").val("");
		sendUrlToShorten(originalUrl);
	});

});

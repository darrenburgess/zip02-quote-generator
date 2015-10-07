$(document).ready(function(){

	$('button').click(function(){
	    // Get first search result and use as titles
		WikiquoteApi.getRandomQuote(
			'Frank Zappa', 
			function(newQuote) {
				$('#quote').text(newQuote.quote);
			}, 
			function(msg){
				$('#quote').replaceWith('Error');
			}
		);
	});

});
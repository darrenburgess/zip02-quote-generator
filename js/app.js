$(document).ready(function(){
	
	function getQuote(){
		WikiquoteApi.getRandomQuote(
			'Frank Zappa', 
			function(newQuote) {
				$('#quote').text(newQuote.quote);
			}, 
			function(msg){
				$('#quote').replaceWith('Error');
			}
		);
	}

	getQuote();

	$('button').click(function(){
	    getQuote();
	});

});
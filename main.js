(function ($){
	var $input = $('#i-text');
	var $output = $('#i-output');

	function jhaasha(text) {
		var j = [];
		for (var i = 0; i < text.length; i++) {
			var t = text[i];
			if (i % 2 == 1)
				j[i] = t.toUpperCase();
			else
				j[i] = t.toLowerCase();
		}
		return j.join('');
	}

	$input.on('keypress', function(event) {
		var js = jhaasha($input.val());
		console.log(js);
		$output.val(js);
	});
}) (jQuery);

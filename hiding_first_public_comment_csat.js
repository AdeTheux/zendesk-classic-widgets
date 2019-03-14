$j(document).ready( function() {
	if(window.location.href.indexOf("satisfaction") > -1)
	{
		var my_text = $j('.frame').first().html()
		if(my_text.indexOf("call logging ticket") > -1)
		{
			$j('.frame').first().hide();
		}
	}
});
$j(document).ready(function(){
if (window.location.href.indexOf('?locale=16') >= 0)
	{
		if (window.location.href.indexOf('&intention=16') >= 0)
			{
			location.href = 'LIEN VERS SURVEY FR POSITIF';
			}

		if (window.location.href.indexOf('&intention=4') >= 0)
			{
			location.href = 'LIEN VERS SURVEY FR NEGATIF';
			}
	}

if (window.location.href.indexOf('?locale=1') >= 0)
	{
		if (window.location.href.indexOf('&intention=16') >= 0)
			{
			location.href = 'LIEN VERS SURVEY EN POSITIF';
			}

		if (window.location.href.indexOf('&intention=4') >= 0)
			{
			location.href = 'LIEN VERS SURVEY EN NEGATIF';
			}
	}
	
});

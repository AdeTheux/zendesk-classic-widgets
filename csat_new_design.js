body, html {
  	background-color: #FFFFFF !important;
	}
	#satisfaction_rating {
		padding: 10px;
		width: 740px;
		margin: 100px auto;
		font-size: 12px;
	}
	
	#satisfaction_rating form, #satisfaction_rating #current_rating {
		margin-right: 0px
	}
</style>


<script>

$j(document).ready(function(){
	
	if( window.location.pathname.match("/satisfaction/new")) {
		$j('body').hide();
		$j('body').children().wrapAll('<div class="hide" />');
		$j('hide').hide();
		$j('#satisfaction_rating').detach().appendTo('body');
		$j('body').show();
	}

});

</script>
<style>
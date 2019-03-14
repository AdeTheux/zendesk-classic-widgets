//Verify email address and pops an alert if they don't match
$("#new_request").blur(function(){
	if ($("#request_custom_fields_23680392").val() != $("#request_anonymous_requester_email").val()) {
	alert("Oi! those emails don't match."); }
});
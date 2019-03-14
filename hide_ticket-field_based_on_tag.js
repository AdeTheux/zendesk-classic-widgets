(function() {
if ( currentUser.tags.indexOf('totalstay') >= 0 ) {
   $j('#ticket_fields_22840743').hide();
   $j("#end-user-form p:contains('Please provide the area or component of your installation')").hide();
   $j("#end-user-form h3:contains('System Module')").hide();
}
}());
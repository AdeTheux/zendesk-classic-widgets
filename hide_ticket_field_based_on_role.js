//START hide field based on role
jQuery(function($) {
//Insert here the ID for the role which shouldn't see the field
    var role_id = [714257],
//Insert here the ID of custom field or the DIV ID of a system field you want to hide
        id_to_remove = "#ticket_fields_20349653",
        user_url = jQuery("a#top-right-name").attr("href");
 
    jQuery.getJSON(user_url, {}, function(data){
     if (role_id.indexOf(data.custom_role_id) >= 0){
        jQuery(id_to_remove).parent().remove()
     }
    })
})
//END hide field based on role
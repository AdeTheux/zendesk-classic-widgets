$j(function() {
	var mapping = {
			// organization_id: ["field_id_to_remove", ...]
			"27493241": ["22840743"]
		},
		fieldsToHide = mapping[currentUser.organization.id];

	_.each(fieldsToHide, function(field){
		$j('div[data-field-id="'+ field +'"]').remove()
	});	
});
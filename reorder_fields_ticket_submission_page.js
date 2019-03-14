#Web portal
$j('#end-user-form h3:contains("Your email address ")').insertBefore('#end-user-form h3:contains("Telephone ")');
$j('#email_address').insertBefore('#end-user-form h3:contains("Telephone ")');

#Help Centre
$('#new_request.request-form label:contains("Type of issue")').parent().insertBefore('#new_request.request-form label:contains("Subject")');
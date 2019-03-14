if (!flag) {
//field to be removed
$("#ticket_fields_21422908").parent().remove(); 
$("#ticket_subject").val("[FINANCE] - ");  //This will add a prefix "[FINANCE] - " to the ticket subject

$("#ticket_fields_21413096>option[value='4__medium']").attr("selected","selected"); 
$("#ticket_fields_21413096>option[value='']").remove();

}
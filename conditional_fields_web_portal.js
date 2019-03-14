(function() {

//This is where we set the groups of fields that we want to show and hide conditionally:
var tech_prob_pc = [$j('#ticket_fields_22683376'), $j('#ticket_fields_22683376').prev(), '#ticket_fields_22683376'],
prob_tick_pc = [$j('#ticket_fields_22687458'), $j('#ticket_fields_22687458').prev(), '#ticket_fields_22687458', $j('#ticket_fields_22675442'), $j('#ticket_fields_22675442').prev(), '#ticket_fields_22675442'],
tech_prob_kiosk = [$j('#ticket_fields_22675462'), $j('#ticket_fields_22675462').prev()],
prob_tick_kiosk = [$j('#ticket_fields_22675462'), $j('#ticket_fields_22675462').prev(), $j('#ticket_fields_22687458'), $j('#ticket_fields_22687458').prev(), $j('#ticket_fields_22675442'), $j('#ticket_fields_22675442').prev()],
pos_supplier = [$j('#ticket_fields_22740443'), $j('#ticket_fields_22740443').prev()],
pay_bigwinner = [$j('#ticket_fields_22756776'), $j('#ticket_fields_22756776').prev()],
betfirst_reseller = [$j('#ticket_fields_22801138'), $j('#ticket_fields_22801138').prev()]

$j(document).ready(function() {

//this builds a map based on the selection of the dropdown field values 
var ticketCategoryMap = {
  '002': [].concat(betfirst_reseller),
  '015': [].concat(pay_bigwinner),
  '111': [].concat(tech_prob_pc),
  '112': [].concat(prob_tick_pc),
  '121': [].concat(tech_prob_kiosk),
  '122': [].concat(prob_tick_kiosk),
  '132': [].concat(pos_supplier)
  };

//function to hide a array of arrays 
var hide = function() {
    $j.each(arguments, function(i, item) {
      for (y = 0; y < item.length; y++) {
        $j(item[y]).hide();
      }
    });
  };

//function to show a array of arrays
var show = function() {
    if (arguments[0]) {
      $j.each(arguments, function(i, item) {
        for (y = 0; y < item.length; y++) {
          $j(item[y]).show();
        }
      });
    }
  };

var setUpFields = function() {
    var hideAll = function() {
			$j('#end-user-form').find('h3').hide();
			$j('#end-user-form').find('p').hide();
			$j('#ticket_custom_fields').find('label').hide();
			$j('#ticket_custom_fields').find('[id^=ticket_fields_]').hide();
//hide system fields
			$j('#ticket_status_id').hide();
			$j('#ticket_ticket_type_id').hide();
			$j('#ticket_priority_id').hide();
			$j('#ticket_group_id').hide();
			$j('#ticket_assignee_id').hide();
			$j("#ticket_properties label:contains('Status')").hide();
			$j("#ticket_properties label:contains('Priority')").hide();
			$j("#ticket_properties label:contains('Type')").hide();
			$j("#ticket_properties label:contains('Group')").hide();
			$j("#ticket_properties label:contains('Assignee')").hide();
		};
//hide all the fields for fresh start:
    $j.when(hideAll()).then(function() {
      $j('#ticket_fields_22667578').show();
      $j('#ticket_fields_22667578').prev().show();
      show(requiredFields);
    });
  };

var requiredFields = [].concat($j('#email_address'), $j('#email_address').prev(), $j('#ticket_subject'), $j('#ticket_subject').prev(), $j('#comment_value'), $j('#comment_value').prev(), $j('#ticket_fields_22659866'), $j('#ticket_fields_22659866').prev(), $j('#ticket_fields_22653492'), $j('#ticket_fields_22653492').prev(), $j('#ticket_fields_22643783'), $j('#ticket_fields_22643783').prev(), $j('#ticket_fields_22659876'), $j('#ticket_fields_22659876').prev(), $j('#ticket_fields_22657021'), $j('#ticket_fields_22657021').prev(), $j('#ticket_fields_22643793'), $j('#ticket_fields_22643793').prev(), $j('#ticket_fields_22660556'), $j('#ticket_fields_22660556').prev(), $j('#ticket_fields_22660566'), $j('#ticket_fields_22660566').prev(), $j('#ticket_fields_22660576'), $j('#ticket_fields_22660576').prev(), $j('#ticket_fields_22667578'), $j('#ticket_fields_22667578').prev());

setUpFields();

//This is the ticket category field that we are watching:
$j('#ticket_fields_22667578').change(function() {

//s'go!
  var userSelection = $j('#ticket_fields_22667578').val();
  setUpFields();
  if (userSelection.length > 0) {
    show(ticketCategoryMap[userSelection]);
  }
});
});
}());
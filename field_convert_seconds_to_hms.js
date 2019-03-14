var tms = $j("#ticket_fields_22602462").val();

var seconds = tms % 60;
tms = parseInt(tms/60);
var minutes = tms % 60;
var hours = parseInt((tms/60) % 24);

var total = (hours + 'h ' + minutes + ' min(s) ' + seconds + ' sec(s)');

$j("#ticket_fields_22614237").val(total);
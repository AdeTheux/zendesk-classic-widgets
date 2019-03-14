/* Original code from Skip Moore of Zendesk - https://github.com/skipjac/zendesk-widgets */
$j('#ticket_priority_id option[value=1]').text('G3');
$j('#ticket_priority_id option[value=2]').text('G2');
$j('#ticket_priority_id option[value=3]').text('G1');
$j('#ticket_priority_id option[value=4]').text('G0');
/* Added this to display the correct priority name in the Views */
/* Update 16082012 - added the class to avoid breaking your CSS customization */
$j('span.priority_normal').replaceWith('<span class="priority_low">G2</span>');
$j('span.priority_low').replaceWith('<span class="priority_low">G3</span>');
$j('span.priority_high').replaceWith('<span class="priority_high">G1</span>');
$j('span.priority_urgent').replaceWith('<span class="priority_urgent">G0</span>');
/* Update 19082013 - added the changes to the "view your existing request" interface */
$j("#widget_fixed.draggable div.side-box-content p:contains('Low')").replaceWith('NEW NAME');
$j("#widget_fixed.draggable div.side-box-content p:contains('Normal')").replaceWith('NEW NAME');
$j("#widget_fixed.draggable div.side-box-content p:contains('High')").replaceWith('NEW NAME');
$j("#widget_fixed.draggable div.side-box-content p:contains('Urgent')").replaceWith('NEW NAME');
$j("#submit_form div.action p:contains('Please consider this request ')").hide();

if (!window.location.pathname.match("/requests/new")) {
 $j('#submit_form').prepend('<p>I want to <strong>close</strong> this request now. &nbsp;<input name="solved[true]" type="hidden" value="0" /><input id="solved_true" name="solved[true]" type="checkbox" value="1" /></p>');
 var solved_text = "---Please consider this request resolved---";

 $j('#solved_true').live("click", function() {
   if ($j(this).is(':checked')) {
     if ($j('#comment_value').val().match(solved_text) === null){
        $j('#comment_value').val($j('#comment_value').val() + "\n" + solved_text);
    }
   } else {
      $j('#comment_value').val($j('#comment_value').val().replace(solved_text, ''));
   }
 });
}
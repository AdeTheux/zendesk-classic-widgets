/* arnaud at zendesk . com - 25102013 */
$j(document).ready(function(){
  var tags = ["totalstay_sla_reports", "lowcosts_sla_reports"],
      deepContains = function(list, values) {
      var flattened_contains = _.inject(values, function(memo, value) {
        memo.push(_.contains(list, value));
        return memo;
      }, []);

      return _.any(flattened_contains);
    };

  if (deepContains(tags, currentUser.tags)){
  $j('#top-menu #green li.tab_forums').after('<li class="main tab_reporting"><a class="tab" href="https://intuitivesystems.zendesk.com/categories/20129137-Customer-SLA-Reporting">Reporting</a></li>');
    if (window.location.pathname.match("categories/20129137-Customer-SLA-Reporting")) {
      $j("#top-menu #green li").removeClass('active');
      $j("#top-menu #green li.tab_reporting").addClass('active');
    }
  }
 });
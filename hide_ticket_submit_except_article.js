//JS1
if (window.location.pathname.toLowerCase().indexOf("/entries/") >= 0) {
	$j('#contentcolumn').after('<center><h2><a href=\"http://domain.zendesk.com/account/dropboxes/20082250\" onClick=\"script: Zenbox.show(); return false;\">Submit a ticket</a><h3></center><br />')
}
else {
	$j('#contentcolumn').after('')
}
//JS2
</script><script type="text/javascript" src="//assets.zendesk.com/external/zenbox/v2.6/zenbox.js"></script>
<style type="text/css" media="screen, projection">
  @import url(//assets.zendesk.com/external/zenbox/v2.6/zenbox.css);
</style>
<script type="text/javascript">
  if (typeof(Zenbox) !== "undefined") {
    Zenbox.init({
      dropboxID:   "42",
      url:         "https://domain.zendesk.com",
      tabID:       "support",
      tabText:     "Support",
      tabImageURL: "https://assets.zendesk.com/external/zenbox/images/tab_support.png",
      tabColor:    "black",
      tabPosition: "Left",
      hide_tab: "true",
    });}
//CSS1
li.main.clazz.tab_new
{display: none;}
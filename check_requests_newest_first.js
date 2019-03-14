if (document.URL.indexOf("/requests") >= 0)
{
  $j('li.main.tab_organization a').attr('href', '/organization_requests?desc=1&order=created&page=1');
  $j('li.clazz.tab_requests a').attr('href', '/requests?desc=1&order=created&page=1&output_type=table');
}
else if (document.URL.indexOf("/organization_requests") >= 0)
{
  $j('li.tab_organization a').attr('href', '/organization_requests?desc=1&order=created&page=1');
  $j('li.main.clazz.tab_requests a').attr('href', '/requests?desc=1&order=created&page=1&output_type=table');
}
else 
{
  $j('li.main.tab_organization a').attr('href', '/organization_requests?desc=1&order=created&page=1');
  $j('li.main.clazz.tab_requests a').attr('href', '/requests?desc=1&order=created&page=1&output_type=table');
}
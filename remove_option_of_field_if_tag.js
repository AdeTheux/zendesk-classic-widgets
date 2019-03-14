jQuery(function($) {
//Fetch user data
	var USER_URL = $("a#top-right-name").attr("href");
	var PARSED_XML = null;
	var DOC_LOADED = false;
	var XMLDATA = {};

	function parseXml(xml) {
		if (DOC_LOADED) {
			processXML(xml);
			} else {
				PARSED_XML = xml;
				}
				}

	function processXML(xml) {
		var self = $(this);
		var tag;
		var flag = false;

	$(xml).find("tag").each(function() {
//Find name of user's tag
		tag=$(this).find("tag")[0].textContent;
		if (tag=="vip") {flag=false;};
//Name of impacted tag
		});
		if (!flag) {
//Field to be removed
			$("#ticket_fields_22626087 option[value=pvip]").remove();
			}
		}
	function showError(XMLHttpRequest, textStatus, errorThrown) {
	}

$.ajax({
type: "GET",
url: USER_URL,
dataType: "xml",
success: parseXml,
error: showError
});

	if (PARSED_XML) {
		processXML(PARSED_XML);
		delete PARSED_XML;
		} else {
			DOC_LOADED = true;
			}
			})
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
		var group;
		var flag = false;

	$(xml).find("group").each(function() {
//Find name of user's group
		group=$(this).find("name")[0].textContent;
		if (group=="1st Line Support") {flag=true;};
//Name of impacted group
		});
		if (!flag) {
//Field to be removed
			$("#ticket_fields_20052131").parent().remove();
			}
		}
//The magic
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
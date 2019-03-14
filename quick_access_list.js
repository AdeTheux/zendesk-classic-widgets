jQuery(document).ready(function($)  {

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

        //var self = $(this);
		var groupname;
		var support = false;
		var ops = false;
		var dev = false;
				
        $(xml).find("group").each(function() {
            if (document.all) { // IE; 
                groupname=jQuery(this).find("name")[0].text;
				if (groupname=="1st Line Support") {support=true;};
				if (groupname=="Operations") {ops=true;};
				if (groupname=="Development") {dev=true;};
				} 
           else {
				groupname=jQuery(this).find("name")[0].textContent;
				if (groupname=="1st Line Support") {support=true;};
				if (groupname=="Operations") {ops=true;};
				if (groupname=="Development") {dev=true;};
            };
            //  alert(groupname);		
		});				
		//alert(flag);
		if (support || ops || dev) {
			$('div#dashboard').after("<div id=\"qucikAccess_c\"><div class=\"content content_grey\"><h2>Quick Access</h2><ul id=\"quickAccessLists_c\"></ul><ul id=\"quickAccessActions_c\"></ul><div class=\"grey_box_bottom\"><div class=\"box box_bottom\"></div></div></div><div class=\"box_bottom_clear\"></div>");
		}
		
		if (support) {		
			if (window.location.pathname == '/home') {			
			$('ul#quickAccessLists_c').append("<li><a href=\"/rules/xxx\">List All New Tickets</a></li>");									
			$('ul#quickAccessActions_c').append("<li><a href=\"/users/new\">Create New User</a></li>");			
			};
		}
		if (ops) {		
			if (window.location.pathname == '/home') {			
			$('ul#quickAccessLists_c').append("<li><a href=\"/rules/xxx\">Ops request</a></li>");									
			};
		}
		if (dev) {		
			if (window.location.pathname == '/home') {			
			$('ul#quickAccessLists_c').append("<li><a href=\"/rules/YYYY\">Development required</a></li>");									
			};
		}		
	}

    function showError(XMLHttpRequest, textStatus, errorThrown) {
        //alert(XMLHttpRequest + "--" + textStatus + "--" + errorThrown);
    }
	
	$.ajax({
		type: "GET",
		url: USER_URL,
		dataType: "xml",
		success: parseXml,
                complete: function( xhr, status )
                    {
                      //alert( "COMPLETE.  You got:\n\n" + xhr.responseText ) ;
                     //alert(status);
                     },
	         error: showError
   });


    if (PARSED_XML) {
        processXML(PARSED_XML);
        delete PARSED_XML;
    } else {
        DOC_LOADED = true;
    }

})
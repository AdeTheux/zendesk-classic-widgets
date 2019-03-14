//LowCost
$j(document).ready(function(){
  if (currentUser.organization.id == 27493221) {
      var values = ["adriatica_admin", 
                          "adriatica_website",
                          "click2book_admin", 
                          "click2book_website",
                          "ibiza_rocks_admin", 
                          "ibiza_rocks_website",
                          "jewel_in_the_crown_admin",
                          "jewel_in_the_crown_website",
                          "odegam_admin",
                          "odegam_website",
                          "ionian_admin",
                          "webjet_admin",
                          "webjet_website",
                          "totalstay_admin",
                          "getabed_admin",
                          "bookabed_admin",
                          "ewaterways_admin",
						  "aot_admin",
                          "go_international_admin",
                          "holidays_discount_centre_admin",
                          "hotels4u_admin",
                          "kenwood_travel_admin"
                          ];
  var selection = _.reduce(values, function(memo, value){
    memo.push('li[data-value="'+value+'"]');
    return memo;
  }, []).join(',');

  $j(selection).remove();
  $j('ul.sd').each(function(){ $j(this).html($j(this).html().trim()) });//Consuela, clean that mess!
  $j('ul.sd:empty').remove();
  $j("#drop-list-tagger-23214638 li.sub:contains('Adriatica')").remove();//Remove the remaining Organisation items
  $j("#drop-list-tagger-23214638 li.sub:contains('Click2Book')").remove();//Remove the remaining Organisation items
  $j("#drop-list-tagger-23214638 li.sub:contains('Ibiza Rocks')").remove();//Remove the remaining Organisation items
  $j("#drop-list-tagger-23214638 li.sub:contains('Jewel In The Crown')").remove();//Remove the remaining Organisation items
  $j("#drop-list-tagger-23214638 li.sub:contains('Odegam')").remove();//Remove the remaining Organisation items
  $j("#drop-list-tagger-23214638 li.sub:contains('Webjet')").remove();//Remove the remaining Organisation items
  }
});
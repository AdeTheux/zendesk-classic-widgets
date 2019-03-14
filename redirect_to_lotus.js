$j(document).ready(function() {

  "use strict";

  function currentUserHasTag(tagLookup) {
    if ($j.inArray(tagLookup, currentUser.tags) === -1 && currentUser.isAgent) {
      return false;
    } else {
      return true;
    }
  }

  var taggedLotus = currentUserHasTag("redirect_to_lotus"),
      winLocation = window.location.pathname.toLowerCase();

  if (taggedLotus) {

    if (winLocation.indexOf("/home") >= 0){
      window.location = "/agent/#/";
    }

    if (winLocation.indexOf("/tickets/") >= 0){
      window.location = "/agent/#/tickets/"+ticket_id;
    }

  }

});
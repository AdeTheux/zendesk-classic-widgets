var original_url = $.inArray(document.referrer.split('/')[2], ["arnaud.detheux.org", "yyy.co.uk"]);
  
  if(original_url >= -1) {
      window.location.href = "";
  }
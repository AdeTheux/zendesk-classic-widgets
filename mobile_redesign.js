(function(){
    $j('head').append('<meta name="viewport" content="width=device-width, initial-scale=0.75">');

    $j(document).ready(function() {

         if (screen.width < 501 || navigator.userAgent.toLowerCase().indexOf('android')!=-1){
             $j("#top-right").find("a:contains(mobile)").hide();
             $j('input').css({'width': '60%', 'margin': '0 auto'});
    //         $j('input#query').hide();
         }
     });
}());
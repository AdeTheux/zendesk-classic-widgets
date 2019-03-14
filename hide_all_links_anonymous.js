Event.observe(window, 'load', function() {
    if (currentUser.isAnonymous){ 
        if (!currentAccount.isOpen){
            document.getElementById('green').style.visibility="hidden";
        }
    }
});
Event.observe(window, 'load', function() {
    if (currentUser.isAnonymous){ 
        if (!currentAccount.isOpen){
            document.getElementById('top-right').style.visibility="hidden";
        }
    }
});
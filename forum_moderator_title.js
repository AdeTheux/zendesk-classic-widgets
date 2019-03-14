$j(document).ready(function () {
    var org_names = {
        'Community Moderator': ["Arnaud de Theux", "42"]
    }, needle = "";
    jQuery('.name').each(function (index) {
        $this = jQuery(this);
        jQuery.each(org_names, function (key, value) {
            needle = $this[0].outerHTML;
            if (currentUser.role === 0) {
                if (needle.search('<br>') !== -1) {
                    needle = needle.split('<br>');
                    needle = needle[0].split('>');
                    needle = needle[1];
                } else {
                    needle = $j(needle).text();
                }
                needle = needle.replace('\n', '');
                if (value.indexOf(jQuery.trim(needle)) >= 0) {
                    $j($this[0]).parent().children().last().append('<div class="gray-text-compact">' + key + '</div>');
                }
            } else {
                needle = jQuery(needle).children('a').text();
                if (value.indexOf(jQuery.trim(needle)) >= 0) {
                    $this.append('<div class="gray-text-compact">' + key + '</div>');
                }
            }
        });
    });
});
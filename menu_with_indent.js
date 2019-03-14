CSS
#top-menu #green .tab_forums
{display: none;}

JS
Event.observe(window, 'load', function() {
$j('#green li:first').after('<li class="main clazz"><a href="https://kmb.zendesk.com/forums" class="tab">Product Support</a><ul class="menu-drop"><li><a href="https://kmb.zendesk.com/categories/20093936-Product-info">Electronic products</a></li><li><a href="https://kmb.zendesk.com/categories/20093378-Tablet-forum">Android products</li><li><a href="https://kmb.zendesk.com/categories/20097277-Karaoke-forum">Other products</li></ul></li>');
});
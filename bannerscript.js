var quick_menu = $('#quick');
var quick_top = 470;

quick_menu.css('top', $(window).height() );
$(document).ready(function(){
quick_menu.animate( { "top": $(document).scrollTop() + quick_top +"px" }, 200 ); 
$(window).scroll(function(){
quick_menu.stop();
quick_menu.animate( { "top": $(document).scrollTop() + quick_top + "px" }, 500 );
});
});
/**
 * Created with JetBrains RubyMine.
 * User: Alina
 * Date: 8/19/13
 * Time: 5:03 PM
 * To change this template use File | Settings | File Templates.
 */

$('a').click(function(){
  $('html, body').animate({
    scrollTop: $( $(this).attr('href') ).offset().top
  }, 1000);
  return false;
});
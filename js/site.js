$(document).ready(function(){
  $('.global-header').on('click', 'a.js-toggle-mobile-navigation', function(e) {
    console.log('TOGGLE')
    e.preventDefault();
    $('body').toggleClass('mobile-navigation-is-active');
  });
});

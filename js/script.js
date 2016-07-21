$(document).ready(function() {
  function setHeight() {
    windowHeight = $(window).innerHeight();
    $('.border').css("margin-top', windowHeight);
  };
  setHeight();
  
  $(window).resize(function() {
    setHeight();
  });
});
$(document).ready(function(){
  var open = "c";
  $("#headerbar").prepend('<button type="button" id="hbb">≡</button>');
  $("#hbb").click(function(){
    if (open == "c") {
      $(".res").slideDown();
      $("#hbb").text("×");
      open = "o"
    } else {
      $(".res").slideUp();
      $("#hbb").text("≡");
      open = "c"
    }
  });
});

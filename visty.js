//visty is a ViktoriaInformatin style library by Captainpast
$(document).ready(function(){
  var open = "c";
  console.log("this site uses Visty a library by Captainpast");
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

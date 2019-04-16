$(document).ready(function () {
  // console.log("Ready!");
  const countMax = Number($(".counter").text());
  $(".new-tweet textarea").on("input", function(event) {
    const display = countMax - this.textLength;
    $(".counter", $(this).parent()).text(display);
    if (display < 0) {
      $(".counter", $(this).parent()).css("color","red");
    }
  });
    //console.log('whatever', 
  });
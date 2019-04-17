$(document).ready(function () {
  const countMax = Number($(".counter").text());

  $(".new-tweet textarea").on("input", function(event) {
    const display = countMax - this.textLength;
    
    $(".counter", $(this).parent()).text(display);

    if (display < 0) {
      $(".counter", $(this).parent()).addClass('limit');
    } else {
      $(".counter", $(this).parent()).removeClass('limit');
    }
  });
});
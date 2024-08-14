$(document).ready(function () {
  var $imgHolderImg = $("#imgHolder img");

  $(".button").on("click", function () {
    var $imgPath = $(this).attr("data-image-path");

    $imgHolderImg.fadeOut(200, function () {
      $imgHolderImg.attr("src", $imgPath).fadeIn(200);
    });
  });
});

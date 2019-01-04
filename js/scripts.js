$(document).ready(function() {
  $("#mycarousel").carousel({ interval: 2000 });
  $("#carousel-pause").click(function() {
    $("#mycarousel").carousel("pause");
  });
  $("#carouselButton").click(function() {
    if (
      $("#carouselButton")
        .children("span")
        .hasClass("fa-pause")
    ) {
      $("#carouselButton")
        .children("span")
        .addClass("fa-play")
        .removeClass("fa-pause");
      $("#mycarousel").carousel("pause");
    } else {
      $("#carouselButton")
        .children("span")
        .addClass("fa-pause")
        .removeClass("fa-play");
      $("#mycarousel").carousel("cycle");
    }
  });

  //Clicking a button trigers showing of a certain modal
  $("#reserveButton").click(function() {
    $("#reserveTable").modal();
  });
  $("#loginButton").click(function() {
    $("#loginModal").modal();
  });
});

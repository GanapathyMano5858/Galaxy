$(document).ready(function () {
  $("#searchInput").on("keyup", function () {
    let filter = $(this).val().toLowerCase();
    let dishes = $(".menuList");
    let anyDishVisible = false;

    dishes.each(function () {
      let dishName = $(this).find(".dishName").text().toLowerCase();
      if (dishName.includes(filter)) {
        $(this).parent().show();
        anyDishVisible = true;
      } else {
        $(this).parent().hide();
      }
    });

    if (filter) {
      $("#popularCuisines").hide();
      $(".dishTitle").hide();
    } else {
      $("#popularCuisines").show();
      $(".dishTitle").show();
    }
  });
});

$(document).ready(function () {
  $("#searchInput").on("input", function () {
    let inputVal = $(this).val().trim();

    if (inputVal) {
      $("#popularCuisines").hide();
      $(".dishTitle").hide();
    } else {
      $("#popularCuisines").show();
      $(".dishTitle").show();
    }
  });
});

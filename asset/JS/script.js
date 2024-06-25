$(document).ready(function () {
  let currentFilter = 'all';

  // Click event for items
  $(".items").on("click", function () {
    // Remove titleActive class from all items
    $(".items .cuisinesName").removeClass("titleActive");
    // Add titleActive class to the clicked item
    $(this).find(".cuisinesName").addClass("titleActive");
    
    let cuisine = $(this).find(".cuisinesName").text().trim();
    $("#searchInput").val(cuisine);
    $("#searchInput").keyup();
  });

  // Keyup event for the search input
  $("#searchInput").on("keyup", function () {
    filterDishes();
  });

  function filterDishes() {
    let filter = $("#searchInput").val().toLowerCase();
    let dishes = $(".menuList");

    dishes.each(function () {
      let dishName = $(this).find(".dishName").text().toLowerCase();
      let isVeg = $(this).find('img[alt="veg"]').length > 0;
      let isNonVeg = $(this).find('img[alt="nonVeg"]').length > 0;
      let matchesSearch = dishName.includes(filter);
      let matchesFilter = (currentFilter === 'all') ||
                          (currentFilter === 'veg' && isVeg) ||
                          (currentFilter === 'nonVeg' && isNonVeg);

      if (matchesSearch && matchesFilter) {
        $(this).closest('.col-12').show();
      } else {
        $(this).closest('.col-12').hide();
      }
    });

    toggleDishTitle();
  }

  function setActiveButton(btnId) {
    $(".filterBtn").removeClass("btnActive");
    $(btnId).addClass("btnActive");
  }

  function toggleDishTitle() {
    $(".dishTitle").each(function () {
      let section = $(this).next(".row");
      if (section.find(".col-12:visible").length === 0) {
        $(this).hide();
      } else {
        $(this).show();
      }
    });
  }

  $("#vegBtn").on("click", function () {
    setActiveButton("#vegBtn");
    currentFilter = 'veg';
    filterDishes();
  });

  $("#nonVegBtn").on("click", function () {
    setActiveButton("#nonVegBtn");
    currentFilter = 'nonVeg';
    filterDishes();
  });

  $("#allBtn").on("click", function () {
    setActiveButton("#allBtn");
    currentFilter = 'all';
    filterDishes();
  });

  // Initial call to set the correct state on page load
  toggleDishTitle();
});

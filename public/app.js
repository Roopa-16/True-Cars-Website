function displayResults(TestSet) {
  $("tbody").empty();

  TestSet.forEach(function(trueCars) {
    var tr = $("<tr>").append(
      $("<td>").text(trueCars.Price),
      $("<td>").text(trueCars.Year),
      $("<td>").text(trueCars.Mileage),
      $("<td>").text(trueCars.Make),
      $("<td>").text(trueCars.Model)
    );

    $("tbody").append(tr);
  });
}

function setActive(selector) {
  $("th").removeClass("active");
  $(selector).addClass("active");
}

$.getJSON("/all", function(data) {
  displayResults(data);
});

$("#mileage-sort").on("click", function() {
  setActive("#trueCars-Mileage");
  $.getJSON("/Mileage", function(data) {
    displayResults(data);
  });
});

$("#make-sort").on("click", function() {
  setActive("#trueCars-Make");
  $.getJSON("/Make", function(data) {
    displayResults(data);
  });
});

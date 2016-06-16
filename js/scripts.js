$(document).ready(function() {
  $("form#groceries").submit(function(event) {
  var item1 = $("input#item1").val()
  var item2 = $("input#item2").val()
  var item3 = $("input#item3").val()
  var item4 = $("input#item4").val()
  var item5 = $("input#item5").val()

  var items = [item1, item2, item3, item4, item5];
  items.sort();

  var upperItems = items.map(function(item) {
  return item.toUpperCase();
  });

  ("ul#shoppingcart").show();
  (".first").text(UpperItem[0]);
  (".second").text(UpperItem[1]);
  (".third").text(UpperItem[2]);
  (".fourth").text(UpperItem[3]);
  (".fifth").text(UpperItem[4]);

  $("#groceries").hide();

event.preventDefault();
});
});

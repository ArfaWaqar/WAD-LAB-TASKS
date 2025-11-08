var items = document.querySelectorAll("li");

items.forEach(function(item) {
  item.innerText = item.innerText.toUpperCase();
});

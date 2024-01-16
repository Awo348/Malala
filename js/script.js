var popLink = document.querySelector(".show_btn");
popLink.addEventListener("click", function () {
  document.querySelector(".backdrop").style.display = "flex";
  // document.querySelector(".form_holder").style.display = "none";
});

var popClose = document.querySelector(".x_btn");
popClose.addEventListener("click", function () {
  document.querySelector(".backdrop").style.display = "none";
  // document.querySelector(".form_holder").style.display = "none";
});

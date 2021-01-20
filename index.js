document.querySelector(".menu").addEventListener("click", function () {
  document.querySelector("#nav-list").classList.add("nav-list-active");
});
document.body.addEventListener("click", function (event) {
  if (event.target.tagName === "UL") {
    document.querySelector("#nav-list").classList.remove("nav-list-active");
  }
});
for (let i = 0; i < document.querySelectorAll(".nav-link").length; i++) {
  document
    .querySelectorAll(".nav-link")
    [i].addEventListener("click", function () {
      document.querySelector("#nav-list").classList.remove("nav-list-active");
    });
}

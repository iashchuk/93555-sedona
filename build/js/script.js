var button = document.querySelector(".search__link");
var form = document.querySelector(".hotel-search");
button.addEventListener("click", function (evt) {
    evt.preventDefault();
    form.classList.toggle("hotel-search__show");
});

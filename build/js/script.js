var button = document.querySelector(".search__link");
var form = document.querySelector(".hotel-search");
var entry = form.querySelector("#arrival");
var departure = form.querySelector("#departure");
var adults = form.querySelector("#adults");
var children = form.querySelector("#children");

var isStorageSupport = true;
var storageAdults = "";
var storageChildren = "";

try {
    storageAdults = localStorage.getItem("adults");
    storageChildren = localStorage.getItem("children");
} catch (err) {
    isStorageSupport = false;
}

form.classList.add("hotel-search__hide");

button.addEventListener("click", function(evt) {
    evt.preventDefault();
    form.classList.toggle("hotel-search__show");
    form.classList.remove("hotel-search__error");

    if (storageAdults) {
        adults.value = storageAdults;
    }
    if (storageChildren) {
        children.value = storageChildren;
    }
});

form.addEventListener("submit", function(evt) {
    if (!entry.value || !departure.value || !adults.value || !children.value) {
        evt.preventDefault();
        form.classList.remove("hotel-search__error");
        form.offsetWidth = form.offsetWidth;
        form.classList.add("hotel-search__error");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("adults", adults.value);
            localStorage.setItem("children", children.value);
        }
    }
});

window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (form.classList.contains("hotel-search__show")) {
            form.classList.remove("hotel-search__show");
            form.classList.remove("hotel-search__error");
        }
    }
});

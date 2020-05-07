"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var params = new URLSearchParams(document.location.search);
  var categoryName = params.get('category');
  console.log(categoryName);
  var manufacturerList = params.get('manufacturer');
  var mainElement = document.querySelector(".main__shop");
  var path = window.location.pathname.replace(/\//g, '');
  var spin = document.querySelector(".spin");
  var scroll = document.querySelector(".bodyScroll");
  document.querySelector(".main__url").textContent = "Home / ".concat(document.location.pathname.replace(/\//g, ''), " ");
  document.querySelector(".form__title").textContent = categoryName;
  fetch("https://hifi-corner.herokuapp.com/api/v1/products?category=".concat(categoryName)).then(function (respons) {
    return respons.json();
  }).then(function (resultat) {
    setTimeout(function () {
      spin.removeChild(document.querySelector(".spinner"));
      spin.remove();
      scroll.classList.remove("bodyScroll");
    }, 1300);
    resultat.forEach(function (produkt) {
      document.querySelector(".items__totalItems").textContent = resultat.length;
      var clone = mainElement.content.cloneNode(true);
      clone.querySelector(".card__info-link").href = "/".concat(path.slice(0, -1), "/?sku=").concat(produkt.sku);
      clone.querySelector(".figure__img").src = produkt.images;
      clone.querySelector(".products__title").innerText = produkt.make + " " + produkt.model;
      clone.querySelector(".products__subtitle").innerText = "£" + produkt.price;
      mainElement.appendChild(clone);
    });
  });
  getAllCategories();

  function getAllCategories() {
    fetch("https://hifi-corner.herokuapp.com/api/v1/categories", {
      "method": "GET"
    }).then(function (response) {
      return console.log(response.json());
    })["catch"](function (err) {
      return console.error(err);
    });
  }

  fetch("https://hifi-corner.herokuapp.com/api/v1/brands").then(function (respons) {
    return respons.json();
  }).then(function (resultat) {
    resultat.forEach(function (produkt) {
      document.querySelector(".shopby__container2").innerHTML += " <p class=\"main__links2\">".concat(produkt.name, "(<span class=\"links2__counter\"></span>)</p>");
      document.querySelector(".categories3__unorderedlist3").innerHTML += "\n                <li class=\"unorderedlist3__list\"><a class=\"unorderedlist3__anker\" href=\"?make=".concat(produkt.name, "\">").concat(produkt.name, "</a></li>\n                ");
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  Promise.all([fetch("https://hifi-corner.herokuapp.com/api/v1/categories").then(function (respons) {
    return respons.json();
  }), fetch("https://hifi-corner.herokuapp.com/api/v1/brands").then(function (respons) {
    return respons.json();
  })]).then(function (allResponses) {
    var response1 = allResponses[0];
    response1.forEach(function (produkt) {
      console.log(produkt);
      document.querySelector(".shop").innerHTML += "\n            \n            <div class=\"shop__block-inner\">\n            <h1 class=\"block-inner__title\"><a class=\"title__anker\" href=\"/products?category=".concat(produkt, "\">").concat(produkt, "</a></h1>\n            </div>\n            </div>\n            ");
    });
  });
});
fetch("./data/data.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    appendData(data);
  })
  .catch(function (err) {
    console.log("error: " + err);
  });

let htmlCode = ``;

function appendData(data) {
  data.cakes.forEach((cake) => {
    htmlCode =
      htmlCode +
      `<div class="menu__card" id="${cake.id}">
      <img src="${cake.image}" alt="${cake.title}">
      <h4>${cake.title}</h4>
      <p class="card__desc">${cake.previewDescription}</p>
      <div class="price">
      <p>${"₹" + cake.price[0] + "/-"}</p>
      <button class="btn">Place Order</button>
      </div>
      </div>`;
  });
  console.log("jsonData", data);

  const cakeCards = document.querySelector(".card__cont");
  cakeCards.innerHTML = htmlCode;
}
// window.onload = appendData;

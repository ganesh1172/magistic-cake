function postData(params) {
  let tempParams = {
    from_name: document.getElementById("fromName").value,
    to_name: document.getElementById("toName").value,
    message: document.getElementById("msg").value,
    // number: document.getElementById("number").value,
    // date: document.getElementById("date").value,
    // time: document.getElementById("time").value,
    // type: document.getElementById("type").value,
    // quantity: document.getElementById("quantity").value,
  };

  emailjs
    .send("service_h0mrvea", "template_5lbsoz4", tempParams)
    .then(function (res) {
      console.log("success", res.status);
    });
}

/* Fetch static data */
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

  const cakeCards = document.querySelector(".card__cont");
  cakeCards.innerHTML = htmlCode;
}

//* window onScroll navbar shrink */
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  const header = document.getElementById("header");
  if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
    header.classList.add("header__shrink");
  } else {
    header.classList.remove("header__shrink");
  }
}

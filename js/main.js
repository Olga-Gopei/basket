const products = [
  {
    id: 1,
    title: 'Киндерболл',
    weight: 180,
    price: 111,
    pathImg: 'img/foto/1.jpeg',
  },
  {
    id: 2,
    title: 'Ириска',
    weight: 200,
    price: 500,
    pathImg: 'img/foto/2.jpeg',
  },
  {
    id: 3,
    title: 'Линдерболл',
    weight: 150,
    price: 355,
    pathImg: 'img/foto/3.jpeg',
  },
  {
    id: 4,
    title: 'Коллболл',
    weight: 180,
    price: 200,
    pathImg: 'img/foto/4.jpeg',
  }
];

const createElement = (elem, className, innerHTML) => {
  const tag = document.createElement(elem);
  if (className) {
    tag.className = className;
  }

  if (innerHTML) {
    tag.innerHTML = innerHTML;
  }

  return tag;
}

const rednerCard = (product) => {
  const wrapCard = createElement('div', 'cotainer');

  const img = createElement('img', 'imeges');
  img.src = product.pathImg;
  img.alt = product.title;
  wrapCard.appendChild(img);

  const wrapContent = createElement('div', 'box')
  wrapCard.appendChild(wrapContent);

  const title = createElement('h2', '', product.title);
  wrapContent.appendChild(title);

  const weight = createElement('p', '', product.weight);
  wrapContent.appendChild(weight);

  const price = createElement('p', '', product.price + ' грн');
  wrapContent.appendChild(price);

  const addToBasketBtn = createElement('button', '', 'Добавить в корзину');
  wrapContent.appendChild(addToBasketBtn);
  addToBasketBtn.onclick = function () {
    Basket.setProduct(product.id)
  }

  return wrapCard;
}

const wrapper = document.getElementById('wrapper');

products.map((product) => {
  const result = rednerCard(product);

  wrapper.appendChild(result);
});

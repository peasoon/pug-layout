export type CardData = {
  name: string;
  category: string;
  description: string;
  price: number;
};

const renderCard = (el:CardData) => {
  return `
    <div class="products__card card"> 
      <div class="card__title">${el.name} </div>
      <div class="card__image"></div>
      <div class="card__category">${el.category}</div>
      <div class="card__description">${el.description}</div>
      <div class="card__price">${el.price}</div>
      <button class="card__like"><svg><use xlink:href='./../../images/heart.svg#heart'></use></svg></button>
      <button class="card__buy"><svg><use xlink:href='./../../images/plus.svg#plus'></use></svg></button>
    </div>`;
};

export const renderProducts = (selector: string, data: CardData[]) => {
  const parent = document.querySelector<HTMLDivElement>(selector);
  parent!.innerHTML = data
    .map((el:CardData) => renderCard(el))
    .join("");
};

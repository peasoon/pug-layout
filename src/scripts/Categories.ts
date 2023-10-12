import { CardData } from "./products";

const renderCategoryItem = (name: string) => {
  return `
    <div class="fcategory__item fc-item">
      <label> <input type="checkbox" /><span> ${name} </span> </label>
    </div>
  `;
};

export const renderCategories = (
  selector: string,
  data: string[],
  render: Function,
  cardData: CardData[]
) => {
  const parent = document.querySelector(selector);
  parent!.innerHTML = 'Categories '+data.map((el) => renderCategoryItem(el)).join("");

  const categories = parent?.querySelectorAll<HTMLInputElement>("input");
  const selectedCategories = () => {
    return Array.from(categories!)
      .filter((el) => el.checked === true)
      .map((el) => el.nextElementSibling?.textContent?.trim());
  };

  categories?.forEach((item) => {
    item.addEventListener("change", () => {
      const selected = selectedCategories();
      const newData = cardData.filter((el) => {
        return selected.includes(el.category);
      });
      render(".products", newData.length === 0 ? cardData : newData);
    });
  });
};

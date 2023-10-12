"use strict";

import { Accordion } from "./scripts/Accordion";
import { AnimationOnScroll } from "./scripts/AnimatonOnScroll";
import { renderCategories } from "./scripts/Categories";
import { Hamburger } from "./scripts/Hamburger";
import { RangeSlider } from "./scripts/RangeSlider";
import { Scroller } from "./scripts/Scroller";
import { Tabs } from "./scripts/Tabs";
import { CardData, renderProducts } from "./scripts/products";
import ymaps from "ymaps";

const menu = document.querySelector<HTMLDivElement>("#menu");

const data: CardData[] = [
  {
    name: "product 1",
    category: "ctg 1",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    price: 1324,
  },
  {
    name: "product 2",
    category: "ctg 2",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    price: 4532,
  },
  {
    name: "product 3",
    category: "ctg 1",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    price: 2546,
  },
  {
    name: "product 4",
    category: "ctg 3",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    price: 980,
  },
  {
    name: "product 5",
    category: "ctg 2",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    price: 5423,
  },
  {
    name: "product 6",
    category: "ctg 1",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    price: 1476,
  },
  {
    name: "product 7",
    category: "ctg 3",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    price: 3246,
  },
  {
    name: "product 8",
    category: "ctg 3",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    price: 4274,
  },
];

menu?.addEventListener("click", () => {
  menu.classList.toggle("opened");
});

const slider1 = new RangeSlider(
  ".range",
  Math.min(...data.map((el) => el.price)),
  Math.max(...data.map((el) => el.price)),
  renderProducts,
  data
);

renderProducts(".products", data);
renderCategories(
  ".fcategory",
  [...new Set(data.map((el) => el.category))],
  renderProducts,
  slider1.currentData
);

const tabs = new Tabs(".tabs");

const scroller = new Scroller(".a-scroll");

ymaps
  .load("https://api-maps.yandex.ru/2.1/?lang=ru-RU")
  .then((maps: any) => {
    var myPlacemark = new maps.GeoObject({
      geometry: {
        type: "Point",
        coordinates: [59.91089687323155, 30.35985117895245],
      },
    });
    const map = new maps.Map("map", {
      center: [59.926989308177276, 30.332825655526694],
      zoom: 12,
    });
    map.geoObjects.add(myPlacemark);
  })
  .catch((error: any) => console.log("Failed to load Yandex Maps", error));

  const accordion = new Accordion('.accordion')
  const animation1 = new AnimationOnScroll('#animation')
  const Hamburger1 = new Hamburger('.hamburger')

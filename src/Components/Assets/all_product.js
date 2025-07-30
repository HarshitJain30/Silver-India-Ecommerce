import p1 from "./p1.png";
import p2 from "./p2.png";
import p3 from "./p3.png";
import p4 from "./p5.png";
import p5 from "./p6.png";
import p6 from "./p7.png";
import p7 from "./p8.png";
import p8 from "./p12.png";
import p9 from "./p13.png";
import p10 from "./p14.png";
import p11 from "./p15.png";
import p12 from "./p18.png";
import p13 from "./p19.png";
import p14 from "./p20.png";
import p15 from "./p21.png";
import p16 from "./p22.png";
import p17 from "./p23.png";
import p18 from "./p24.png";
import p19 from "./p25.png";
import p20 from "./p26.png";
import p21 from "./p27.png";
import p22 from "./p28.png";
import p23 from "./p29.png";
import p24 from "./p30.png";
import p25 from "./p31.png";
import p26 from "./p32.png";
import p27 from "./p33.png";
import p28 from "./p34.png";
import p29 from "./p35.png";
import p30 from "./p36.png";
import p31 from "./p37.png";
import p32 from "./p38.png";
import p33 from "./p39.png";
import p34 from "./p40.png";
import p35 from "./p41.png";
import p36 from "./p42.png";

let all_product = [
  {
    id: 1,
    name: "Silver Rectangle Stone Ring",
    category: "men",
    image: p1,
    new_price: 999,
    old_price: 1999,
  },
  {
    id: 2,
    name: "Silver Snake Chain Bracelet",
    category: "men",
    image: p2,
    new_price: 1999,
    old_price: 2199,
  },
  {
    id: 3,
    name: "Tibetan Turquoise Ring",
    category: "men",
    image: p3,
    new_price: 2999,
    old_price: 3499,
  },
  {
    id: 4,
    name: "Obsidian Buddha Pendant",
    category: "men",
    image: p4,
    new_price: 1099,
    old_price: 1999,
  },
  {
    id: 5,
    name: "Sterling Silver Om Pendant",
    category: "men",
    image: p5,
    new_price: 899,
    old_price: 1199,
  },
  {
    id: 6,
    name: "Silver Argent Bracelet",
    category: "men",
    image: p6,
    new_price: 1899,
    old_price: 2499,
  },
  {
    id: 7,
    name: "Antique Temple Silver Bracelet",
    category: "men",
    image: p7,
    new_price: 3999,
    old_price: 4699,
  },
  {
    id: 8,
    name: "Labdorite Silver Ring",
    category: "men",
    image: p8,
    new_price: 1499,
    old_price: 2199,
  },
  {
    id: 9,
    name: "Lapiz Turquoise Silver Bracelet",
    category: "men",
    image: p9,
    new_price: 3199,
    old_price: 3999,
  },
  {
    id: 10,
    name: "Handmade Hindu God Pendant",
    category: "men",
    image: p10,
    new_price: 999,
    old_price: 1199,
  },
  {
    id: 11,
    name: "Plata Argenta Bracelet",
    category: "men",
    image: p11,
    new_price: 1999,
    old_price: 2599,
  },
  {
    id: 12,
    name: "Halloween Cut Stone Silver Ring",
    category: "women",
    image: p12,
    new_price: 1099,
    old_price: 1799,
  },
  {
    id: 13,
    name: "Amber Silver Earrings",
    category: "women",
    image: p13,
    new_price: 1499,
    old_price: 1699,
  },
  {
    id: 14,
    name: "Peacock Style Silver Earrings",
    category: "women",
    image: p14,
    new_price: 2499,
    old_price: 2999,
  },
  {
    id: 15,
    name: "Rough Stone Silver Bracelet",
    category: "women",
    image: p15,
    new_price: 4999,
    old_price: 4699,
  },
  {
    id: 16,
    name: "Ruby, Emerald & Black Sapphire Pendant",
    category: "women",
    image: p16,
    new_price: 2299,
    old_price: 2799,
  },
  {
    id: 17,
    name: "Amethyst Casting Silver Ring",
    category: "women",
    image: p17,
    new_price: 1099,
    old_price: 1499,
  },
  {
    id: 18,
    name: "Handmade Tourmaline Necklace",
    category: "women",
    image: p18,
    new_price: 12999,
    old_price: 14999,
  },
  {
    id: 19,
    name: "Rose Quartz Earrings and Ring Set",
    category: "women",
    image: p19,
    new_price: 2999,
    old_price: 3599,
  },
  {
    id: 20,
    name: "Sterling Silver Anklet",
    category: "women",
    image: p20,
    new_price: 1499,
    old_price: 1999,
  },
  {
    id: 21,
    name: "Coral Turquoise Ethnic Necklace",
    category: "women",
    image: p21,
    new_price: 5999,
    old_price: 6499,
  },
  {
    id: 22,
    name: "Natural Stones Silver Belt",
    category: "women",
    image: p22,
    new_price: 9999,
    old_price: 10499,
  },
  {
    id: 23,
    name: "Mughal Style Antique Armlet",
    category: "collectable",
    image: p23,
    new_price: 7099,
    old_price: 7799,
  },
  {
    id: 24,
    name: "Nepali Stone Bird",
    category: "collectable",
    image: p24,
    new_price: 2099,
    old_price: 2999,
  },
  {
    id: 25,
    name: "Lord Ganesh Silver Showpiece",
    category: "collectable",
    image: p25,
    new_price: 9999,
    old_price: 11599,
  },
  {
    id: 26,
    name: "Amber Vintage Tea Kettle",
    category: "collectable",
    image: p26,
    new_price: 21999,
    old_price: 22799,
  },
  {
    id: 27,
    name: "Halloween Amber Stamp",
    category: "collectable",
    image: p27,
    new_price: 23699,
    old_price: 24999,
  },
  {
    id: 28,
    name: "Turquoise Vintage Tea Kettle",
    category: "collectable",
    image: p28,
    new_price: 94999,
    old_price: 100999,
  },
  {
    id: 29,
    name: "Gautam Buddha Lapiz Statue",
    category: "collectable",
    image: p29,
    new_price: 40999,
    old_price: 43599,
  },
  {
    id: 30,
    name: "Handmade Carving Silver Stone Box",
    category: "collectable",
    image: p30,
    new_price: 34999,
    old_price: 38999,
  },
  {
    id: 31,
    name: "Gautam Buddha Nepali Style Statue",
    category: "collectable",
    image: p31,
    new_price: 140999,
    old_price: 159999,
  },
  {
    id: 32,
    name: "Nepali Handmade Stone Chakra",
    category: "collectable",
    image: p32,
    new_price: 77599,
    old_price: 79999,
  },
  {
    id: 33,
    name: "Semi Precious Stone Studded Silver Elephant",
    category: "collectable",
    image: p33,
    new_price: 54999,
    old_price: 56499,
  },
  {
    id: 34,
    name: "Buddhist Stye Stone Statue",
    category: "collectable",
    image: p34,
    new_price: 129999,
    old_price: 140099,
  },
  {
    id: 35,
    name: "Antique Coral Necklace",
    category: "women",
    image: p35,
    new_price: 12999,
    old_price: 13499,
  },
  {
    id: 36,
    name: "Leather-Silver Antique Necklace",
    category: "collectable",
    image: p36,
    new_price: 14599,
    old_price: 15199,
  },
];

export default all_product;

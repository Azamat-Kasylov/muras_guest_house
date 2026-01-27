/* eslint-disable no-dupe-keys */

// navbar data

export interface NavBarDataInterface {
  title: string;
  link: string;
}

export const NavBarData: NavBarDataInterface[] = [
  { title: "home", link: "/main" },
  { title: "about us", link: "/aboutUs" },
  { title: "rooms", link: "/rooms" },
  { title: "services", link: "/services" },
];

// rooms data

export interface roomsDataInterface {
  price: string;
  title: string;
  description: string;
  imagePath: string;
  link: string;
}

export const roomsData: roomsDataInterface[] = [
  {
    price: "50$",
    title: "Yurt",
    description:
      "Enjoy the privacy and comfort of a villa with private pool and all the services of a hotel.",
    imagePath: "./yurt.jpg",
    link: "/rooms",
  },
  {
    price: "50$",
    title: "Room Standard",
    description:
      "Enjoy the privacy and comfort of a villa with private pool and all the services of a hotel.",
    imagePath: "./bed1.jpg",
    link: "/rooms",
  },
  {
    price: "30$",
    title: "Room Comfort",
    description:
      "Enjoy the privacy and comfort of a villa with private pool and all the services of a hotel.",
    imagePath: "./bed1.jpg",
    link: "/rooms",
  },
  {
    price: "10$",
    title: "Bed",
    description:
      "Enjoy the privacy and comfort of a villa with private pool and all the services of a hotel.",
    imagePath: "./bed2.jpg",
    link: "/rooms",
  },
];

export interface roomsYurtInterface {
  price: string;
  title: string;
  description: string;
}

export const roomsYurt: roomsYurtInterface[] = [
  {
    price: "50$",
    title: "Yurt",
    description:
      "Enjoy the privacy and comfort of a villa with private pool and all the services of a hotel.",
  },
];

export interface roomsYurtImagesInterface {
  imagePath: string;
}

export const roomsYurtImages: roomsYurtImagesInterface[] = [
  { imagePath: "./yurt.jpg" },
  { imagePath: "./yurt.jpg" },
  { imagePath: "./yurt.jpg" },
  { imagePath: "./yurt.jpg" },
  { imagePath: "./yurt.jpg" },
  { imagePath: "./yurt.jpg" },
  { imagePath: "./yurt.jpg" },
  { imagePath: "./yurt.jpg" },
  { imagePath: "./yurt.jpg" },
  { imagePath: "./yurt.jpg" },
];

export interface roomsStandardInterface {
  price: string;
  title: string;
  description: string;
}

export const roomsStandard: roomsStandardInterface[] = [
  {
    price: "50$",
    title: "Standard room",
    description:
      "Enjoy the privacy and comfort of a villa with private pool and all the services of a hotel.",
  },
];

export interface roomsStandardImagesInterface {
  imagePath: string;
}

export const roomsStandardImages: roomsStandardImagesInterface[] = [
  { imagePath: "./bed2.jpg" },
  { imagePath: "./bed2.jpg" },
  { imagePath: "./bed2.jpg" },
  { imagePath: "./bed2.jpg" },
  { imagePath: "./bed2.jpg" },
  { imagePath: "./bed2.jpg" },
  { imagePath: "./bed2.jpg" },
  { imagePath: "./bed2.jpg" },
  { imagePath: "./bed2.jpg" },
  { imagePath: "./bed2.jpg" },
];

//
export interface roomsComfortInterface {
  price: string;
  title: string;
  description: string;
}

export const roomsComfort: roomsComfortInterface[] = [
  {
    price: "30$",
    title: "Comfort room",
    description:
      "Enjoy the privacy and comfort of a villa with private pool and all the services of a hotel.",
  },
];

export interface roomsComfortImagesInterface {
  imagePath: string;
}

export const roomsComfortImages: roomsComfortImagesInterface[] = [
  { imagePath: "./bed1.jpg" },
  { imagePath: "./bed1.jpg" },
  { imagePath: "./bed1.jpg" },
  { imagePath: "./bed1.jpg" },
  { imagePath: "./bed1.jpg" },
  { imagePath: "./bed1.jpg" },
  { imagePath: "./bed1.jpg" },
  { imagePath: "./bed1.jpg" },
  { imagePath: "./bed1.jpg" },
  { imagePath: "./bed1.jpg" },
];

// Social data

interface SocialsDataInterface {
  iconPath: string;
  href: string;
}

export const SocialsData: SocialsDataInterface[] = [
  {
    iconPath: "./facebook.svg",
    href: "https://www.facebook.com/profile.php?id=100063488356149",
  },
  {
    iconPath: "./instagram.svg",
    href: "https://www.instagram.com/guest_house_muras_sarytash/",
  },
];

// Servisies data

export interface ServicesDataInterface {
  price: string;
  title: string;
  description: string;
  imagePath: string;
  link: string;
}

export const ServicesData: ServicesDataInterface[] = [
  {
    price: "5$",
    title: "Breakfast",
    description:
      "Enjoy the privacy and comfort of a villa with private pool and all the services of a hotel.",
    imagePath: "./breakfast.jpg",
    link: "/services",
  },
  {
    price: "8$",
    title: "Lunch",
    description:
      "Enjoy the privacy and comfort of a villa with private pool and all the services of a hotel.",
    imagePath: "./lunch.jpg",
    link: "/services",
  },
  {
    price: "10$",
    title: "Dinner",
    description:
      "Enjoy the privacy and comfort of a villa with private pool and all the services of a hotel.",
    imagePath: "./dinner.jpg",
    link: "/services",
  },
  {
    price: "5$",
    title: "Laundry",
    description:
      "Enjoy the privacy and comfort of a villa with private pool and all the services of a hotel.",
    imagePath: "./laundry.jpeg",
    link: "/services",
  },
];

export interface breakfastImagesInterface {
  imagePath: string;
  alt: string;
}

export const BreakfastImages: breakfastImagesInterface[] = [
  { imagePath: "./breakfast.jpg", alt: "Breackfast photo" },
  { imagePath: "./breakfast.jpg", alt: "Breackfast photo" },
  { imagePath: "./breakfast.jpg", alt: "Breackfast photo" },
  { imagePath: "./breakfast.jpg", alt: "Breackfast photo" },
  { imagePath: "./breakfast.jpg", alt: "Breackfast photo" },
  { imagePath: "./breakfast.jpg", alt: "Breackfast photo" },
  { imagePath: "./breakfast.jpg", alt: "Breackfast photo" },
  { imagePath: "./breakfast.jpg", alt: "Breackfast photo" },
  { imagePath: "./breakfast.jpg", alt: "Breackfast photo" },
  { imagePath: "./breakfast.jpg", alt: "Breackfast photo" },
];

export interface breakfastInterface {
  price: string;
  title: string;
  menu: string;
  description: string;
}

export const breakfastData: breakfastInterface[] = [
  {
    price: "5$",
    title: "Breackfast",
    menu: "Fried eggs, omelette, porridge, pancakes, butter, gem",
    description:
      "Enjoy the privacy and comfort of a villa with private pool and all the services of a hotel.",
  },
];

// Gallery data

interface GalleryDataInterface {
  imagePath: string;
}

export const GalleryData: GalleryDataInterface[] = [
  { imagePath: "./3_ainura.jpeg" },
  { imagePath: "./7_hotel-front-view.jpeg" },
  { imagePath: "./14_hotel-back-view.jpeg" },
  { imagePath: "./13_new-dinning-room.jpeg" },
  { imagePath: "./4_window-view.jpeg" },
  { imagePath: "./6_guests-lunch.jpeg" },
  { imagePath: "./8_old-room-view.jpeg" },
  { imagePath: "./9_new-room-view.jpeg" },
  { imagePath: "./17_alay-valley.jpeg" },
  { imagePath: "./18_taldyk-road.jpeg" },
  { imagePath: "./19_pamir-mountains.jpeg" },
  { imagePath: "./20_pamir-mountains.jpeg" },
];

// Feedback data

interface FeedbackDataInterface {
  imagePath: string;
  description: string;
  guest: string;
}

export const FeedbackData: FeedbackDataInterface[] = [
  {
    imagePath: "./profile.jpg",
    description:
      "Natalie and Michael Läßer are Bregenzerwald natives through and through. You can hear it in their dialect, and you'll definitely notice it when you talk about cheese. They'll make you feel at home in Sonne Mellau. With the first feel-good hotel in the Bregenzerwald, a dream has come true for them. We want to feel good, and we want you to feel good.",
    guest: "Natalie & Michael Läßer | Bregenzerwald (Germany)",
  },
  {
    imagePath: "./profile_female.jpg",
    description:
      "Шикарный отель! Каждую командировку в Краснодар останавливаемся в этом отеле! Очень вежливый и гостеприимный персонал, комфортные, уютные, чистые номера с красивым видом из окна на город. Ресторан при отеле безумно вкусно готовит! Завтраки в отеле на любой вкус и предпочтение! Всё меню — просто гастрономическая сказка! В командировку приезжаем два раза в год с 2018 года и во многих отелях Краснодара останавливались. Смело могу заявить: это самый лучший и топовый отель Краснодара! Всем рекомендую!",
    guest: "Ирина Пчелкина | Питер (Россия)",
  },
  {
    imagePath: "./couple.jpg",
    description:
      "We stayed with a child, the accommodation was very pleasing: the hotel is modern, freshly renovated, excellent air conditioning, which is important on hot days, the room is quiet and cozy - there is everything you need. In honor of the child's birthday, the hotel provided several delicious compliments, which further raised our spirits. The staff at the reception and in the restaurant are very friendly, the breakfast is varied and delicious. It is also worth noting the convenient location of the hotel, within walking distance there are three train stations and a metro. We wish the hotel team further prosperity, thank you!",
    guest: "Nick & Stella Brown | Washington (USA)",
  },
];

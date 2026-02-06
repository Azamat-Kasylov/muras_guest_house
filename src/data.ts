/* eslint-disable no-dupe-keys */

//---------------------------------------------------- Common Interfaces ---------------------------------------------

export interface IImage {
  imagePath: string;
  alt: string;
}

export interface IInfo {
  title: string;
  description: string;
  price: string;
  menu?: string;
}

//---------------------------------------------------- Navbar data ---------------------------------------------------

export interface NavBarDataInterface {
  title: string;
  link: string;
}

export const navBarData: NavBarDataInterface[] = [
  { title: "home", link: "/main" },
  { title: "about us", link: "/aboutUs" },
  { title: "rooms", link: "/rooms" },
  { title: "services", link: "/services" },
];

//---------------------------------------------------- Home page Rooms data ------------------------------------------------

export interface RoomsDataInterface {
  info: IInfo;
  image: IImage;
  link: string;
}

export const roomsData: RoomsDataInterface[] = [
  {
    info: {
      title: "Yurt",
      description:
        "Enjoy the privacy and comfort of a villa with private pool and all the services of a hotel.",
      price: "50$",
    },
    image: {
      imagePath: "./yurt.jpg",
      alt: "Yurt photo",
    },
    link: "/rooms",
  },
  {
    info: {
      title: "Room Standard",
      description:
        "Enjoy the privacy and comfort of a villa with private pool and all the services of a hotel.",
      price: "50$",
    },
    image: {
      imagePath: "./bed1.jpg",
      alt: "Standard room photo",
    },

    link: "/rooms",
  },
  {
    info: {
      title: "Room Comfort",
      description:
        "Enjoy the privacy and comfort of a villa with private pool and all the services of a hotel.",
      price: "30$",
    },
    image: {
      imagePath: "./bed1.jpg",
      alt: "Comfort room photo",
    },
    link: "/rooms",
  },
  {
    info: {
      title: "Bed",
      description:
        "Enjoy the privacy and comfort of a villa with private pool and all the services of a hotel.",
      price: "10$",
    },
    image: {
      imagePath: "./bed2.jpg",
      alt: "Beds photo",
    },
    link: "/rooms",
  },
];

// ---------------------------------------------------- Rooms images ------------------------------------------------------

export interface RoomsImagesInterface {
  yurtImages: IImage[];
  standardRoomImages: IImage[];
  comfortRoomImages: IImage[];
}

export const roomsImages: RoomsImagesInterface = {
  yurtImages: [
    { imagePath: "./yurt.jpg", alt: "Yurt" },
    { imagePath: "./yurt.jpg", alt: "Yurt" },
    { imagePath: "./yurt.jpg", alt: "Yurt" },
    { imagePath: "./yurt.jpg", alt: "Yurt" },
    { imagePath: "./yurt.jpg", alt: "Yurt" },
  ],
  standardRoomImages: [
    { imagePath: "./bed2.jpg", alt: "Standart room" },
    { imagePath: "./bed2.jpg", alt: "Standart room" },
    { imagePath: "./bed2.jpg", alt: "Standart room" },
    { imagePath: "./bed2.jpg", alt: "Standart room" },
    { imagePath: "./bed2.jpg", alt: "Standart room" },
  ],
  comfortRoomImages: [
    { imagePath: "./bed1.jpg", alt: "Comfort room" },
    { imagePath: "./bed1.jpg", alt: "Comfort room" },
    { imagePath: "./bed1.jpg", alt: "Comfort room" },
    { imagePath: "./bed1.jpg", alt: "Comfort room" },
    { imagePath: "./bed1.jpg", alt: "Comfort room" },
  ],
};

// ---------------------------------------------------- Rooms info ------------------------------------------------------

export interface RoomsInfoInterface {
  yurtInfo: IInfo[];
  standardRoomInfo: IInfo[];
  comfortRoomInfo: IInfo[];
}

export const roomsInfo: RoomsInfoInterface = {
  yurtInfo: [
    {
      price: "50$",
      title: "Yurt",
      description:
        "Enjoy the privacy and comfort of a villa with private pool and all the services of a hotel.",
    },
  ],
  standardRoomInfo: [
    {
      title: "Standard room",
      description:
        "Enjoy the privacy and comfort of a villa with private pool and all the services of a hotel.",
      price: "50$",
    },
  ],
  comfortRoomInfo: [
    {
      title: "Comfort room",
      description:
        "Enjoy the privacy and comfort of a villa with private pool and all the services of a hotel.",
      price: "30$",
    },
  ],
};

//------------------------------------------------------- Social data --------------------------------------------------

interface SocialsDataInterface {
  image: IImage;
  href: string;
}

export const socialsData: SocialsDataInterface[] = [
  {
    image: {
      imagePath: "./facebook.svg",
      alt: "Facebook",
    },
    href: "https://www.facebook.com/profile.php?id=100063488356149",
  },
  {
    image: {
      imagePath: "./instagram.svg",
      alt: "Instagram",
    },
    href: "https://www.instagram.com/guest_house_muras_sarytash/",
  },
];

//---------------------------------------------------- Home page Services data --------------------------------------------

export interface ServicesDataInterface {
  info: IInfo;
  image: IImage;
  link: string;
}

export const servicesData: ServicesDataInterface[] = [
  {
    info: {
      title: "Breakfast",
      description:
        "Enjoy the privacy and comfort of a villa with private pool and all the services of a hotel.",
      price: "5$",
    },
    image: {
      imagePath: "./breakfast.jpg",
      alt: "Breakfast",
    },
    link: "/services",
  },
  {
    info: {
      title: "Lunch",
      description:
        "Enjoy the privacy and comfort of a villa with private pool and all the services of a hotel.",
      price: "8$",
    },
    image: {
      imagePath: "./lunch.jpg",
      alt: "Lunch",
    },
    link: "/services",
  },
  {
    info: {
      title: "Dinner",
      description:
        "Enjoy the privacy and comfort of a villa with private pool and all the services of a hotel.",
      price: "10$",
    },
    image: {
      imagePath: "./dinner.jpg",
      alt: "Dinner",
    },
    link: "/services",
  },
  {
    info: {
      title: "Laundry",
      description:
        "Enjoy the privacy and comfort of a villa with private pool and all the services of a hotel.",
      price: "5$",
    },
    image: {
      imagePath: "./laundry.jpeg",
      alt: "Laundry",
    },
    link: "/services",
  },
];

//---------------------------------------------------- Services images ----------------------------------------------------

export interface ServiceImagesInterface {
  breakfast: IImage[];
  lunch: IImage[];
  dinner: IImage[];
}

export const serviceImages: ServiceImagesInterface = {
  breakfast: [
    { imagePath: "./breakfast.jpg", alt: "Breackfast photo" },
    { imagePath: "./breakfast.jpg", alt: "Breackfast photo" },
    { imagePath: "./breakfast.jpg", alt: "Breackfast photo" },
    { imagePath: "./breakfast.jpg", alt: "Breackfast photo" },
    { imagePath: "./breakfast.jpg", alt: "Breackfast photo" },
  ],
  lunch: [
    { imagePath: "./lunch.jpg", alt: "lunch photo" },
    { imagePath: "./lunch.jpg", alt: "lunch photo" },
    { imagePath: "./lunch.jpg", alt: "lunch photo" },
    { imagePath: "./lunch.jpg", alt: "lunch photo" },
    { imagePath: "./lunch.jpg", alt: "lunch photo" },
  ],
  dinner: [
    { imagePath: "./dinner.jpg", alt: "dinner photo" },
    { imagePath: "./dinner.jpg", alt: "dinner photo" },
    { imagePath: "./dinner.jpg", alt: "dinner photo" },
    { imagePath: "./dinner.jpg", alt: "dinner photo" },
    { imagePath: "./dinner.jpg", alt: "dinner photo" },
  ],
};

//---------------------------------------------------- Services info ------------------------------------------------------

export interface ServiceInfoInterface {
  breakfastInfo: IInfo[];
  lunchInfo: IInfo[];
  dinnerInfo: IInfo[];
}

export const serviceInfo: ServiceInfoInterface = {
  breakfastInfo: [
    {
      title: "Breackfast",
      description:
        "Enjoy the privacy and comfort of a villa with private pool and all the services of a hotel.",
      price: "5$",
      menu: "Fried eggs, omelette, porridge, pancakes, bread, butter, gem, tea, coffee",
    },
  ],
  lunchInfo: [
    {
      title: "Lunch",
      description:
        "Enjoy the privacy and comfort of a villa with private pool and all the services of a hotel.",
      price: "5$",
      menu: "Plov, lagman, dymdama, salad, fruits, bread, tea",
    },
  ],
  dinnerInfo: [
    {
      title: "Dinner",
      description:
        "Enjoy the privacy and comfort of a villa with private pool and all the services of a hotel.",
      price: "5$",
      menu: "Rice, potato, tomato, something else, salad, bread, tea",
    },
  ],
};

//---------------------------------------------------- Gallery data ---------------------------------------------------

export const galleryData: IImage[] = [
  { imagePath: "./3_ainura.jpeg", alt: "Muras Guest House" },
  { imagePath: "./7_hotel-front-view.jpeg", alt: "Muras Guest House" },
  { imagePath: "./14_hotel-back-view.jpeg", alt: "Muras Guest House" },
  { imagePath: "./13_new-dinning-room.jpeg", alt: "Muras Guest House" },
  { imagePath: "./4_window-view.jpeg", alt: "Muras Guest House" },
  { imagePath: "./6_guests-lunch.jpeg", alt: "Muras Guest House" },
  { imagePath: "./8_old-room-view.jpeg", alt: "Muras Guest House" },
  { imagePath: "./9_new-room-view.jpeg", alt: "Muras Guest House" },
  { imagePath: "./17_alay-valley.jpeg", alt: "Muras Guest House" },
  { imagePath: "./18_taldyk-road.jpeg", alt: "Muras Guest House" },
  { imagePath: "./19_pamir-mountains.jpeg", alt: "Muras Guest House" },
  { imagePath: "./20_pamir-mountains.jpeg", alt: "Muras Guest House" },
];

//---------------------------------------------------- Feedback data ---------------------------------------------------

interface FeedbackDataInterface {
  image: IImage;
  description: string;
  guest: string;
}

export const feedbackData: FeedbackDataInterface[] = [
  {
    image: {
      imagePath: "./profile.jpg",
      alt: "Authors photo",
    },
    description:
      "Natalie and Michael Läßer are Bregenzerwald natives through and through. You can hear it in their dialect, and you'll definitely notice it when you talk about cheese. They'll make you feel at home in Sonne Mellau. With the first feel-good hotel in the Bregenzerwald, a dream has come true for them. We want to feel good, and we want you to feel good.",
    guest: "Natalie & Michael Läßer | Bregenzerwald (Germany)",
  },
  {
    image: {
      imagePath: "./profile_female.jpg",
      alt: "Authors photo",
    },
    description:
      "Шикарный отель! Каждую командировку в Краснодар останавливаемся в этом отеле! Очень вежливый и гостеприимный персонал, комфортные, уютные, чистые номера с красивым видом из окна на город. Ресторан при отеле безумно вкусно готовит! Завтраки в отеле на любой вкус и предпочтение! Всё меню — просто гастрономическая сказка! В командировку приезжаем два раза в год с 2018 года и во многих отелях Краснодара останавливались. Смело могу заявить: это самый лучший и топовый отель Краснодара! Всем рекомендую!",
    guest: "Ирина Пчелкина | Питер (Россия)",
  },
  {
    image: {
      imagePath: "./couple.jpg",
      alt: "Authors photo",
    },
    description:
      "We stayed with a child, the accommodation was very pleasing: the hotel is modern, freshly renovated, excellent air conditioning, which is important on hot days, the room is quiet and cozy - there is everything you need. In honor of the child's birthday, the hotel provided several delicious compliments, which further raised our spirits. The staff at the reception and in the restaurant are very friendly, the breakfast is varied and delicious. It is also worth noting the convenient location of the hotel, within walking distance there are three train stations and a metro. We wish the hotel team further prosperity, thank you!",
    guest: "Nick & Stella Brown | Washington (USA)",
  },
];

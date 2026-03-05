/* eslint-disable no-dupe-keys */

//---------------------------------------------------- Common Interfaces ---------------------------------------------

export interface IImage {
  url: string;
  alt: string;
}

export interface IInfo {
  title: string;
  description: string;
  price: string;
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
        "Experience the magic of the nomadic tradition in our luxury Yurt. Combining ancient design with modern comfort, this unique circular space offers a cozy retreat.",
      price: "From 50$ / night",
    },
    image: {
      url: "./yurt-muras-2.jpeg",
      alt: "Yurt photo",
    },
    link: "/rooms",
  },
  {
    info: {
      title: "Standard room",
      description:
        "Your personal retreat. Simple, stylish, and incredibly comfortable. Perfect for solo travelers or couples who value comfort and charm.",
      price: "From 40$ / night",
    },
    image: {
      url: "./9_new-room-view.jpeg",
      alt: "Standard room photo",
    },

    link: "/rooms",
  },
  {
    info: {
      title: "Dorm Bed",
      description:
        "Your cozy hideaway. A comfy bed, authentic atmosphere, and a power socket — everything you need to recharge for your next adventure.",
      price: "From 10$ / night",
    },
    image: {
      url: "./8_old-room-view.jpeg",
      alt: "Beds photo",
    },
    link: "/rooms",
  },
];

//---------------------------------------------------- Gallery data ---------------------------------------------------

export const galleryData: IImage[] = [
  { url: "./3_ainura.jpeg", alt: "Muras Guest House" },
  { url: "./7_hotel-front-view.jpeg", alt: "Muras Guest House" },
  { url: "./14_hotel-back-view.jpeg", alt: "Muras Guest House" },
  { url: "./13_new-dinning-room.jpeg", alt: "Muras Guest House" },
  { url: "./4_window-view.jpeg", alt: "Muras Guest House" },
  { url: "./6_guests-lunch.jpeg", alt: "Muras Guest House" },
  { url: "./8_old-room-view.jpeg", alt: "Muras Guest House" },
  { url: "./9_new-room-view.jpeg", alt: "Muras Guest House" },
  { url: "./17_alay-valley.jpeg", alt: "Muras Guest House" },
  { url: "./18_taldyk-road.jpeg", alt: "Muras Guest House" },
  { url: "./19_pamir-mountains.jpeg", alt: "Muras Guest House" },
  { url: "./20_pamir-mountains.jpeg", alt: "Muras Guest House" },
];

// ---------------------------------------------------- Rooms images ------------------------------------------------------

export interface MediaInterface extends IImage {
  type: string;
}

interface RoomsImagesInterface {
  yurtImages: MediaInterface[];
  standardRoomImages: MediaInterface[];
  comfortRoomImages: MediaInterface[];
}

export const roomsImages: RoomsImagesInterface = {
  yurtImages: [
    { type: "video", url: "./yurt-video.mp4", alt: "Yurt building video" },
    { type: "image", url: "./yurt-muras-2.jpeg", alt: "Yurt" },
    { type: "image", url: "./yurt-muras.jpg", alt: "Yurt" },
    { type: "image", url: "./yurt.jpg", alt: "Yurt" },
  ],
  standardRoomImages: [
    { type: "image", url: "./9_new-room-view.jpeg", alt: "Standart room" },
    { type: "image", url: "./9_new-room-view.jpeg", alt: "Standart room" },
    { type: "image", url: "./9_new-room-view.jpeg", alt: "Standart room" },
    { type: "image", url: "./9_new-room-view.jpeg", alt: "Standart room" },
    { type: "image", url: "./9_new-room-view.jpeg", alt: "Standart room" },
  ],
  comfortRoomImages: [
    { type: "image", url: "./8_old-room-view.jpeg", alt: "Comfort room" },
    { type: "image", url: "./8_old-room-view.jpeg", alt: "Comfort room" },
    { type: "image", url: "./8_old-room-view.jpeg", alt: "Comfort room" },
    { type: "image", url: "./8_old-room-view.jpeg", alt: "Comfort room" },
    { type: "image", url: "./8_old-room-view.jpeg", alt: "Comfort room" },
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
      price: "From 20$ / night",
      title: "Yurt",
      description:
        "Experience the magic of the nomadic tradition in our luxury Yurt. Combining ancient design with modern comfort, this unique circular space offers a cozy retreat.",
    },
  ],
  standardRoomInfo: [
    {
      title: "Standard room",
      description:
        "Your personal retreat. Simple, stylish, and incredibly comfortable. Perfect for solo travelers or couples who value comfort and charm.",
      price: "From 50$ / night",
    },
  ],
  comfortRoomInfo: [
    {
      title: "Dorm bed",
      description:
        "Your cozy hideaway. A comfy bed, authentic atmosphere, and a power socket — everything you need to recharge for your next adventure.",
      price: "From 20$ / night",
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
      url: "./facebook.svg",
      alt: "Facebook",
    },
    href: "https://www.facebook.com/profile.php?id=100063488356149",
  },
  {
    image: {
      url: "./instagram.svg",
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
      title: "Meals",
      description:
        "Homemade breakfasts and dinners featuring local ingredients and Kyrgyz specialties. Vegetarian options available.",
      price: "5$",
    },
    image: {
      url: "./breakfast-muras.jpg",
      alt: "Breakfast",
    },
    link: "/services",
  },
  {
    info: {
      title: "Transportation",
      description:
        "Airport and city transfers, daily shuttles, and custom routes for treks and day trips in the Alai region.",
      price: "8$",
    },
    image: {
      url: "./transfer.jpeg",
      alt: "Lunch",
    },
    link: "/services",
  },
  {
    info: {
      title: "Guided Tours",
      description:
        "Local guides for hiking, horseback riding, cultural tours, and high-pass adventures tailored to your level.",
      price: "10$",
    },
    image: {
      url: "./horse-guide.jpg",
      alt: "Dinner",
    },
    link: "/services",
  },
  {
    info: {
      title: "Laundry",
      description:
        "Reliable same-day laundry service so you can travel lighter and stay longer in the mountains.",
      price: "5$",
    },
    image: {
      url: "./laundry.jpeg",
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
    { url: "./breakfast.jpg", alt: "Breackfast photo" },
    { url: "./breakfast-muras.jpg", alt: "Breackfast photo" },
    { url: "./breakfast.jpg", alt: "Breackfast photo" },
    { url: "./breakfast.jpg", alt: "Breackfast photo" },
    { url: "./breakfast.jpg", alt: "Breackfast photo" },
  ],
  lunch: [
    { url: "./6_guests-lunch.jpeg", alt: "lunch photo" },
    { url: "./lunch.jpg", alt: "lunch photo" },
    { url: "./lunch.jpg", alt: "lunch photo" },
    { url: "./lunch.jpg", alt: "lunch photo" },
    { url: "./lunch.jpg", alt: "lunch photo" },
  ],
  dinner: [
    { url: "./dinner.jpg", alt: "dinner photo" },
    { url: "./dinner.jpg", alt: "dinner photo" },
    { url: "./dinner.jpg", alt: "dinner photo" },
    { url: "./dinner.jpg", alt: "dinner photo" },
    { url: "./dinner.jpg", alt: "dinner photo" },
  ],
};

//---------------------------------------------------- Services info ------------------------------------------------------

export interface ServiceInterface extends IInfo {
  menu: string;
}

interface ServiceInfoInterface {
  breakfastInfo: ServiceInterface[];
  lunchInfo: ServiceInterface[];
  dinnerInfo: ServiceInterface[];
}

export const serviceInfo: ServiceInfoInterface = {
  breakfastInfo: [
    {
      title: "Breackfast",
      description:
        "Enjoy the privacy and comfort of a villa with private pool and all the services of a hotel.",
      price: "From 5$",
      menu: "Fried eggs, omelette, porridge, pancakes, bread, butter, gem, tea, coffee",
    },
  ],
  lunchInfo: [
    {
      title: "Lunch",
      description:
        "Enjoy the privacy and comfort of a villa with private pool and all the services of a hotel.",
      price: "From 7$",
      menu: "Plov, lagman, dymdama, salad, fruits, bread, tea",
    },
  ],
  dinnerInfo: [
    {
      title: "Dinner",
      description:
        "Enjoy the privacy and comfort of a villa with private pool and all the services of a hotel.",
      price: "From 10$",
      menu: "Rice, potato, tomato, something else, salad, bread, tea",
    },
  ],
};

//---------------------------------------------------- Feedback data ---------------------------------------------------

interface FeedbackDataInterface {
  image: IImage;
  feedbackText: string;
  guest: string;
}

export const feedbackData: FeedbackDataInterface[] = [
  {
    image: {
      url: "./profile.jpg",
      alt: "Authors photo",
    },
    feedbackText:
      "Natalie and Michael Läßer are Bregenzerwald natives through and through. You can hear it in their dialect, and you'll definitely notice it when you talk about cheese. They'll make you feel at home in Sonne Mellau. With the first feel-good hotel in the Bregenzerwald, a dream has come true for them. We want to feel good, and we want you to feel good.",
    guest: "Natalie & Michael Läßer | Bregenzerwald (Germany)",
  },
  {
    image: {
      url: "./profile_female.jpg",
      alt: "Authors photo",
    },
    feedbackText:
      "Шикарный отель! Каждую командировку в Краснодар останавливаемся в этом отеле! Очень вежливый и гостеприимный персонал, комфортные, уютные, чистые номера с красивым видом из окна на город. Ресторан при отеле безумно вкусно готовит! Завтраки в отеле на любой вкус и предпочтение! Всё меню — просто гастрономическая сказка! В командировку приезжаем два раза в год с 2018 года и во многих отелях Краснодара останавливались. Смело могу заявить: это самый лучший и топовый отель Краснодара! Всем рекомендую!",
    guest: "Ирина Пчелкина | Питер (Россия)",
  },
  {
    image: {
      url: "./couple.jpg",
      alt: "Authors photo",
    },
    feedbackText:
      "We stayed with a child, the accommodation was very pleasing: the hotel is modern, freshly renovated, excellent air conditioning, which is important on hot days, the room is quiet and cozy - there is everything you need. In honor of the child's birthday, the hotel provided several delicious compliments, which further raised our spirits. The staff at the reception and in the restaurant are very friendly, the breakfast is varied and delicious. It is also worth noting the convenient location of the hotel, within walking distance there are three train stations and a metro. We wish the hotel team further prosperity, thank you!",
    guest: "Nick & Stella Brown | Washington (USA)",
  },
];

//---------------------------------------------------- Certificate data ---------------------------------------------------

export interface CertificateInterface extends IImage {
  className: string;
}

export const certificateData: CertificateInterface[] = [
  { url: "./booking.jpg", alt: "booking certificate", className: "small" },
  { url: "./booking-2.jpg", alt: "booking certificate", className: "small" },
  { url: "./certificate.jpg", alt: "booking certificate", className: "big" },
  {
    url: "./certificate-2.jpg",
    alt: "booking certificate",
    className: "small",
  },
  {
    url: "./certificate-3.jpg",
    alt: "booking certificate",
    className: "small",
  },
];

// вопросы к HR:
// * как составить резюме, чтобы меня заметили и на что обращают внимание работодатели/рекрутеры (будет ли какой-нибудь шаблон/пример)
// * что конкретно писать в резюме про опыт работы, если опыта работы в IT еще нет
// * как писать сопроводительные письма (будет ли какой-нибудь шаблон/пример)
// * как составлять портфолио и на что обращают внимание работодатели/рекрутеры (будет ли какой-нибудь шаблон/пример)
// * как мне преподнести себя как джуна без опыта, но которого можно брать на работу
// * как обстоят дела в РФ с наймом иностранцев на работу в IT
// * где и как искать работу в международных компаниях
// * резюме для международного рынка
// * как обходить ботов/роботов на платформах

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
  forWhom: string;
}

export const roomsData: RoomsDataInterface[] = [
  {
    info: {
      title: "Kyrgyz yurt",
      description:
        "Experience the magic of the nomadic tradition in our luxury Yurt.",
      price: "from 50$ / night",
    },
    image: {
      url: "./yurt_front-soft.jpg",
      alt: "Yurt photo",
    },
    link: "/rooms",
    forWhom: "Nomadic experience",
  },
  {
    info: {
      title: "Standard room",
      description:
        "Your personal retreat. Simple, stylish, and incredibly comfortable.",
      price: "from 40$ / night",
    },
    image: {
      url: "./standard_room-soft.png",
      alt: "Standard room photo",
    },

    link: "/rooms",
    forWhom: "Best for couples",
  },
  {
    info: {
      title: "Dorm Bed",
      description: "Your cozy hideaway to recharge for your next adventure.",
      price: "from 10$ / night",
    },
    image: {
      url: "./dorm_bed-soft.jpg",
      alt: "Beds photo",
    },
    link: "/rooms",
    forWhom: "Solo travelers",
  },
];

//---------------------------------------------------- Gallery data ---------------------------------------------------

export const galleryData: IImage[] = [
  { url: "./3_ainura.jpg", alt: "Muras Guest House" },
  { url: "./7_hotel-front-view.jpeg", alt: "Muras Guest House" },
  { url: "./13_new-dinning-room.jpeg", alt: "Muras Guest House" },
  { url: "./14_hotel-back-view.jpeg", alt: "Muras Guest House" },
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
      title: "Kyzgyz Yurt",
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
  social: string;
}

export const socialsData: SocialsDataInterface[] = [
  {
    image: {
      url: "./facebook.svg",
      alt: "Facebook",
    },
    href: "https://www.facebook.com/profile.php?id=100063488356149",
    social: "Facebook",
  },
  {
    image: {
      url: "./instagram.svg",
      alt: "Instagram",
    },
    href: "https://www.instagram.com/guest_house_muras_sarytash/",
    social: "Instagram",
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
        "Traditional Kyrgyz dishes made with fresh local ingredients, served in our warm dining hall.",
      price: "5$",
    },
    image: {
      url: "./meals.svg",
      alt: "Breakfast",
    },
    link: "/services",
  },
  {
    info: {
      title: "Transportation",
      description:
        "Airport transfers and excursions to nearby landmarks, including Lenin Peak base camp.",
      price: "8$",
    },
    image: {
      url: "./transport.svg",
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
      url: "./guides.svg",
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
      url: "./laundry.svg",
      alt: "Laundry",
    },
    link: "/services",
  },
  {
    info: {
      title: "Connectivity",
      description:
        "Stay connected with complimentary Wi-Fi throughout the hotel and common areas.",
      price: "5$",
    },
    image: {
      url: "./wifi.svg",
      alt: "Wifi connection",
    },
    link: "/services",
  },
  {
    info: {
      title: "Glamping",
      description:
        "Experience the great outdoors in total comfort with our hotel camping experience.",
      price: "5$",
    },
    image: {
      url: "./camping.svg",
      alt: "Camping",
    },
    link: "/services",
  },
];

//---------------------------------------------------- Services images ----------------------------------------------------

export interface ServiceImagesInterface {
  meals: IImage[];
}

export const serviceImages: ServiceImagesInterface = {
  meals: [
    { url: "./breakfast.jpg", alt: "Breackfast photo" },
    { url: "./breakfast-muras.jpg", alt: "Breackfast photo" },
    { url: "./6_guests-lunch.jpeg", alt: "lunch photo" },
    { url: "./breakfast.jpg", alt: "Breackfast photo" },
    { url: "./breakfast.jpg", alt: "Breackfast photo" },
  ],
};

//---------------------------------------------------- Services info ------------------------------------------------------

export interface ServiceInterface extends IInfo {
  menu?: string;
  image: IImage;
}

interface ServiceInfoInterface {
  mealsInfo: ServiceInterface[];
  transferInfo: ServiceInterface[];
  toursInfo: ServiceInterface[];
  laundryInfo: ServiceInterface[];
  campingInfo: ServiceInterface[];
}

export const serviceInfo: ServiceInfoInterface = {
  mealsInfo: [
    {
      title: "Meals",
      description:
        "Traditional Kyrgyz dishes made with fresh local ingredients, served in our warm dining hall.",
      price: "From 5$",
      menu: "Plov, Beshbarmak, Lagman, Fried eggs, bread, butter, gem, tea, coffee and much more.",
      image: {
        url: "meals.svg",
        alt: "meals",
      },
    },
  ],
  transferInfo: [
    {
      title: "Transportation",
      description:
        "Airport and city transfers, excursions to nearby landmarks, including Lenin Peak base camp.",
      price: "From 10$",
      image: {
        url: "transport.svg",
        alt: "meals",
      },
    },
  ],
  toursInfo: [
    {
      title: "Guided Tours",
      description:
        "Explore the Osh city and Alai Range with experienced local guides.",
      price: "From 50$",
      image: {
        url: "guides.svg",
        alt: "meals",
      },
    },
  ],
  campingInfo: [
    {
      title: "Glamping",
      description:
        "Experience the great outdoors in total comfort with our hotel camping experience.",
      price: "From 10$",
      image: {
        url: "camping.svg",
        alt: "meals",
      },
    },
  ],
  laundryInfo: [
    {
      title: "Laundry",
      description: "Keep your travel wardrobe fresh with our same-day laundry.",
      price: "From 5$",
      image: {
        url: "laundry.svg",
        alt: "meals",
      },
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
  {
    url: "./booking-2_300.jpg",
    alt: "booking certificate",
    className: "small",
  },
  { url: "./certificate.jpg", alt: "booking certificate", className: "small" },

  {
    url: "./certificate-3_300.jpg",
    alt: "booking certificate",
    className: "small",
  },
];

export const bigCertificateData: CertificateInterface[] = [
  { url: "./booking-2.jpg", alt: "booking certificate", className: "small" },
  { url: "./certificate.jpg", alt: "booking certificate", className: "small" },
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

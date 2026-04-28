"use strict";(self.webpackChunkmuras_guest_house=self.webpackChunkmuras_guest_house||[]).push([[204],{726:(e,t,r)=>{r.r(t),r.d(t,{default:()=>N});var i=r(43),a=r(464),s=r(454),o=r(579);const l=(0,i.lazy)(()=>Promise.all([r.e(629),r.e(20)]).then(r.bind(r,20))),n=a.Ay.section`
  margin: 0;
  min-height: 100vh;

  .intro_img {
    width: 100%;
    min-height: 100vh;
    object-fit: cover;
    filter: brightness(70%);
    position: fixed;
    z-index: -999;
  }

  .container {
    min-height: calc(100vh - 90px);
    display: flex;
    flex-direction: column;
    justify-content: end;
  }

  .intro_flex {
    max-width: 550px;
    margin-bottom: 50px;
    animation: intro_flex 2s;
    will-change: transform, opacity;
  }

  @keyframes intro_flex {
    0% {
      opacity: 0;
      transform: translateY(-100px); /* Начинаем выше, чем нужно */
    }
    100% {
      opacity: 1;
      transform: translateY(0); /* Заканчиваем на исходной позиции */
    }
  }

  .intro_title {
    /* color: #ffffff;
    font-size: 150px;
    font-weight: 300; */
    margin-bottom: 10px;
  }

  .intro_text {
    font-size: 20px;
    font-weight: 300;
    color: #ffffff;
    letter-spacing: 2px;
    font-style: italic;
    line-height: 1.5em;
    font-family: "Cormorant Garamond", serif;
    will-change: transform, opacity;
  }

  @media (max-width: 768px) {
    .container {
      min-height: calc(100vh - 250px);
    }

    .intro_flex {
      margin-bottom: 30px;
    }
  }
`,c=()=>(0,o.jsxs)(n,{id:"intro",children:[(0,o.jsxs)("picture",{children:[(0,o.jsx)("source",{media:"(min-width: 768px)",srcSet:"./alay_valley.webp",type:"image/webp"}),(0,o.jsx)("source",{media:"(max-width: 768px)",srcSet:"./alay_valley_768.webp",type:"image/webp"}),(0,o.jsx)("img",{src:"./alay_valley.webp",alt:"intro background-image",className:"intro_img"})]}),(0,o.jsx)("div",{className:"container",children:(0,o.jsxs)("div",{className:"intro_flex",children:[(0,o.jsx)("img",{src:"./muras.webp",alt:"Muras",className:"intro_title",width:"330px",height:"105px"}),(0,o.jsx)("p",{className:"intro_text",children:"Wake up to snow-capped peaks, crystal-clear air, and warm Kyrgyz hospitality at our family-run mountain retreat."})]})}),(0,o.jsx)(i.Suspense,{fallback:(0,o.jsx)(s.A,{}),children:(0,o.jsx)(l,{})})]});var d=r(879),m=r(708),p=r(475);const h=a.Ay.section`
  padding: 100px 0;
  background-color: #fff;

  .room-description {
    display: none;
    color: #7e7367;
    transition: all 0.5s;
  }

  .container {
    padding: 0;
  }

  .section-title {
    padding-left: 6rem;
    margin-bottom: 1rem;
  }

  .section-suptitle {
    text-transform: uppercase;
    color: #7e7367;
    padding-left: 6rem;
    margin-bottom: 50px;
  }

  .room-card {
    width: 100%;
    padding: 3rem 6rem;
    display: flex;
    align-items: center;
    gap: 6rem;
    background: #fff;
    border-top: 1px solid #e2ded2;
    position: relative;
    transition: all 0.5s;

    will-change: background-color;
  }

  .room-card.hover {
    background-color: #7e7367;
    align-items: center;

    .room-description {
      display: block;
    }

    .room-title,
    .room-description,
    .room-price,
    .forWhom,
    span {
      color: #fff;
    }

    .next svg path {
      fill: #fff; /* Меняем цвет иконки при hover */
    }
  }

  .room-card:last-child {
    border-bottom: 1px solid #e2ded2;
  }

  .flex-col {
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 1rem;
  }

  .flex_row {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }

  .room-title,
  .room-description,
  .room-price,
  .forWhom,
  span {
    transition: all 0.5s;
  }

  .room-title {
    color: #000;
    font-size: 32px;
    font-weight: 300;
  }

  .room-description,
  .room-price,
  .forWhom,
  span {
    color: #7e7367;
  }

  .room-title {
    min-width: fit-content;
  }

  .next {
    margin-left: auto;
    display: flex;
    align-items: center;
    width: 25px;
  }

  @media (max-width: 1024px) {
    .room-card {
      display: flex;
      padding: 3rem 1rem;
    }

    .hover {
      align-items: start;

      .next {
        align-self: center;
      }
    }

    .flex-col {
      flex-direction: column;
    }

    .section-title,
    .section-suptitle {
      padding-left: 1rem;
    }
  }

  @media (max-width: 768px) {
    .room-card {
      display: flex;
      flex-direction: column;
      gap: 0;

      &:hover {
        align-items: center;
      }
    }

    .room-title {
      margin: 0;
      margin-bottom: 2rem;
    }

    .room-description {
      text-align: center;
    }

    .next {
      margin-top: 1rem;
    }

    .flex_row {
      justify-content: center;
    }
  }
`,x=()=>{const e=(0,i.useRef)(null),t=(0,i.useCallback)(()=>{document.querySelectorAll('[data-hoverable="true"]').forEach(e=>{const t=e.__clickHandler;t&&e.removeEventListener("click",t);const r=t=>{t.target.closest(".next")||(t.preventDefault(),e.scrollIntoView({behavior:"smooth",block:"center"}))};e.__clickHandler=r,e.addEventListener("click",r)})},[]),r=(0,i.useCallback)(()=>{document.querySelectorAll('[data-hoverable="true"]').forEach(e=>{const t=e.getBoundingClientRect(),r=window.innerHeight/2,i=t.top+t.height/2,a=t.height/2;Math.abs(i-r)<a?e.classList.add("hover"):e.classList.remove("hover")})},[]);return(0,i.useEffect)(()=>{t();let e=!1;const i=()=>{e||(requestAnimationFrame(()=>{r(),e=!1}),e=!0)};return window.addEventListener("scroll",i),window.addEventListener("resize",i),r(),()=>{window.removeEventListener("scroll",i),window.removeEventListener("resize",i);document.querySelectorAll('[data-hoverable="true"]').forEach(e=>{const t=e.__clickHandler;t&&(e.removeEventListener("click",t),delete e.__clickHandler)})}},[t,r]),(0,o.jsx)(h,{id:"rooms",className:"rooms",children:(0,o.jsxs)("div",{className:"container",ref:e,children:[(0,o.jsx)("h2",{className:"section-title",children:"Room Types"}),(0,o.jsx)("p",{className:"section-suptitle",children:"Choose the stay that suits your journey"}),m.$2.map((e,t)=>{let{link:r,forWhom:i,info:{title:a,description:s,price:l},image:{url:n,alt:c}}=e;return(0,o.jsxs)("div",{className:"room-card","data-hoverable":"true",children:[(0,o.jsx)("h3",{className:"room-title",children:a}),(0,o.jsxs)("div",{className:"flex-col",children:[(0,o.jsxs)("div",{className:"flex_row",children:[(0,o.jsx)("p",{className:"forWhom",children:i}),(0,o.jsx)("span",{children:"|"}),(0,o.jsx)("p",{className:"room-price",children:l})]}),(0,o.jsx)("p",{className:"room-description",children:s})]}),(0,o.jsx)(p.k2,{to:r,className:"next","aria-label":"Go to page",children:(0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 640",children:(0,o.jsx)("path",{fill:"#7e7367",d:"M439.1 297.4C451.6 309.9 451.6 330.2 439.1 342.7L279.1 502.7C266.6 515.2 246.3 515.2 233.8 502.7C221.3 490.2 221.3 469.9 233.8 457.4L371.2 320L233.9 182.6C221.4 170.1 221.4 149.8 233.9 137.3C246.4 124.8 266.7 124.8 279.2 137.3L439.2 297.3z"})})})]},t)})]})})},g=a.Ay.section`
  padding: 100px 0;
  background-color: #fff;
  transition: all 0.5s;

  .section-title {
    margin-bottom: 20px;
  }

  .section-suptitle {
    text-transform: uppercase;
    color: #7e7367;
    margin-bottom: 50px;
  }

  .services-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .services-card {
    padding: 25px 10px;
    border-top: 1px solid #e2ded2;
  }

  .services-title {
    font-size: 26px;
    margin-bottom: 15px;
  }

  .services-description {
    color: #7e7367;
    margin-bottom: 30px;
    line-height: 1.7;
  }

  .services_details {
    color: #7e7367;

    &:hover {
      border-bottom: 1px solid #fff;
    }
  }

  .img {
    margin-bottom: 1rem;
  }

  h2,
  h3,
  p,
  a,
  .img {
    transition: all 0.5s;
  }

  &:has(.services-grid:hover) {
    background-color: #3b332b;

    h2,
    h3,
    p,
    a {
      color: #fff;
    }

    .img {
      filter: brightness(0) invert(1);
    }
  }

  @media (max-width: 1024px) {
    .services-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (max-width: 768px) {
    .services-grid {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
  }
`,u=()=>(0,o.jsx)(g,{id:"services",className:"services",children:(0,o.jsxs)("div",{className:"container",children:[(0,o.jsx)("h2",{className:"section-title",children:"Our services"}),(0,o.jsx)("p",{className:"section-suptitle",children:"What we offer"}),(0,o.jsx)("div",{className:"services-grid",children:m.XL.map((e,t)=>{let{image:{url:r,alt:i},info:{title:a,description:s},link:l}=e;return(0,o.jsxs)("div",{className:"services-card",children:[(0,o.jsx)("img",{src:r,alt:i,className:"img",width:"24px",height:"24px"}),(0,o.jsx)("h3",{className:"services-title",children:a}),(0,o.jsx)("p",{className:"services-description",children:s}),(0,o.jsx)(p.k2,{to:l,className:"services_details",children:"view details"})]},t)})})]})});var f=r(584);r(986);const v=()=>{const[e,t]=(0,i.useState)(0),[r,a]=(0,i.useState)(!1),[s,l]=(0,f.E)({initial:0,loop:!0,slideChanged(e){t(e.track.details.rel)},created(){a(!0)}});return(0,o.jsx)(b,{children:(0,o.jsxs)("div",{className:"container",children:[(0,o.jsx)("h2",{className:"fb_title",children:"Our Guests"}),(0,o.jsxs)("div",{className:"navigation-wrapper",children:[(0,o.jsx)("div",{ref:s,className:"keen-slider",children:m.YU.map((e,t)=>{let{feedbackText:r,guest:i}=e;return(0,o.jsxs)("div",{className:"keen-slider__slide fb_content",children:[(0,o.jsx)("p",{className:"fb_text",children:r}),(0,o.jsx)("p",{className:"fb_author",children:i})]},t)})}),r&&l.current&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(w,{left:!0,onClick:e=>{var t;return e.stopPropagation()||(null===(t=l.current)||void 0===t?void 0:t.prev())},disabled:0===e}),(0,o.jsx)(w,{onClick:e=>{var t;return e.stopPropagation()||(null===(t=l.current)||void 0===t?void 0:t.next())},disabled:e===l.current.track.details.slides.length-1})]})]}),r&&l.current&&(0,o.jsx)("div",{className:"dots",children:[...Array(l.current.track.details.slides.length).keys()].map(t=>(0,o.jsx)("button",{"aria-label":"Pagination dots",onClick:()=>{var e;null===(e=l.current)||void 0===e||e.moveToIdx(t)},className:"dot"+(e===t?" active":""),children:(0,o.jsx)("span",{className:"dot_inner"})},t))})]})})};function w(e){const t=e.disabled?" arrow--disabled":"";return(0,o.jsxs)("svg",{onClick:e.onClick,className:`arrow ${e.left?"arrow--left":"arrow--right"} ${t}`,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[e.left&&(0,o.jsx)("path",{d:"M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"}),!e.left&&(0,o.jsx)("path",{d:"M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"})]})}const b=a.Ay.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  background-color: #fff;

  .keen-slider__slide {
    will-change: transform;
    will-change: transform, opacity;
  }

  .container {
    max-width: 1000px;
  }

  .fb_title {
    text-align: center;
    margin-bottom: 5rem;
  }

  .fb_content {
    text-align: center;
  }

  .fb_text {
    font-style: italic;
    margin-bottom: 2rem;
    color: #7e7367;
  }

  .fb_author {
    margin-bottom: 1rem;
    color: #7e7367;
  }

  .navigation-wrapper {
    position: relative;
  }

  .dots {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .dot {
    border: none;
    background-color: transparent;
    margin: 0 5px;
    padding: 11px 6px;
    cursor: pointer;
    outline: none;
    -webkit-tap-highlight-color: transparent;
  }

  .dot_inner {
    display: block;
    width: 8px;
    height: 8px;
    background: #dbdbdb;
    border-radius: 50%;
  }

  .dot:focus {
    outline: none;
  }

  .dot.active {
    background-color: transparent;
    outline: none;
    box-shadow: none;
    .dot_inner {
      background: #000;
    }
  }

  .arrow {
    width: 30px;
    height: 30px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    fill: #000;
    cursor: pointer;
  }

  .arrow--left {
    left: -70px;
  }

  .arrow--right {
    left: auto;
    right: -70px;
  }

  @media (max-width: 1024px) {
    .container {
      padding: 0 1rem;
    }

    .arrow {
      display: none;
    }
  }
`,j=(0,i.lazy)(()=>r.e(626).then(r.bind(r,626))),y=(0,i.lazy)(()=>r.e(147).then(r.bind(r,147))),_=a.Ay.section`
  padding: 100px 0;
  position: relative;
  background-color: #fff;

  .gallery_title {
    margin-bottom: 15px;
  }

  .gallery_suptitle {
    text-transform: uppercase;
    color: #7e7367;
    margin-bottom: 50px;
  }

  .gallery_grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 250px);
    gap: 20px;

    .pics:first-child {
      grid-column-start: 1;
      grid-column-end: 3;
      grid-row-start: 1;
      grid-row-end: 2;
    }

    .pics:nth-child(2) {
      grid-column-start: 1;
      grid-column-end: 3;
      grid-row-start: 2;
      grid-row-end: 3;
    }

    .pics:nth-child(3) {
      grid-column-start: 3;
      grid-column-end: 4;
      grid-row-start: 1;
      grid-row-end: 3;
    }

    .pics {
      width: 100%;
      height: 100%;
      object-fit: cover;
      filter: contrast(100%) brightness(100%) saturate(120%);
      border-radius: 30px;

      &:hover {
        cursor: pointer;
      }
    }
  }

  @media (max-width: 768px) {
    .gallery_grid {
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: auto;
      row-gap: 10px;
      column-gap: 7px;

      .pics {
        aspect-ratio: 9/6;
        border-radius: 0;
      }

      .pics:first-child {
        grid-column-start: 1;
        grid-column-end: 5;
        grid-row-start: 1;
        grid-row-end: 2;
      }

      .pics:nth-child(2) {
        grid-column-start: 1;
        grid-column-end: 2;
        grid-row-start: 2;
        grid-row-end: 3;
      }
      .pics:nth-child(3) {
        grid-column-start: 2;
        grid-column-end: 3;
        grid-row-start: 2;
        grid-row-end: 3;
      }
    }
  }
`,k=()=>{const[e,t]=(0,i.useState)(!1),[r,a]=(0,i.useState)(0);return(0,o.jsx)(_,{id:"gallery",children:(0,o.jsxs)("div",{className:"gallery_container container",children:[(0,o.jsx)("h2",{className:"gallery_title",children:"Gallery"}),(0,o.jsx)("p",{className:"gallery_suptitle",children:"A glimpse of life at Muras Guest House and the Alay Valley"}),(0,o.jsxs)("div",{className:"gallery_grid",children:[m.rz.slice(0,5).map((r,i)=>{let{url:s,alt:l}=r;return(0,o.jsx)("img",{src:s,alt:l,className:"pics",onClick:()=>(r=>{a(r),t(!e)})(i),loading:"lazy"},i)}),e&&(0,o.jsxs)(i.Suspense,{fallback:(0,o.jsx)(s.A,{}),children:[(0,o.jsx)(y,{isOpen:e,setIsOpen:t}),(0,o.jsx)(j,{initialSlide:r,item:m.rz})]})]})]})})},N=()=>(0,o.jsxs)("div",{children:[(0,o.jsx)(c,{}),(0,o.jsx)(d.A,{}),(0,o.jsx)(x,{}),(0,o.jsx)(k,{}),(0,o.jsx)(u,{}),(0,o.jsx)(v,{})]})},879:(e,t,r)=>{r.d(t,{A:()=>o});r(43);var i=r(464),a=r(579);const s=i.Ay.section`
  padding: 100px 0;
  background-color: #fff;

  span {
    font-size: 20px;
  }

  .location {
    display: flex;
    gap: 4rem;
  }

  .loc_val,
  .view_val {
    font-family: "Cormorant Garamond", serif;
    font-size: 30px;
    line-height: 1.4;
  }

  .loc_alt,
  .view_desc,
  .hero_subtitle {
    color: #7e7367;
  }

  .view_val {
    position: relative;
  }

  .view_val::before {
    content: "";
    width: 9px;
    height: 9px;
    position: absolute;
    top: 7px;
    left: 40px;
    background-image: url(./circle.svg);
  }

  .container {
    padding: 0;
    display: flex;
    gap: 30px;
  }

  .hero_flex {
    padding-left: 6rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
  }

  .hero_suptitle,
  .hero_text {
    margin-bottom: 20px;
    color: #7e7367;
  }

  .hero_title {
    margin-bottom: 10px;
  }

  .hero_subtitle {
    font-size: 20px;
    font-weight: 300;
    margin-bottom: 1rem;
  }

  .hero_suptitle {
    text-transform: uppercase;
    margin-bottom: 50px;
  }

  .hero_text {
    line-height: 1.7;
  }

  picture {
    max-width: 55%;
  }

  .hero_img {
    height: 100%;
    object-fit: cover;
    border-bottom-left-radius: 50px;
    border-top-left-radius: 50px;
  }

  @media (max-width: 1024px) {
    .hero_flex {
      padding-left: 1rem;
    }
  }

  @media (max-width: 768px) {
    .container {
      padding: 0 1rem;
      flex-direction: column;
      gap: 30px;
    }

    picture {
      max-width: 100%;
    }

    .hero_flex {
      padding-left: 0;
    }

    .hero_img {
      max-width: 100%;
      border-radius: 30px;
    }
  }
`,o=()=>(0,a.jsx)(s,{id:"aboutUs",children:(0,a.jsxs)("div",{className:"container",children:[(0,a.jsxs)("div",{className:"hero_flex",children:[(0,a.jsx)("h2",{className:"hero_title",children:"About Us"}),(0,a.jsx)("h1",{className:"hero_subtitle",children:"Muras Guest House & Yurt Camp \u2013 Alay Valley, Kyrgyzstan"}),(0,a.jsx)("p",{className:"hero_suptitle",children:"A cozy basecamp for exploring the wild beauty of the Alay Valley"}),(0,a.jsx)("p",{className:"hero_text",children:"Nestled at the gateway to the Pamir and Tien Shan ranges, Muras Guest House offers modern comfort with an authentic Kyrgyz spirit. Our rooms overlook sweeping valleys, glacier-fed rivers, and towering peaks that change colors with the light."}),(0,a.jsx)("p",{className:"hero_text",children:"Whether you are trekking, touring, or simply unwinding, our team is here to help you experience the best of local nature, culture, and cuisine. Enjoy homemade meals, guided excursions, and quiet evenings under the stars."}),(0,a.jsxs)("div",{className:"location",children:[(0,a.jsxs)("div",{className:"altitude",children:[(0,a.jsxs)("p",{className:"loc_val",children:["3000",(0,a.jsx)("span",{children:"m"})]}),(0,a.jsx)("p",{className:"loc_alt",children:"Altitude"})]}),(0,a.jsxs)("div",{className:"view",children:[(0,a.jsx)("p",{className:"view_val",children:"360"}),(0,a.jsx)("p",{className:"view_desc",children:"Mountain views"})]})]})]}),(0,a.jsxs)("picture",{children:[(0,a.jsx)("source",{srcSet:"./14_hotel-back-view_768.webp",media:"(max-width: 768px)"}),(0,a.jsx)("img",{className:"hero_img",src:"./14_hotel-back-view.webp",alt:"Muras Guest House"})]})]})})}}]);
//# sourceMappingURL=204.bb164cf2.chunk.js.map
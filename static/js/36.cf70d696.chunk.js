"use strict";(self.webpackChunkmuras_guest_house=self.webpackChunkmuras_guest_house||[]).push([[36,626],{398:(e,i,r)=>{r.r(i),r.d(i,{default:()=>c});r(43);var t=r(464),a=r(626),s=r(579);const n=t.Ay.div`
  display: flex;
  justify-content: center;
  flex: 1;

  .hidden {
    display: none;
  }

  .service-card {
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .service-img {
    margin-bottom: 1rem;
  }

  .service-title {
    margin-bottom: 1.5rem;
  }

  .service-description,
  .service-menu {
    color: #7e7367;
    margin-bottom: 1.5rem;
    text-align: center;
  }

  .service-price {
    font-family: "Cormorant Garamond", serif;
    font-style: italic;
    font-size: 24px;
    color: #000;
    border-radius: 5px;
  }

  @media (max-width: 1024px) {
    .service-card {
      padding: 0;
    }
  }

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`,l=e=>{let{service:i,className:r}=e;return(0,s.jsx)(n,{children:i.map((e,i)=>{let{title:t,description:a,menu:n,price:l,image:{url:o,alt:d}}=e;return(0,s.jsxs)("div",{className:"service-card",children:[(0,s.jsx)("img",{src:o,alt:d,className:"service-img",width:"24px",height:"24px"}),(0,s.jsx)("h3",{className:"service-title",children:t}),(0,s.jsx)("p",{className:"service-description",children:a}),(0,s.jsx)("p",{className:`service-menu ${r}`,children:`Menu: ${n}`}),(0,s.jsx)("p",{className:"service-price",children:l})]},i)})})};var o=r(708);const d=t.Ay.section`
  padding-top: 60px;
  margin-bottom: 6rem;
  background-color: #fff;

  .flex_cont {
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-bottom: 6rem;
  }

  .title {
    width: 100%;
    text-align: center;
    padding-bottom: 1rem;
    margin-top: 2rem;
  }

  .suptitle {
    text-transform: uppercase;
    text-align: center;
    color: #7e7367;
    padding-bottom: 3rem;
    margin-bottom: 4rem;
    border-bottom: 1px solid #e2ded2;
  }

  @media (max-width: 1024px) {
    .flex_cont {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 2rem;

      &:nth-child(n + 2) {
        gap: 6rem;
      }
    }
  }

  @media (max-width: 768px) {
    .container {
      padding: 0;
    }

    .flex_cont {
      flex-direction: column;
    }
  }
`,c=()=>(0,s.jsxs)(d,{className:"services",children:[(0,s.jsx)("h1",{className:"title",children:"Our Services"}),(0,s.jsx)("p",{className:"suptitle",children:"What we offer"}),(0,s.jsxs)("div",{className:"container",children:[(0,s.jsxs)("div",{className:"flex_cont",children:[(0,s.jsx)(l,{service:o.wJ.mealsInfo,className:""}),(0,s.jsx)(a.default,{item:o.Wl,className:"mini_gallery"})]}),(0,s.jsxs)("div",{className:"flex_cont",children:[(0,s.jsx)(l,{service:o.wJ.transferInfo,className:"hidden"}),(0,s.jsx)(l,{service:o.wJ.toursInfo,className:"hidden"})]}),(0,s.jsxs)("div",{className:"flex_cont",children:[(0,s.jsx)(l,{service:o.wJ.campingInfo,className:"hidden"}),(0,s.jsx)(l,{service:o.wJ.laundryInfo,className:"hidden"})]})]})]})},626:(e,i,r)=>{r.r(i),r.d(i,{default:()=>l});var t=r(464),a=r(43),s=r(584),n=(r(986),r(579));const l=e=>{let{initialSlide:i,className:r,item:t}=e;const[l,c]=(0,a.useState)(i),[m,p]=(0,a.useState)(!1),[x,h]=(0,s.E)({initial:i,loop:!0,rubberband:!1,renderMode:"performance",slides:{spacing:5},slideChanged(e){c(e.track.details.rel)},created(){p(!0)}});return(0,n.jsxs)(d,{className:r,children:[(0,n.jsxs)("div",{className:"navigation-wrapper",children:[(0,n.jsx)("div",{ref:x,className:"keen-slider",children:t.map((e,i)=>{let{url:r,alt:t,type:a}=e;return"image"===a?(0,n.jsx)("img",{className:"keen-slider__slide",src:r,alt:t||`gallery-image-${i}`,loading:"lazy"},i):(0,n.jsx)("video",{autoPlay:!0,muted:!0,loop:!0,playsInline:!0,className:"keen-slider__slide",children:(0,n.jsx)("source",{src:r,type:"video/mp4"})},i)})}),m&&h.current&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o,{left:!0,onClick:e=>{var i;return e.stopPropagation()||(null===(i=h.current)||void 0===i?void 0:i.prev())},disabled:0===l}),(0,n.jsx)(o,{onClick:e=>{var i;return e.stopPropagation()||(null===(i=h.current)||void 0===i?void 0:i.next())},disabled:l===h.current.track.details.slides.length-1})]})]}),m&&h.current&&(0,n.jsx)("div",{className:"dots",children:[...Array(h.current.track.details.slides.length).keys()].map(e=>(0,n.jsx)("button",{"aria-label":"Pagination dots",onClick:()=>{var i;null===(i=h.current)||void 0===i||i.moveToIdx(e)},className:"dot"+(l===e?" active":""),children:(0,n.jsx)("span",{className:"dot_inner"})},e))})]})};function o(e){const i=e.disabled?" arrow--disabled":"";return(0,n.jsxs)("svg",{onClick:e.onClick,className:`arrow ${e.left?"arrow--left":"arrow--right"} ${i}`,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[e.left&&(0,n.jsx)("path",{d:"M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"}),!e.left&&(0,n.jsx)("path",{d:"M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"})]})}const d=t.Ay.div`
  max-width: 800px;
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;

  .keen-slider__slide {
    will-change: transform;
    will-change: transform, opacity;
  }

  &.mini_gallery {
    max-width: 50%;
    position: static;
    transform: none;

    @media (max-width: 768px) {
      max-width: 100%;
    }
  }

  img {
    object-fit: cover;
    aspect-ratio: 4/3;
    filter: contrast(100%) brightness(100%) saturate(120%);
  }

  video {
    aspect-ratio: 4/3;
    object-fit: cover;
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
    fill: #fff;
    cursor: pointer;
  }

  .arrow--left {
    left: 5px;
  }

  .arrow--right {
    left: auto;
    right: 5px;
  }

  .arrow--disabled {
    fill: rgba(255, 255, 255, 0.9);
  }

  @media (max-width: 1024px) {
    align-self: center;
  }

  @media (max-width: 768px) {
    padding: 0;
  }
`}}]);
//# sourceMappingURL=36.cf70d696.chunk.js.map
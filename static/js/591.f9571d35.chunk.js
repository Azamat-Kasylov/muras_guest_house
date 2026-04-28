"use strict";(self.webpackChunkmuras_guest_house=self.webpackChunkmuras_guest_house||[]).push([[591,626],{626:(e,t,r)=>{r.r(t),r.d(t,{default:()=>n});var a=r(464),i=r(43),o=r(584),s=(r(986),r(579));const n=e=>{let{initialSlide:t,className:r,item:a}=e;const[n,c]=(0,i.useState)(t),[m,p]=(0,i.useState)(!1),[x,h]=(0,o.E)({initial:t,loop:!0,rubberband:!1,renderMode:"performance",slides:{spacing:5},slideChanged(e){c(e.track.details.rel)},created(){p(!0)}});return(0,s.jsxs)(d,{className:r,children:[(0,s.jsxs)("div",{className:"navigation-wrapper",children:[(0,s.jsx)("div",{ref:x,className:"keen-slider",children:a.map((e,t)=>{let{url:r,alt:a,type:i}=e;return"image"===i?(0,s.jsx)("img",{className:"keen-slider__slide",src:r,alt:a||`gallery-image-${t}`,loading:"lazy"},t):(0,s.jsx)("video",{autoPlay:!0,muted:!0,loop:!0,playsInline:!0,className:"keen-slider__slide",children:(0,s.jsx)("source",{src:r,type:"video/mp4"})},t)})}),m&&h.current&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l,{left:!0,onClick:e=>{var t;return e.stopPropagation()||(null===(t=h.current)||void 0===t?void 0:t.prev())},disabled:0===n}),(0,s.jsx)(l,{onClick:e=>{var t;return e.stopPropagation()||(null===(t=h.current)||void 0===t?void 0:t.next())},disabled:n===h.current.track.details.slides.length-1})]})]}),m&&h.current&&(0,s.jsx)("div",{className:"dots",children:[...Array(h.current.track.details.slides.length).keys()].map(e=>(0,s.jsx)("button",{"aria-label":"Pagination dots",onClick:()=>{var t;null===(t=h.current)||void 0===t||t.moveToIdx(e)},className:"dot"+(n===e?" active":""),children:(0,s.jsx)("span",{className:"dot_inner"})},e))})]})};function l(e){const t=e.disabled?" arrow--disabled":"";return(0,s.jsxs)("svg",{onClick:e.onClick,className:`arrow ${e.left?"arrow--left":"arrow--right"} ${t}`,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[e.left&&(0,s.jsx)("path",{d:"M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"}),!e.left&&(0,s.jsx)("path",{d:"M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"})]})}const d=a.Ay.div`
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
`},651:(e,t,r)=>{r.r(t),r.d(t,{default:()=>c});r(43);var a=r(464),i=r(579);const o=a.Ay.div`
  display: flex;
  justify-content: center;

  .room-card {
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .room-title {
    margin-bottom: 1.5rem;
  }

  .room-description {
    color: #7e7367;
    margin-bottom: 1.5rem;
    text-align: center;
  }

  .room-price {
    font-family: "Cormorant Garamond", serif;
    font-style: italic;
    font-size: 24px;
    color: #000;
    border-radius: 5px;
  }

  @media (max-width: 1024px) {
    .room-card {
      padding: 0;
    }
  }

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`,s=e=>{let{rooms:t}=e;return(0,i.jsx)(o,{children:t.map((e,t)=>(0,i.jsxs)("div",{className:"room-card",children:[(0,i.jsx)("h3",{className:"room-title",children:e.title}),(0,i.jsx)("p",{className:"room-description",children:e.description}),(0,i.jsx)("p",{className:"room-price",children:e.price})]},t))})};var n=r(708),l=r(626);const d=a.Ay.section`
  padding-top: 60px;
  background-color: #fff;

  .flex_cont {
    width: 100%;
    display: flex;
    gap: 2rem;
    margin-bottom: 6rem;

    &:nth-child(2) {
      flex-direction: row-reverse;
    }
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

      &:nth-child(2) {
        flex-direction: column;
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
`,c=()=>(0,i.jsxs)(d,{className:"rooms",children:[(0,i.jsx)("h1",{className:"title",children:"Room Types"}),(0,i.jsx)("p",{className:"suptitle",children:"Choose the stay that suits your journey"}),(0,i.jsxs)("div",{className:"container",children:[(0,i.jsxs)("div",{className:"flex_cont",children:[(0,i.jsx)(s,{rooms:n.hj.yurtInfo}),(0,i.jsx)(l.default,{item:n.x_.yurtImages,className:"mini_gallery"})]}),(0,i.jsxs)("div",{className:"flex_cont",children:[(0,i.jsx)(s,{rooms:n.hj.standardRoomInfo}),(0,i.jsx)(l.default,{item:n.x_.standardRoomImages,className:"mini_gallery"})]}),(0,i.jsxs)("div",{className:"flex_cont",children:[(0,i.jsx)(s,{rooms:n.hj.comfortRoomInfo}),(0,i.jsx)(l.default,{item:n.x_.comfortRoomImages,className:"mini_gallery"})]})]})]})}}]);
//# sourceMappingURL=591.f9571d35.chunk.js.map
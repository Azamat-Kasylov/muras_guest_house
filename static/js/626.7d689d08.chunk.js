"use strict";(self.webpackChunkmuras_guest_house=self.webpackChunkmuras_guest_house||[]).push([[626],{626:(e,t,a)=>{a.r(t),a.d(t,{default:()=>o});var r=a(464),i=a(43),s=a(584),n=(a(986),a(579));const o=e=>{let{initialSlide:t,className:a,item:r}=e;const[o,c]=(0,i.useState)(t),[p,u]=(0,i.useState)(!1),[h,m]=(0,s.E)({initial:t,loop:!0,rubberband:!1,renderMode:"performance",slides:{spacing:5},slideChanged(e){c(e.track.details.rel)},created(){u(!0)}});return(0,n.jsxs)(d,{className:a,children:[(0,n.jsxs)("div",{className:"navigation-wrapper",children:[(0,n.jsx)("div",{ref:h,className:"keen-slider",children:r.map((e,t)=>{let{url:a,alt:r,type:i}=e;return"image"===i?(0,n.jsx)("img",{className:"keen-slider__slide",src:a,alt:r||`gallery-image-${t}`,loading:"lazy"},t):(0,n.jsx)("video",{autoPlay:!0,muted:!0,loop:!0,playsInline:!0,className:"keen-slider__slide",children:(0,n.jsx)("source",{src:a,type:"video/mp4"})},t)})}),p&&m.current&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l,{left:!0,onClick:e=>{var t;return e.stopPropagation()||(null===(t=m.current)||void 0===t?void 0:t.prev())},disabled:0===o}),(0,n.jsx)(l,{onClick:e=>{var t;return e.stopPropagation()||(null===(t=m.current)||void 0===t?void 0:t.next())},disabled:o===m.current.track.details.slides.length-1})]})]}),p&&m.current&&(0,n.jsx)("div",{className:"dots",children:[...Array(m.current.track.details.slides.length).keys()].map(e=>(0,n.jsx)("button",{"aria-label":"Pagination dots",onClick:()=>{var t;null===(t=m.current)||void 0===t||t.moveToIdx(e)},className:"dot"+(o===e?" active":""),children:(0,n.jsx)("span",{className:"dot_inner"})},e))})]})};function l(e){const t=e.disabled?" arrow--disabled":"";return(0,n.jsxs)("svg",{onClick:e.onClick,className:`arrow ${e.left?"arrow--left":"arrow--right"} ${t}`,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[e.left&&(0,n.jsx)("path",{d:"M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"}),!e.left&&(0,n.jsx)("path",{d:"M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"})]})}const d=r.Ay.div`
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
//# sourceMappingURL=626.7d689d08.chunk.js.map
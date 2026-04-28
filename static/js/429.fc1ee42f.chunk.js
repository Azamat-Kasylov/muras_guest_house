"use strict";(self.webpackChunkmuras_guest_house=self.webpackChunkmuras_guest_house||[]).push([[147,429],{147:(e,a,i)=>{i.r(a),i.d(a,{default:()=>n});i(43);var t=i(464),s=i(579);const l=t.Ay.div`
  position: fixed;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 89;
`,n=e=>{let{setIsOpen:a,isOpen:i}=e;return(0,s.jsx)(l,{className:"popup",onClick:()=>{"number"===typeof i?a(null):"boolean"===typeof i&&a(!i)}})}},429:(e,a,i)=>{i.r(a),i.d(a,{default:()=>p});var t=i(464),s=i(708),l=i(43),n=i(147),o=i(579);const r=t.Ay.div`
  display: flex;
  align-self: center;
  gap: 20px;
  z-index: 10;

  img {
    object-fit: cover;
    filter: grayscale(120%) sepia(20%) contrast(70%);

    &:hover {
      cursor: pointer;
    }
  }

  .popupHiddenImage {
    visibility: hidden;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 100;
    max-width: 80vw;
    max-height: 70vh;
    background-color: #fff;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
    filter: none;

    @media (max-height: 450px) {
      max-width: calc(100% - 2rem);
      max-height: 60vh;
    }
  }

  .active {
    visibility: visible;
  }

  @media (max-width: 768px) {
    align-self: flex-start;
  }
`,p=()=>{const[e,a]=(0,l.useState)(null),i=e=>{a(e)};return(0,o.jsxs)(r,{children:[s.e_.map((e,a)=>(0,o.jsx)("img",{src:e.url,alt:e.alt,className:e.className,onClick:()=>i(a),loading:"lazy",width:"64px",height:"64px"},a)),s.KW.map((a,t)=>(0,o.jsx)("img",{src:a.url,alt:a.alt,className:"popupHiddenImage "+(t===e?"active":""),onClick:()=>i(t),loading:"lazy"},t)),null!==e&&(0,o.jsx)(n.default,{isOpen:e,setIsOpen:a})]})}}}]);
//# sourceMappingURL=429.fc1ee42f.chunk.js.map
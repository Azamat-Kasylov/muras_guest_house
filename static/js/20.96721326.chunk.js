"use strict";(self.webpackChunkmuras_guest_house=self.webpackChunkmuras_guest_house||[]).push([[20],{20:(e,a,r)=>{r.r(a),r.d(a,{default:()=>f});var s=r(464),t=r(43),i=r(579);const l=s.Ay.div`
  width: 100%;
  min-height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 101;
`,o=s.Ay.div`
  font-family: "Montserrat", sans-serif;
  padding: 40px 20px;
  width: calc(100% - 32px);
  position: absolute;
  bottom: 210px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  background: #fff;
  border: 1px solid #b8b8b8;
  min-width: 300px;
  margin: 0 auto;
  border-radius: 10px;
  font-size: 24px;
  text-align: center;

  @media (max-height: 450px) {
    bottom: 20px;
  }
`,n=s.Ay.button`
  padding: 10px 40px;
  display: block;
  margin: 1rem auto 0;
  font-size: 16px;
  color: #fff;
  background-color: #a6623f;
  border: none;
  border-radius: 10px;
  transition: background-color 0.3s;
  justify-content: center;
`,d=e=>{let{onButtonClick:a}=e;return(0,i.jsx)(l,{children:(0,i.jsxs)(o,{children:["Your message was successfully sended",(0,i.jsx)(n,{onClick:()=>a(),children:"Ok"})]})})},m=s.Ay.p`
  width: 100%;
  color: red;
  font-size: 13px;
  text-align: center;
  position: absolute;
`,c=e=>{let{children:a,className:r=""}=e;return(0,i.jsx)(m,{className:r,children:a})};var u=r(858),p=r(452);const b=s.Ay.form`
  width: 100%;
  height: 90px;
  background-color: #f8f6f2;
  padding: 0 6rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  gap: 15px;

  .name_label,
  .email_label {
    position: relative;
  }

  .row label {
    display: none;
  }

  label {
    width: 100%;
  }

  input {
    font-size: 16px;
    min-height: 44px;
    width: 100%;
    color: #757575;
    background-color: #f8f6f2;
    border: none;
    border-bottom: 1px solid #bfbdb6;

    &:focus {
      outline: none;
      box-shadow: none;
      border-color: #a6623f;
    }
  }

  .errorName,
  .errorEmail {
    top: 50%;
    left: 50%;
    transform: translate(-50%);
  }

  .submit {
    width: 100%;
    color: #fff;
    background-color: #a6623f;
    border: none;
    transition:
      background-color 0.3s,
      border-color 0.3s;
  }

  .row {
    display: flex;
    gap: 15px;
  }

  @media (max-width: 1024px) {
    .form {
      padding: 0 1rem;
    }
  }

  @media (max-width: 768px) {
    height: 250px;
    grid-template-columns: 1fr;
    padding: 0 1rem;
    padding-bottom: 12px;

    .name {
      margin-top: 12px;
    }
  }
`,f=()=>{var e,a;const r=(new Date).toISOString().split("T")[0],[s,l]=(0,t.useState)(!1),o=(0,t.useRef)(null),{register:n,formState:{isSubmitSuccessful:m,errors:f},handleSubmit:x,reset:h}=(0,u.mN)({defaultValues:{date:r}}),g=null===(e=f.name)||void 0===e?void 0:e.message,w=null===(a=f.email)||void 0===a?void 0:a.message;return(0,i.jsxs)(b,{onSubmit:x(async e=>{l(!0);try{const a="service_9blvf3i",r="template_7rlpvzn",s="yuYAjgZBihYch7Jec";if(!a||!r||!s)throw new Error("Email service is not configured properly");const t={to_email:"follower.az@gmail.com",from_name:e.name,from_email:e.email,guests:e.guests||1,date:e.date,reply_to:e.email};await p.Ay.send(a,r,t,s)}catch(a){console.error("\u041e\u0448\u0438\u0431\u043a\u0430 \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0438:",a),alert("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u044f\u0432\u043a\u0443. \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043f\u043e\u0437\u0436\u0435.")}finally{l(!1)}}),className:"form_wrapper",ref:o,children:[(0,i.jsxs)("label",{className:"name_label",htmlFor:"userName",children:[(0,i.jsx)("input",{className:"name",type:"text",id:"userName",placeholder:"Name",disabled:s,...n("name",{required:"This field is required"})}),g&&(0,i.jsx)(c,{className:"errorName",children:g})]}),(0,i.jsxs)("label",{className:"email_label",htmlFor:"userEmail",children:[(0,i.jsx)("input",{className:"email",type:"text",id:"userEmail",placeholder:"Email",disabled:s,...n("email",{required:"This field is required",pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,message:"Invalid email address"}})}),w&&(0,i.jsx)(c,{className:"errorEmail",children:w})]}),(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("label",{htmlFor:"dateIn",className:"date_label"}),(0,i.jsx)("input",{className:"check-in",type:"date",id:"dateIn","aria-label":"Check-in date",disabled:s,...n("date")}),(0,i.jsx)("label",{htmlFor:"guestsCount"}),(0,i.jsx)("input",{className:"guests",type:"number",id:"guestsCount",placeholder:"Guests",disabled:s,...n("guests")})]}),(0,i.jsx)("label",{htmlFor:"formSubmit",children:(0,i.jsx)("input",{className:"submit",type:"submit",id:"formSubmit",value:s?"Sending...":"Inquire Now",disabled:s})}),m&&(0,i.jsx)(d,{onButtonClick:h})]})}}}]);
//# sourceMappingURL=20.96721326.chunk.js.map
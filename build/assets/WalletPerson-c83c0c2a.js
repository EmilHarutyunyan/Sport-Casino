import{s as o,t as W,r as p,a as C,b as E,d as _,c as z,u as F,n as I,e as m,f as S,j as e,m as B,v as P,w as f}from"./index-2c2d5aef.js";import{a as $}from"./arrowBack-55402868.js";import{c as D,b as O,u as H,o as L}from"./object-7d545556.js";const M=o.section``,N=o.div`
  display: flex;
  gap: 12px;
  align-items: center;

  img {
    cursor: pointer;
    object-fit: cover;
  }
  h2 {
    font-weight: 600;
    font-size: 32px;
    line-height: 42px;
  }
`,R=o.form`
  width: 100%;
  max-width: 792px;
  margin: 16px 0;
`,U=o.div`
  display: flex;
  align-items: center;
  gap: 32px;
  flex-wrap: wrap;
 
`,T=o.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 24px;
  margin-top: 32px;
  button[type="submit"] {
    background: var(--gradient-blue);
    border: none;
  }
  button {
    border: 1px solid var(--color-blue);
    padding: 10px 50px;
    border-radius: 8px;
    color: var(--color-white);
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    transform: var(--transition);
    margin-top: 20px;
  }
  button:hover {
    opacity: 0.9;
    transform: var(--transition);
  }
`,X=o.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  margin-top: 16px;
  .switchWrap {
    display: flex;
    align-items: center;
    gap: 16px;
  }
  .switch {
    position: relative;
    display: inline-block;
    width: 29px;
    height: 17px;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 14px;
    width: 14px;
    left: 3px;
    bottom: 2px;
    background-color: white;
    transition: all 0.4s ease 0s;
  }

  input + .slider {
    background: #4caf50;
  }


  input:checked + .slider:before {
    transform: translateX(8px);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`,q=o.div`
  max-width: 376px;
  width: 100%;
  position: relative;

  label {
    display: block;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 4px;
  }
  .PhoneInput {
    outline: ${t=>t.error?"1px solid red":"1px solid var(--color-white)"};
    display: flex;
    align-items: center;
    outline: 1px solid var(--color-white);
    border-radius: 8px;
    background-color: var(--color-dark-gray);
    border: none;
    color: var(--color-white);
    width: 100%;
    padding: 8px 40px 8px 16px;
    min-height: 40px;
  }
  input[type="tel"] {
    border-radius: 8px;
    background-color: transparent;
    border: none;
    color: var(--color-white);
    width: 100%;
    ::placeholder {
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;
      color: var(--color-white);
    }
  }
  select {
    outline: ${t=>t.error?"1px solid red":"1px solid var(--color-white)"};
    border-radius: 8px;
    background-color: var(--color-dark-gray);
    border: none;
    color: var(--color-white);
    width: 100%;
    padding: 8px 40px 8px 16px;
    min-height: 40px;
    ::placeholder {
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;
      color: var(--color-white);
    }
    option {
      color: var(--color-dark-gray);
    }
  }
  input:disabled {
    background: #42464c;
    color: var(--color-white);
    opacity: 1;
    ::placeholder {
      color: var(--color-white);
    }
  }
`,A=o.input`
  outline: ${t=>t.error?"1px solid red":"1px solid var(--color-white)"};
  width: 100%;
  height: 40px;
  color: var(--color-white);
  background-color: var(--color-dark-gray);
  border-radius: 8px;
  padding: 8px 9px 8px 16px;
  ::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
  }
`,G=o.div`
  color: red;
  opacity: ${t=>t.visible?"1":"0"};
  position: absolute;
  top: 110%;
`,J=D().shape({amount:O().typeError("Please set cash").min(0)}),Y=()=>{var x,u,g,b;const{id:t}=W(),[l,w]=p.useState(!0),{userInfo:d,message:c}=C(E),{state:i}=_(),s=z(),h=F();t||h(-1);const{register:v,handleSubmit:y,formState:{errors:r},reset:j}=H({mode:"onBlur",resolver:L(J,{stripUnknown:!0,abortEarly:!1})}),k=async a=>{let n;l?(n={...a,receiver_id:t,sender_id:d.user._id},s(f(n))):(n={...a,receiver_id:d.user._id,sender_id:t},s(f(n))),j()};return p.useEffect(()=>{c&&(I(c),s(m(null)))},[c]),p.useEffect(()=>()=>{s(S(null)),s(m(null))},[]),e.jsxs(M,{children:[e.jsx(B,{position:"top-center",autoClose:3e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"dark"}),e.jsxs(N,{children:[e.jsx("img",{src:$,alt:"arrow",onClick:()=>h(-1)}),e.jsx("h2",{children:i==null?void 0:i.user_name})]}),e.jsxs(X,{children:[e.jsx(P,{disableCase:!0,cash:i==null?void 0:i.ballance}),e.jsxs("div",{className:"switchWrap",children:[e.jsx("p",{children:"WithDraw"}),e.jsxs("label",{class:"switch",children:[e.jsx("input",{type:"checkbox",checked:l,onChange:()=>w(a=>!a)}),e.jsx("span",{class:"slider round"})]}),e.jsx("p",{children:"Deposit"})]})]}),e.jsxs(R,{onSubmit:y(k),children:[e.jsx(U,{children:e.jsxs(q,{children:[e.jsx("label",{children:"Cashable"}),((x=r==null?void 0:r.amount)==null?void 0:x.message)&&e.jsx(G,{visible:(u=r==null?void 0:r.amount)==null?void 0:u.message,children:(g=r==null?void 0:r.amount)==null?void 0:g.message}),e.jsx(A,{error:(b=r==null?void 0:r.amount)==null?void 0:b.message,placeholder:"0",...v("amount")})]})}),e.jsx(T,{children:e.jsx("button",{type:"submit",children:l?"Deposit":"Withdraw"})})]})]})};export{Y as default};

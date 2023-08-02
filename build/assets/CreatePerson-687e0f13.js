import{s as o,d as G,a as J,b as K,r as c,u as Q,c as X,n as Y,f as ee,e as ae,j as a,m as se,l as t,o as ie,p as U,q as x}from"./index-2c2d5aef.js";import{P as oe}from"./index-3cc1e455.js";import{c as ne,a as p,u as te,o as re}from"./object-7d545556.js";import{a as le}from"./arrowBack-55402868.js";import{S as pe}from"./Spinner-1ed13e17.js";const de=o.section``,ce=o.div`
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
`,me=o.form`
  width: 100%;
  max-width: 792px;
  margin: 16px 0;
`,he=o.div`
  display: flex;
  align-items: center;
  gap: 32px;
  flex-wrap: wrap;
`,ue=o.div`
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
    height: 44px;
  }
  button:hover {
    opacity: 0.9;
    transform: var(--transition);
  }
`,d=o.div`
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
    outline: ${s=>s.error?"1px solid red":"1px solid var(--color-white)"};
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
    outline: ${s=>s.error?"1px solid red":"1px solid var(--color-white)"};
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
`,m=o.input`
  outline: ${s=>s.error?"1px solid red":"1px solid var(--color-white)"};
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
`,r=o.div`
  color: red;
  opacity: ${s=>s.visible?"1":"0"};
  position: absolute;
  top: 110%;
`,xe=o.div`
  position: relative;
  div {
    position: inherit;
    text-align: center;
    margin-bottom: 5px;
  }
`,ge=ne().shape({full_name:p().required("Full name is a required field"),user_name:p().required("User name is a required field"),email:p().email("Email should have correct format").required("Email is a required field"),password:p().max(32).required("No password provided.").min(6,"Password is too short - should be 8 chars minimum.").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,"Minimum 6 characters, at least one uppercase letter, one lowercase letter and one number:"),phone_number:p().required("Phone number is required")}),ye=()=>{var b,v,w,j,y,_,k,C,E,P,q,z,F,S,I,W,$,B,N,O;const{state:s}=G();console.log("roleState :",s);const{message:h,loading:A,error:u}=J(K),[g,M]=c.useState(),f=Q(),n=X();!s&&!(s!=null&&s.role)&&f(-1);const{register:l,handleSubmit:D,clearErrors:H,formState:{errors:e},setValue:L,reset:R}=te({mode:"onBlur",resolver:re(ge,{stripUnknown:!0,abortEarly:!1})}),T=c.useCallback((i,Z)=>{L(i,Z,{shouldDirty:!0}),H(i)},[g]),V=i=>{s.role===t.admin&&(s.position===t.super_agent&&n(ie(i)),s.position===t.agent&&n(U(i)),s.position===t.player&&n(x(i))),s.role===t.super_agent&&(s.position===t.agent&&n(U(i)),s.position===t.player&&n(x(i))),s.role===t.agent&&n(x(i)),R()};return c.useEffect(()=>{h&&Y(h)},[h]),c.useEffect(()=>()=>{n(ee(null)),n(ae(null))},[]),a.jsxs(de,{children:[a.jsx(se,{position:"top-center",autoClose:3e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"dark"}),a.jsxs(ce,{children:[a.jsx("img",{src:le,alt:"arrow",onClick:()=>f(-1)}),a.jsxs("h2",{children:["Created ",s==null?void 0:s.title]})]}),a.jsxs(me,{onSubmit:D(V),children:[u&&a.jsx(xe,{children:a.jsx(r,{visible:u,children:u})}),a.jsxs(he,{children:[a.jsxs(d,{children:[a.jsx("label",{children:"Full Name"}),((b=e==null?void 0:e.full_name)==null?void 0:b.message)&&a.jsx(r,{visible:(v=e==null?void 0:e.full_name)==null?void 0:v.message,children:(w=e==null?void 0:e.full_name)==null?void 0:w.message}),a.jsx(m,{error:(j=e==null?void 0:e.full_name)==null?void 0:j.message,placeholder:"Full name",...l("full_name")})]}),a.jsxs(d,{children:[a.jsx("label",{children:"Email"}),((y=e==null?void 0:e.email)==null?void 0:y.message)&&a.jsx(r,{visible:(_=e==null?void 0:e.email)==null?void 0:_.message,children:(k=e==null?void 0:e.email)==null?void 0:k.message}),a.jsx(m,{error:(C=e==null?void 0:e.email)==null?void 0:C.message,placeholder:"Email",...l("email")})]}),a.jsxs(d,{error:(E=e==null?void 0:e.phone_number)==null?void 0:E.message,children:[a.jsx("label",{children:"Phone"}),((P=e==null?void 0:e.phone_number)==null?void 0:P.message)&&a.jsx(r,{visible:(q=e==null?void 0:e.phone_number)==null?void 0:q.message,children:(z=e==null?void 0:e.phone_number)==null?void 0:z.message}),a.jsx(oe,{value:g,onChange:i=>{T("phone_number",i),M(i)},placeholder:"Phone Number"}),a.jsx("input",{type:"tel",...l("phone_number"),style:{display:"none"}})]}),a.jsxs(d,{children:[a.jsx("label",{children:"User name"}),((F=e==null?void 0:e.user_name)==null?void 0:F.message)&&a.jsx(r,{visible:(S=e==null?void 0:e.user_name)==null?void 0:S.message,children:(I=e==null?void 0:e.user_name)==null?void 0:I.message}),a.jsx(m,{error:(W=e==null?void 0:e.user_name)==null?void 0:W.message,placeholder:"Create username",...l("user_name")})]}),a.jsxs(d,{children:[a.jsx("label",{children:"Password"}),(($=e==null?void 0:e.password)==null?void 0:$.message)&&a.jsx(r,{visible:(B=e==null?void 0:e.password)==null?void 0:B.message,children:(N=e==null?void 0:e.password)==null?void 0:N.message}),a.jsx(m,{type:"password",error:(O=e==null?void 0:e.password)==null?void 0:O.message,placeholder:"Create password",...l("password"),autoComplete:"false"})]})]}),a.jsxs(ue,{children:[a.jsx("button",{children:"Cancel"}),a.jsx("button",{type:"submit",children:A?a.jsx(pe,{}):"Save"})]})]})]})};export{ye as default};

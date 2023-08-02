import{s as n,t as Y,r as V,d as ee,u as ae,j as a}from"./index-2c2d5aef.js";import{P as se}from"./index-3cc1e455.js";import{a as ie}from"./arrowBack-55402868.js";import{c as le,a as r,b as Z,d as oe,u as te,o as ne}from"./object-7d545556.js";const de=n.section``,re=n.div`
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
`,pe=n.form`
  width: 100%;
  max-width: 792px;
  margin: 16px 0;
`,ce=n.div`
  display: flex;
  align-items: center;
  gap: 32px;
  flex-wrap: wrap;
  
  
`,he=n.div`
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
`,i=n.div`
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
  input:disabled {
    background: #42464c;
    color: var(--color-white);
    opacity: 1;
    ::placeholder {
      color: var(--color-white);
    }
  }
`,o=n.input`
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
`,t=n.div`
  color: red;
  opacity: ${s=>s.visible?"1":"0"};
  position: absolute;
  top: 110%;
`,me=le().shape({fullName:r().required("Full name is a required field"),userName:r().required("User name is a required field"),email:r().email("Email should have correct format").required("Email is a required field"),password:r().min(8).max(32).required("No password provided.").min(8,"Password is too short - should be 8 chars minimum.").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,"Minimum 8 characters, at least one uppercase letter, one lowercase letter and one number:"),sportsShares:Z().min(0),casinoShares:Z().min(0),phoneNumber:r().required("Phone number is required"),confirmPwd:r().required("No password provided.").oneOf([oe("password")],"Passwords does not match")}),we=()=>{var h,m,x,u,g,b,w,j,f,v,y,N,S,P,k,C,q,E,$,z,F,I,W,B,M,R,U,A,D,H,L,O;Y();const[s,_]=V.useState(),{state:p}=ee(),c=ae();!p&&!p.title&&!p.role&&c(-1);const{register:l,handleSubmit:G,clearErrors:J,formState:{errors:e},setValue:K}=te({mode:"onBlur",resolver:ne(me,{stripUnknown:!0,abortEarly:!1})}),Q=V.useCallback((d,X)=>{K(d,X,{shouldDirty:!0}),J(d)},[s]),T=d=>{};return a.jsxs(de,{children:[a.jsxs(re,{children:[a.jsx("img",{src:ie,alt:"arrow",onClick:()=>c(-1)}),a.jsx("h2",{children:p.title})]}),a.jsxs(pe,{onSubmit:G(T),children:[a.jsxs(ce,{children:[a.jsxs(i,{children:[a.jsx("label",{children:"Full Name"}),((h=e==null?void 0:e.fullName)==null?void 0:h.message)&&a.jsx(t,{visible:(m=e==null?void 0:e.fullName)==null?void 0:m.message,children:(x=e==null?void 0:e.fullName)==null?void 0:x.message}),a.jsx(o,{error:(u=e==null?void 0:e.fullName)==null?void 0:u.message,placeholder:"Full name",...l("fullName")})]}),a.jsxs(i,{children:[a.jsx("label",{children:"Email"}),((g=e==null?void 0:e.email)==null?void 0:g.message)&&a.jsx(t,{visible:(b=e==null?void 0:e.email)==null?void 0:b.message,children:(w=e==null?void 0:e.email)==null?void 0:w.message}),a.jsx(o,{error:(j=e==null?void 0:e.email)==null?void 0:j.message,placeholder:"Email",...l("email")})]}),a.jsxs(i,{error:(f=e==null?void 0:e.phoneNumber)==null?void 0:f.message,children:[a.jsx("label",{children:"Phone"}),((v=e==null?void 0:e.phoneNumber)==null?void 0:v.message)&&a.jsx(t,{visible:(y=e==null?void 0:e.phoneNumber)==null?void 0:y.message,children:(N=e==null?void 0:e.phoneNumber)==null?void 0:N.message}),a.jsx(se,{value:s,onChange:d=>{Q("phoneNumber",d),_(d)},placeholder:"Phone Number"}),a.jsx("input",{type:"tel",...l("phoneNumber"),style:{display:"none"}})]}),a.jsxs(i,{children:[a.jsx("label",{children:"User name"}),((S=e==null?void 0:e.userName)==null?void 0:S.message)&&a.jsx(t,{visible:(P=e==null?void 0:e.userName)==null?void 0:P.message,children:(k=e==null?void 0:e.userName)==null?void 0:k.message}),a.jsx(o,{error:(C=e==null?void 0:e.userName)==null?void 0:C.message,placeholder:"Create username",...l("userName")})]}),a.jsxs(i,{children:[a.jsx("label",{children:"Sports Shares"}),((q=e==null?void 0:e.sportsShares)==null?void 0:q.message)&&a.jsx(t,{visible:(E=e==null?void 0:e.sportsShares)==null?void 0:E.message,children:($=e==null?void 0:e.sportsShares)==null?void 0:$.message}),a.jsx(o,{error:(z=e==null?void 0:e.sportsShares)==null?void 0:z.message,placeholder:"0",...l("sportsShares"),type:"number"})]}),a.jsxs(i,{children:[a.jsx("label",{children:"Casino Shares"}),((F=e==null?void 0:e.casinoShares)==null?void 0:F.message)&&a.jsx(t,{visible:(I=e==null?void 0:e.casinoShares)==null?void 0:I.message,children:(W=e==null?void 0:e.casinoShares)==null?void 0:W.message}),a.jsx(o,{error:(B=e==null?void 0:e.casinoShares)==null?void 0:B.message,placeholder:"0",...l("casinoShares"),type:"number"})]}),a.jsxs(i,{children:[a.jsx("label",{children:"Password"}),((M=e==null?void 0:e.password)==null?void 0:M.message)&&a.jsx(t,{visible:(R=e==null?void 0:e.password)==null?void 0:R.message,children:(U=e==null?void 0:e.password)==null?void 0:U.message}),a.jsx(o,{error:(A=e==null?void 0:e.password)==null?void 0:A.message,placeholder:"Create password",...l("password")})]}),a.jsxs(i,{children:[a.jsx("label",{children:"Repeat Password"}),((D=e==null?void 0:e.confirmPwd)==null?void 0:D.message)&&a.jsx(t,{visible:(H=e==null?void 0:e.confirmPwd)==null?void 0:H.message,children:(L=e==null?void 0:e.confirmPwd)==null?void 0:L.message}),a.jsx(o,{error:(O=e==null?void 0:e.confirmPwd)==null?void 0:O.message,placeholder:"Repeat new password",...l("confirmPwd")})]}),a.jsxs(i,{children:[a.jsx("label",{children:"Created"}),a.jsx(o,{disabled:!0,placeholder:"12 May 2023",type:"text"})]})]}),a.jsxs(he,{children:[a.jsx("button",{children:"Cancel"}),a.jsx("button",{type:"submit",children:"Create"})]})]})]})};export{we as default};

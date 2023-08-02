import{s as l,a as ie,b as se,r as u,c as le,n as te,e as ne,j as e,m as re,z as de,A as pe}from"./index-2c2d5aef.js";import{P as ce}from"./index-3cc1e455.js";import{T as D}from"./Title-b88b6682.js";import{c as J,a as r,d as me,u as R,o as H}from"./object-7d545556.js";const he=l.section``,L=l.form`
  width: 100%;
  max-width: 792px;
  margin: 16px 0;
`,Z=l.div`
  display: flex;
  align-items: center;
  gap: 32px;
  flex-wrap: wrap;
`,G=l.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 24px;
  margin-top: 32px;
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
`,n=l.div`
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
    outline: ${i=>i.error?"1px solid red":"1px solid var(--color-white)"};
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
    outline: ${i=>i.error?"1px solid red":"1px solid var(--color-white)"};
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
`,d=l.input`
  outline: ${i=>i.error?"1px solid red":"1px solid var(--color-white)"};
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
`,t=l.div`
  color: red;
  opacity: ${i=>i.visible?"1":"0"};
  position: absolute;
  top: 110%;
`,xe=l.div`
  position: relative;
  div {
    position: inherit;
    text-align: center;
    margin-bottom: 5px;
  }
`,ue=J().shape({full_name:r().required("Full name is a required field"),email:r().email("Email should have correct format"),phone_number:r().required("Phone number is required")}),ge=J().shape({old_password:r().required("Email is a required field"),password:r().min(8).max(32).required("No password provided.").min(8,"Password is too short - should be 8 chars minimum.").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,"Minimum 8 characters, at least one uppercase letter, one lowercase letter and one number:"),password_confirmation:r().required("No password provided.").oneOf([me("password")],"Passwords does not match")}),je=()=>{var b,w,f,v,j,_,y,k,S,E,q,z,F,C,$,O,M,N,W,B,U,V,T,A;const{userInfo:i,error:p,message:c}=ie(se),[g,K]=u.useState(i==null?void 0:i.user.phone_number),m=le(),{register:h,handleSubmit:Q,clearErrors:X,formState:{errors:a},setValue:Y}=R({mode:"onBlur",resolver:H(ue,{stripUnknown:!0,abortEarly:!1}),defaultValues:{full_name:(i==null?void 0:i.user.full_name)||"",phone_number:(i==null?void 0:i.user.phone_number)||"",email:(i==null?void 0:i.user.email)||""}}),{register:x,handleSubmit:I,formState:{errors:o}}=R({mode:"onBlur",resolver:H(ge)}),P=async s=>{m(de(s))},ee=async s=>{m(pe(s))},ae=u.useCallback((s,oe)=>{Y(s,oe,{shouldDirty:!0}),X(s)},[g]);return u.useEffect(()=>{c&&(te(c),m(ne(null)))},[c]),e.jsxs(he,{children:[e.jsx(D,{title:"My profile"}),e.jsx(re,{position:"top-center",autoClose:3e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"dark"}),e.jsxs(L,{onSubmit:Q(P),children:[p&&e.jsx(xe,{children:e.jsx(t,{visible:p,children:p})}),e.jsxs(Z,{children:[e.jsxs(n,{children:[e.jsx("label",{children:"Full Name"}),((b=a==null?void 0:a.full_name)==null?void 0:b.message)&&e.jsx(t,{visible:(w=a==null?void 0:a.full_name)==null?void 0:w.message,children:(f=a==null?void 0:a.full_name)==null?void 0:f.message}),e.jsx(d,{error:(v=a==null?void 0:a.full_name)==null?void 0:v.message,placeholder:"Full name",...h("full_name"),defaultValue:i==null?void 0:i.user.full_name})]}),e.jsxs(n,{children:[e.jsx("label",{children:"Email"}),((j=a==null?void 0:a.email)==null?void 0:j.message)&&e.jsx(t,{visible:(_=a==null?void 0:a.email)==null?void 0:_.message,children:(y=a==null?void 0:a.email)==null?void 0:y.message}),e.jsx(d,{error:(k=a==null?void 0:a.email)==null?void 0:k.message,placeholder:"Email",...h("email"),disabled:!0,defaultValue:i==null?void 0:i.user.email})]}),e.jsxs(n,{error:(S=a==null?void 0:a.phone_number)==null?void 0:S.message,children:[e.jsx("label",{children:"Phone"}),((E=a==null?void 0:a.phone_number)==null?void 0:E.message)&&e.jsx(t,{visible:(q=a==null?void 0:a.phone_number)==null?void 0:q.message,children:(z=a==null?void 0:a.phone_number)==null?void 0:z.message}),e.jsx(ce,{value:g,onChange:s=>{ae("phone_number",s),K(s)},placeholder:"Phone Number"}),e.jsx("input",{type:"tel",...h("phone_number"),style:{display:"none"}})]})]}),e.jsx(G,{children:e.jsx("button",{type:"submit",children:" Save"})})]}),e.jsx(D,{title:"Password",fontSize:"24px"}),e.jsxs(L,{onSubmit:I(ee),children:[e.jsxs(Z,{children:[e.jsxs(n,{children:[e.jsx("label",{children:"Old password"}),((F=o==null?void 0:o.old_password)==null?void 0:F.message)&&e.jsx(t,{visible:(C=o==null?void 0:o.old_password)==null?void 0:C.message,children:($=o==null?void 0:o.old_password)==null?void 0:$.message}),e.jsx(d,{type:"password",error:(O=o==null?void 0:o.password)==null?void 0:O.message,...x("old_password")})]}),e.jsxs(n,{children:[e.jsx("label",{children:"New password"}),((M=o==null?void 0:o.password)==null?void 0:M.message)&&e.jsx(t,{visible:(N=o==null?void 0:o.password)==null?void 0:N.message,children:(W=o==null?void 0:o.password)==null?void 0:W.message}),e.jsx(d,{type:"password",error:(B=o==null?void 0:o.password)==null?void 0:B.message,...x("password")})]}),e.jsxs(n,{children:[e.jsx("label",{children:"Repeat new password"}),((U=o==null?void 0:o.password_confirmation)==null?void 0:U.message)&&e.jsx(t,{visible:(V=o==null?void 0:o.password_confirmation)==null?void 0:V.message,children:(T=o==null?void 0:o.password_confirmation)==null?void 0:T.message}),e.jsx(d,{type:"password",error:(A=o==null?void 0:o.password_confirmation)==null?void 0:A.message,...x("password_confirmation")})]})]}),e.jsx(G,{children:e.jsx("button",{type:"submit",children:"Save"})})]})]})};export{je as default};

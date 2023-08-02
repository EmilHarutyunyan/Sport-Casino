import{s as t,t as j,a as w,b,r as l,c as v,u as y,x as _,j as e}from"./index-2c2d5aef.js";import{a as z}from"./arrowBack-55402868.js";import{S as V}from"./Spinner-1ed13e17.js";const W=t.section``,E=t.div`
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

    span {
      text-transform: capitalize;
    }
  }
`;t.form`
  width: 100%;
  max-width: 792px;
  margin: 16px 0;
`;t.div`
  display: flex;
  align-items: center;
  gap: 32px;
  flex-wrap: wrap;
`;t.div`
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
`;const S=t.div`
  display: flex;
  align-items: center;
  border-radius: 8px;
  background-color: var(--color-dark-gray);
  padding: 8px 16px;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
  hr {
    width: 1px;
    background-color: #42464c;
  }
  p {
    display: flex;
    flex-direction: column;
    text-align: center;
    span {
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      margin-bottom: 4px;
    }
  }
`,k=t.div`
      max-width: 440px;
    width: 100%;
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin-top: 32px;

`,U=t.div`
  display: flex;
  align-items: center;
  gap: 120px;
  justify-content: space-between;
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
`,B=t.div``,C=t.div``,A=()=>{var d;const{id:p}=j(),{userDetails:n,loading:f}=w(b),[r,c]=l.useState(null),g=v(),x=y();return p||x(-1),l.useEffect(()=>(g(_(p)),()=>c(null)),[]),l.useEffect(()=>{var i;if(n&&((i=n==null?void 0:n.user)==null?void 0:i.user_role)!=="player"){const{balance:a,email:s,full_name:h,user_name:m,attached_users:o,phone_number:u,user_role:I}=n;c({wallets:a,email:s,full_name:h,user_name:m,players:o==null?void 0:o.length,phone_number:u})}},[n]),f?e.jsx(V,{}):e.jsx(W,{children:r!==null?e.jsxs(e.Fragment,{children:[e.jsxs(E,{children:[e.jsx("img",{src:z,alt:"arrow",onClick:()=>x(-1)}),e.jsxs("h2",{children:[e.jsxs("span",{children:[(d=n==null?void 0:n.user)==null?void 0:d.user_role.split("_").join(" ")," "]}),r==null?void 0:r.user_name]})]}),e.jsx(k,{children:Object.keys(r).map(i=>{let a=i.split("_").map(s=>s.charAt(0).toUpperCase()+s.slice(1)).join(" ");return e.jsxs(U,{children:[e.jsx(B,{children:a}),i==="wallets"||i==="balance"?e.jsx(S,{children:e.jsxs("p",{children:[e.jsx("span",{children:"Ballance"}),e.jsx("span",{children:r[`${i}`]})]})}):e.jsx(C,{children:r[`${i}`]})]})})})]}):null})};export{A as default};

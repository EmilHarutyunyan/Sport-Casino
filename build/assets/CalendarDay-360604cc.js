import{s as i,j as e,r,D as c}from"./index-2c2d5aef.js";import{S as l}from"./SelectCustom-c1917394.js";import{b as x}from"./date-6203e712.js";const h=i.div`
  background-color: var(--color-dark-gray);
  border-radius: 12px;
  max-width: 376px;
  width: 100%;
`,u=i.div`
  padding: 24px;
  h2 {
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    margin-bottom: 8px;
  }
  p {
    font-weight: 600;
    font-size: 32px;
    line-height: 42px;
    margin-bottom: 12px;
  }
`,m=i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  border-top: 1px solid #42464c;
  padding-top: 12px;
  padding-bottom: 12px;
  .line {
    color: #42464c;
  }
  .infoName {
    max-width: 152px;
    width: 100%;
  }
`,D=({title:o="",count:t=0,items:a})=>e.jsx(h,{children:e.jsxs(u,{children:[e.jsx("h2",{children:o}),e.jsx("p",{children:t}),a==null?void 0:a.map((n,d)=>e.jsxs(m,{children:[e.jsx("div",{className:"infoName",children:n.name}),e.jsx("div",{className:"line",children:" | "}),e.jsx("div",{children:n.value})]},d))]})});i.div``;const g=i.div`
  max-width: 185px;
  width: 100%;
`,f=i.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 24px;
  svg {
    cursor: pointer;
  }
`,j=i.div`
  display: flex;
  align-items: center;
  gap: 32px;
  justify-content: space-between;
  flex: 1;
  input {
    width: 100%;
    max-width: 240px;
    height: 40px;
    color: var(--color-white);
    background-color: var(--color-dark-gray);
    border: 1px solid var(--color-white);
    border-radius: 8px;
    padding: 8px 9px 8px 16px;
    ::-webkit-calendar-picker-indicator {
      filter: invert(1);
    }
  }
`,v=({onCustom:o})=>{const[t,a]=r.useState(""),[n,d]=r.useState("");r.useEffect(()=>{(t||n)&&p({date:t,date2:n})},[t,n]);const p=r.useCallback(({date:s="",date2:w=""})=>{},[t,n]);return e.jsxs(f,{children:[e.jsxs(j,{children:[e.jsx("input",{type:"date",name:"",id:"",onChange:s=>a(s.target.value)}),e.jsx("input",{type:"date",name:"",id:"",onChange:s=>d(s.target.value)})]}),e.jsx(c,{onClick:o})]})},k=()=>{const[o,t]=r.useState(!1);return r.useState(""),e.jsx(e.Fragment,{children:o?e.jsx(v,{onCustom:()=>t(a=>!a)}):e.jsx(g,{children:e.jsx(l,{onCustom:()=>t(a=>!a),date:x,activeData:"Today"})})})};export{k as C,D as a};

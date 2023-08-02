import{s as o,G as f,r as s,j as e}from"./index-2c2d5aef.js";const w=o.div`
  position: relative;
  background: var(--color-dark-gray);
  border: 1px solid var(--color-white);
  border-radius: 8px;
  padding: 8px 16px;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  width: ${t=>t==null?void 0:t.width};
`,b=o.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  img {
    display: block;
    object-fit: cover;
    height: auto;
  }
`,v=o.div`
  background: var(--color-dark-gray);
  border-radius: 0px 0px 12px 12px;
  height: 0px;
  position: absolute;
  overflow: hidden;
  transition: all 0.3s linear 0s;
  margin-top: 9px;
  z-index: 9;
  left: -1px;
  width: 101%;
  border: 1px solid #fff;
  border-top: 0;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  ul {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    /* gap: 24px; */

    li {
      padding: 8px 16px;
      width: 100%;
      cursor: pointer;
      transition: var(--transition);
      :hover {
        background-color: var(--color-gray);
      }
    }
  }
`,k="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAZCAYAAAArK+5dAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABfSURBVHgB7c1BDYAwFAPQHhCABCThaEEBEpCCBCQMJ6U7kZAMBhmBQ1/S2/8tYGb/QrJPwRtUHLgLqOlQXndERRPzRjyl51aZeW1Jt7hLT5HlYq6nOdkYlA5lVpjZdzZaLaoaMOhM9gAAAABJRU5ErkJggg==",m=({onCustom:t,date:l,activeData:n,width:d})=>{const[A,c,p,i,h]=f(),[a,x]=s.useState(n),g=s.useCallback(r=>{i(u=>!u),x(r),r==="Custom"&&t()},[a]);return e.jsxs(w,{width:d,children:[e.jsxs(b,{onClick:()=>i(r=>!r),ref:p,children:[e.jsx("p",{children:a}),e.jsx("img",{src:k,alt:"arrow"})]}),e.jsx(v,{ref:A,style:h?null:{border:"none"},children:e.jsx("ul",{ref:c,children:l.map(r=>e.jsx("li",{onClick:()=>g(r.value),children:r.value},r.id))})})]})};export{m as S};

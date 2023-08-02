import{s as i,u as C,c as P,a as E,b as R,r as c,j as e,i as p,l as h,V as k,W as S,E as I,k as z,f as N,C as W,h as T}from"./index-2c2d5aef.js";import{T as U}from"./Title-b88b6682.js";import{r as m,P as B}from"./index-25645833.js";import{v as H,b as D}from"./view-be11d784.js";import{S as O}from"./SelectCustom-c1917394.js";import{S as L}from"./Spinner-1ed13e17.js";const _="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABsSURBVHgB7ZGxDcAwCAR/pGzkUczGHoEQiQIRW5ECdJzkxsWd9Qaaaph5yFlyJrJRuSU3IkLiN/GIvnwcIgsR3Cw+8vzFhb9sNveRNDm5aQYieLnezYpZqOUt/wzUyW2gRG4Dhjz5JpArb07cUzzPJ3TArD0AAAAASUVORK5CYII=",$=i.section`
  margin-bottom: 25px;
  table {
    border-spacing: 0;
    width: 100%;
    border: 1px solid var(--color-white);
    border-radius: 8px;
    border-bottom-right-radius: 0px;
    thead {
      border-radius: 8px;
      th {
        border-bottom: 1px solid var(--color-white);
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
      }
      tr {
        th {
          :first-child {
            border-top-left-radius: 8px;
          }
          :last-child {
            border-top-right-radius: 8px;
          }
        }
      }
    }
    tbody {
      td {
        border-bottom: 1px solid var(--color-white);
        background-color: var(--color-dark-gray);
      }
      tr:last-child {
        td {
          :first-child {
            border-bottom-left-radius: 8px;
          }
          :last-child {
            border-bottom-right-radius: 8px;
          }
        }
      }
    }
    tr {
      background-color: var(--color-gray);
      border-radius: 8px;
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 15px 45px 16px 24px;

      border-right: 1px solid #fff;

      :last-child {
        border-right: 0;
      }
    }
    a {
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      color: var(--color-blue);
    }
  }

  input {
    width: 100%;
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
`,F=i.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  /* justify-content: flex-end; */
  border: 1px solid #ffffff;
  border-top: none;
  border-radius: 0px 0px 8px 8px;
  max-width: 378px;
  width: 100%;
  div {
    margin: 0px;
    padding: 16px 64px 16px 24px;
  }
`,Y=i.div`
  margin-top: 16px;
  margin-bottom: 33px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: flex-start;
  form {
    flex: 1;
    label {
      display: block;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      margin-bottom: 4px;
    }
    div {
      max-width: 376px;
      width: 100%;
    }
  }
`,G=i.div`
  button {
    padding: 10px 24px;
    color: var(--color-white);
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    background-color: var(--color-blue);
    border-radius: 8px;
    margin-top: 8px;
    margin-bottom: 20px;
  }
`,Q=i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,J=i.div`
  background-color: ${o=>o==null?void 0:o.color};
  padding: 4px 8px;
  border-radius: 30px;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: var(--color-white);
  text-align: center;
`,M=i.div`
  display: flex;
  align-items: stretch;
  border-radius: 8px;
  background-color: var(--color-gray);
  padding: 8px 16px;
  justify-content: space-between;
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
`,V=({handleNavigation:o,WALLET_PERSON:l,item:s,balanceImg:d,EDIT_PERSON:n,roleMemo:x,editImg:g})=>e.jsxs(Q,{children:[e.jsx("div",{onClick:()=>o(`${l}/${s.id}`,s),children:e.jsx("img",{src:d,alt:"balance"})}),e.jsx("div",{onClick:()=>o(`${n}/${s.id}`,x),children:e.jsx("img",{src:g,alt:"edit"})})]}),te=()=>{const o=C(),l=P(),{loading:s,players:d}=E(R),n=c.useCallback((r,t)=>{o(r,{state:t})},[]),x=c.useMemo(()=>[{Header:"Full name",accessor:"full_name"},{Header:"Username",accessor:"user_name"},{Header:"Agent",accessor:"agent"},{Header:"Wallets",accessor:"balance",Cell:({value:r})=>e.jsx(M,{children:e.jsxs("p",{children:[e.jsx("span",{children:"Ballance"}),e.jsx("span",{children:r})]})})},{Header:"Status",accessor:"status",Cell:r=>{const{row:{original:t}}=r,a=y(t.status);return e.jsx(J,{color:a,children:e.jsx("p",{children:t.status})})}},{Header:"Registered",accessor:"date_time"},{Header:"Actions",accessor:"action",Cell:r=>{var a;const{row:{original:t}}=r;return((a=p())==null?void 0:a.role)===h.admin?e.jsx("div",{onClick:()=>n(`${k}/${t.id}`,t),children:e.jsx("img",{src:H,alt:"view"})}):e.jsx(V,{handleNavigation:n,WALLET_PERSON:S,item:t,balanceImg:D,EDIT_PERSON:I,roleMemo:p,editImg:_})}}],[]),{getTableProps:g,getTableBodyProps:b,headerGroups:u,prepareRow:f,page:A,pageOptions:j,gotoPage:w,state:{pageIndex:v}}=m.useTable({columns:x,data:d,initialState:{pageIndex:0}},m.usePagination),y=c.useCallback(r=>{if((r==null?void 0:r.toLowerCase())==="active")return"#009B22";if((r==null?void 0:r.toLowerCase())==="pending")return"#BDAA00"},[]);return c.useEffect(()=>(l(z(h.player)),()=>l(N(null))),[]),s?e.jsx(L,{}):e.jsxs($,{children:[e.jsx(U,{title:"Players"}),e.jsxs(Y,{children:[e.jsx("form",{action:"",children:e.jsxs("div",{children:[e.jsx("label",{children:"Search"}),e.jsx("input",{type:"text",placeholder:"Full Name, Username"})]})}),e.jsxs(G,{children:[e.jsx("button",{onClick:()=>{var r;return n(`${W}/${(r=p())==null?void 0:r.role}`,p(h.player))},children:"Created Player"}),e.jsx(O,{width:"400px",date:[],activeData:"Filter by Agent"})]})]}),e.jsxs("div",{children:[e.jsxs("table",{...g(),children:[e.jsx("thead",{children:u.map(r=>e.jsx("tr",{...r.getHeaderGroupProps(),children:r.headers.map(t=>e.jsx("th",{...t.getHeaderProps(),children:t.render("Header")}))}))}),d.length?e.jsx(e.Fragment,{children:e.jsx("tbody",{...b(),children:A.map((r,t)=>(f(r),e.jsx("tr",{...r.getRowProps(),children:r.cells.map(a=>a.column.Header==="Registered"?e.jsx("td",{...a.getCellProps(),children:T(a.value)}):e.jsx("td",{...a.getCellProps(),children:a.render("Cell")}))})))})}):e.jsx("tbody",{children:e.jsx("tr",{children:e.jsx("td",{colSpan:"9",style:{textAlign:"center"},children:"No data found"})})})]}),e.jsxs(F,{children:[e.jsx("div",{className:"total",children:"Total"}),e.jsx("div",{className:"price",children:"0 Players"})]}),e.jsx(B,{currentPage:v+1,totalPages:j.length,onPageChange:w})]})]})};export{te as default};

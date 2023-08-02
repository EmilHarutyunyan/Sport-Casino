import{s as a,u as P,c as k,a as C,b as S,r as n,j as e,L as E,W as A,V as H,i as s,k as T,l as c,f as W,C as N,h as _}from"./index-2c2d5aef.js";import{T as R}from"./Title-b88b6682.js";import{r as p,P as z}from"./index-25645833.js";import{b as F,v as $}from"./view-be11d784.js";import{S as I}from"./SelectCustom-c1917394.js";import{S as B}from"./Spinner-1ed13e17.js";const D=a.div`
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
`,L=a.div`
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
`,O=a.div`
  margin-top: 16px;
  margin-bottom: 33px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: flex-start;
  form {
  
    label {
      display: block;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      margin-bottom: 4px;
    }
    
  }
`,U=a.div`
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
`,M=a.div`
  display: flex;
  align-items: center;
  border-radius: 8px;
  background-color: var(--color-gray);
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
`,V=a.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,X=()=>{const x=P(),l=k(),{agents:d,loading:g}=C(S),i=n.useCallback((r,t)=>{x(r,{state:t})},[]),h=n.useMemo(()=>[{Header:"Full name",accessor:"full_name"},{Header:"Username",accessor:"user_name"},{Header:"Super Agent",accessor:"super_agents"},{Header:"Wallets",accessor:"balance",Cell:({value:r})=>e.jsx(M,{children:e.jsxs("p",{children:[e.jsx("span",{children:"Ballance"}),e.jsx("span",{children:r})]})})},{Header:"Players amount",accessor:"players",Cell:r=>{const{value:t}=r;return e.jsx(E,{to:"",children:t==null?void 0:t.length})}},{Header:"Created",accessor:"date_time"},{Header:"Actions",accessor:"status",Cell:r=>{const{row:{original:t}}=r;return e.jsxs(V,{children:[e.jsx("div",{onClick:()=>i(`${A}/${t._id}`,t),children:e.jsx("img",{src:F,alt:"balance"})}),e.jsx("div",{onClick:()=>i(`${H}/${t._id}`,s),children:e.jsx("img",{src:$,alt:"view"})})]})}}],[]);console.log(s());const{getTableProps:m,getTableBodyProps:b,headerGroups:u,prepareRow:f,page:j,pageOptions:v,gotoPage:w,state:{pageIndex:y}}=p.useTable({columns:h,data:d,initialState:{pageIndex:0,pageSize:5}},p.usePagination);return n.useEffect(()=>(l(T(c.agent)),()=>l(W(null))),[]),g?e.jsx(B,{}):e.jsxs(D,{children:[e.jsx(R,{title:"Agents"}),e.jsxs(O,{children:[e.jsx("form",{action:"",children:e.jsxs("div",{children:[e.jsx("label",{children:"Search"}),e.jsx("input",{type:"text",placeholder:"Full Name, Username"})]})}),e.jsxs(U,{children:[e.jsx("button",{onClick:()=>{var r;return i(`${N}/${(r=s())==null?void 0:r.role}`,s(c.agent))},children:"Created Agent"}),e.jsx(I,{width:"400px",date:[],activeData:"Filter by Super Agent"})]})]}),e.jsxs("div",{children:[e.jsxs("table",{...m(),children:[e.jsx("thead",{children:u.map(r=>e.jsx("tr",{...r.getHeaderGroupProps(),children:r.headers.map(t=>e.jsx("th",{...t.getHeaderProps(),children:t.render("Header")}))}))}),d.length?e.jsx(e.Fragment,{children:e.jsx("tbody",{...b(),children:j.map((r,t)=>(f(r),e.jsx("tr",{...r.getRowProps(),children:r.cells.map(o=>o.column.Header==="Created"?e.jsx("td",{...o.getCellProps(),children:_(o.value)}):e.jsx("td",{...o.getCellProps(),children:o.render("Cell")}))})))})}):e.jsx("tbody",{children:e.jsx("tr",{children:e.jsx("td",{colSpan:"9",style:{textAlign:"center"},children:"No data found"})})})]}),e.jsxs(L,{children:[e.jsx("div",{className:"total",children:"Total"}),e.jsx("div",{className:"price",children:"0 Agents"})]}),e.jsx(z,{currentPage:y+1,totalPages:v.length,onPageChange:w})]})]})};export{X as default};

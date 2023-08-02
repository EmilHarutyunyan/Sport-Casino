import{s as t,j as e,r as n,h as j}from"./index-2c2d5aef.js";import{r as l,P as v}from"./index-25645833.js";import"./FilterRequestsWithdraw.styles-a0651faa.js";import{S as i}from"./SelectCustom-c1917394.js";import{d as y,s as w,b as P}from"./date-6203e712.js";import{T as D}from"./Title-b88b6682.js";const T=t.div`
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
`;t.div`
  display: flex;
  align-items: center;
  gap: 32px;
  flex: 1;
  flex-wrap: wrap;
`;const k=t.div`
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
`,H=t.div`
  margin-top: 16px;
  margin-bottom: 32px;

`,R=t.form`
  display: flex;
  align-items: center;
  gap: 32px;
  flex-wrap: wrap;
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
`,o=t.div`
  display: flex;
  flex-direction: column;
  max-width: 376px;
  width: 100%;
  label {
    display: block;
    margin-bottom: 4px;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
  }
  input {
    max-width: none;
    width: 100%;
  }
  &.btnWrap {
    display: flex;
    align-items: center;
    gap: 32px;
    flex-direction: row;
    
  }

`,S=()=>e.jsx(H,{children:e.jsxs(R,{children:[e.jsxs(o,{children:[e.jsx("label",{children:"Search"}),e.jsx("input",{type:"text",placeholder:"Username, account name, bank name, ifsc"})]}),e.jsxs(o,{children:[e.jsx("label",{children:"PayIn Mode"}),e.jsx(i,{date:y,activeData:"All"})]}),e.jsxs(o,{children:[e.jsx("label",{children:"Status"}),e.jsx(i,{date:w,activeData:"All"})]}),e.jsxs(o,{children:[e.jsx("label",{children:"Date"}),e.jsx(i,{date:P,activeData:"All"})]}),e.jsxs(o,{className:"btnWrap",children:[e.jsx("button",{type:"submit",children:"Search"}),e.jsx("button",{type:"button",children:"Reset filter "})]})]})}),z=()=>{const[d,C]=n.useState([]),p=n.useMemo(()=>[{Header:"Username",accessor:"name"},{Header:"UTR / TXN Code",accessor:"validTurnover"},{Header:"PayIn mode",accessor:"payin_mode"},{Header:"Amount",accessor:"amount"},{Header:"Status",accessor:"status"},{Header:"Created",accessor:"created"}],[]),{getTableProps:x,getTableBodyProps:c,headerGroups:h,prepareRow:b,page:g,pageOptions:m,gotoPage:u,state:{pageIndex:f}}=l.useTable({columns:p,data:d,initialState:{pageIndex:0}},l.usePagination);return e.jsxs(T,{children:[e.jsx(D,{title:"Deposit Requests"}),e.jsx(S,{}),e.jsxs("div",{children:[e.jsxs("table",{...x(),children:[e.jsx("thead",{children:h.map(r=>e.jsx("tr",{...r.getHeaderGroupProps(),children:r.headers.map(s=>e.jsx("th",{...s.getHeaderProps(),children:s.render("Header")}))}))}),d.length?e.jsx(e.Fragment,{children:e.jsx("tbody",{...c(),children:g.map((r,s)=>(b(r),e.jsx("tr",{...r.getRowProps(),children:r.cells.map(a=>a.column.Header==="Date"?e.jsx("td",{...a.getCellProps(),children:j(a.value)}):e.jsx("td",{...a.getCellProps(),children:a.render("Cell")}))})))})}):e.jsx("tbody",{children:e.jsx("tr",{children:e.jsx("td",{colSpan:"9",style:{textAlign:"center"},children:"No data found"})})})]}),e.jsxs(k,{children:[e.jsx("div",{className:"total",children:"Total"}),e.jsx("div",{className:"price",children:"$2222"})]}),e.jsx(v,{currentPage:f+1,totalPages:m.length,onPageChange:u})]})]})};export{z as default};

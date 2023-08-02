import{s as i,j as e,r as l,h as f}from"./index-2c2d5aef.js";import{r as n,P as w}from"./index-25645833.js";import{T as y}from"./Title-b88b6682.js";import{W as v,F as D,I as s}from"./FilterRequestsWithdraw.styles-a0651faa.js";import{S as d}from"./SelectCustom-c1917394.js";import{w as C,a as P,s as S,b as M}from"./date-6203e712.js";const B=i.div`
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
`,R=i.div`
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
`,k=i.div`
  background-color: ${o=>o==null?void 0:o.color};
  padding: 4px 8px;
  border-radius: 30px;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: var(--color-white);
  text-align: center;
`,Q=i.div`
  display: flex;
  align-items: center;
  gap: 18px;
  div {
    display: flex;
    align-items: center;
    gap: 4px;
    cursor: pointer;
  }
`,U="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABeSURBVHgB3VLbCQAgCJQmaLQ2ys2toELC1OirDoLoHoYK8BeIKNaTFD41DRiChixwuXPbAkOIawgzI3jAQ47NQohqDlrG5u6qPr8t9cRtZm++EDZGFDg0x3i9SG+iAG/xrRksbDZUAAAAAElFTkSuQmCC",E="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABPSURBVHgB7ZAxDQAgDAQrBQlIwRkSagFnSCg//MDA0k8YSLjkp/Y+ac0+aSLCkWEKlCdSLct9GcOGdEnmYuWip+VTiXzzVqI9jCVFlt9jAVnjeEdIMeDsAAAAAElFTkSuQmCC",I=()=>e.jsx(v,{children:e.jsxs(D,{children:[e.jsxs(s,{children:[e.jsx("label",{children:"Search"}),e.jsx("input",{type:"text",placeholder:"Username, account name, bank name, ifsc"})]}),e.jsxs(s,{children:[e.jsx("label",{children:"Mode"}),e.jsx(d,{date:C,activeData:"All"})]}),e.jsxs(s,{children:[e.jsx("label",{children:"Payout Mode"}),e.jsx(d,{date:P,activeData:"All"})]}),e.jsxs(s,{children:[e.jsx("label",{children:"Status"}),e.jsx(d,{date:S,activeData:"All"})]}),e.jsxs(s,{children:[e.jsx("label",{children:"Date"}),e.jsx(d,{date:M,activeData:"Today"})]}),e.jsxs(s,{className:"btnWrap",children:[e.jsx("button",{type:"submit",children:"Search"}),e.jsx("button",{type:"button",children:"Reset filter "})]})]})}),L=()=>{const[o,H]=l.useState([{username:"Username",mobile:"Mobile",mode:"Mode",payout_mode:"Payout mode",amount:"$200",status:"Approved",created:"12 May 2023"},{username:"Username",mobile:"Mobile",mode:"Mode",payout_mode:"Payout mode",amount:"$200",status:"Pending",created:"12 May 2023"},{username:"Username",mobile:"Mobile",mode:"Mode",payout_mode:"Payout mode",amount:"$200",status:"Canceled",created:"12 May 2023"},{username:"Username",mobile:"Mobile",mode:"Mode",payout_mode:"Payout mode",amount:"$200",status:"Declined",created:"12 May 2023"}]),c=l.useCallback(r=>{if(r==="Approved")return"#009B22";if(r==="Pending")return"#BDAA00";if(r==="Canceled")return"#BD4F00";if(r==="Declined")return"#BD0000"},[]),A=l.useMemo(()=>[{Header:"Username",accessor:"username"},{Header:"Mobile",accessor:"mobile"},{Header:"Mode",accessor:"mode"},{Header:"Payout mode",accessor:"payout_mode"},{Header:"Amount",accessor:"amount"},{Header:"Status",accessor:"status",Cell:r=>{const{row:{original:t}}=r,a=c(t.status);return e.jsx(k,{color:a,children:e.jsx("p",{children:t.status})})}},{Header:"Created",accessor:"created"},{Header:"Actions",Cell:r=>{const{row:{original:t}}=r;return t.status==="Pending"?e.jsxs(Q,{children:[e.jsxs("div",{children:[e.jsx("img",{src:U,alt:"close"})," Decline"]}),e.jsxs("div",{children:[e.jsx("img",{src:E,alt:"done"})," Approve"]})]}):null}}],[]),{getTableProps:p,getTableBodyProps:x,headerGroups:u,prepareRow:m,page:h,pageOptions:g,gotoPage:b,state:{pageIndex:j}}=n.useTable({columns:A,data:o,initialState:{pageIndex:0}},n.usePagination);return e.jsxs(B,{children:[e.jsx(y,{title:"Withdraw Requests"}),e.jsx(I,{}),e.jsxs("div",{children:[e.jsxs("table",{...p(),children:[e.jsx("thead",{children:u.map(r=>e.jsx("tr",{...r.getHeaderGroupProps(),children:r.headers.map(t=>e.jsx("th",{...t.getHeaderProps(),children:t.render("Header")}))}))}),o.length?e.jsx(e.Fragment,{children:e.jsx("tbody",{...x(),children:h.map((r,t)=>(m(r),e.jsx("tr",{...r.getRowProps(),children:r.cells.map(a=>a.column.Header==="Date"?e.jsx("td",{...a.getCellProps(),children:f(a.value)}):e.jsx("td",{...a.getCellProps(),children:a.render("Cell")}))})))})}):e.jsx("tbody",{children:e.jsx("tr",{children:e.jsx("td",{colSpan:"9",style:{textAlign:"center"},children:"No data found"})})})]}),e.jsxs(R,{children:[e.jsx("div",{className:"total",children:"Total"}),e.jsx("div",{className:"price",children:"$2222"})]}),e.jsx(w,{currentPage:j+1,totalPages:g.length,onPageChange:b})]})]})};export{L as default};

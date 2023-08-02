import{s as t,u as w,r as s,j as e,h as y}from"./index-2c2d5aef.js";import{T as n}from"./Title-b88b6682.js";import{C as l,a as i}from"./CalendarDay-360604cc.js";import{r as p,P}from"./index-25645833.js";import"./SelectCustom-c1917394.js";import"./date-6203e712.js";const k=t.section`
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
`,x=t.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
`,T=t.div`
  display: flex;
  gap: 32px;
  flex-wrap: wrap;
`,S=t.div`
  margin-top: 62px;
`,H=t.div`
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
`;t.div`
  margin-top: 16px;
  margin-bottom: 33px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
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
`;t.div`
  button {
    padding: 10px 24px;
    color: var(--color-white);
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    background-color: var(--color-blue);
    border-radius: 8px;
    margin-top: 8px;
  }
`;t.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;t.div`
  background-color: ${r=>r==null?void 0:r.color};
  padding: 4px 8px;
  border-radius: 30px;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: var(--color-white);
  text-align: center;
`;const W=()=>{w();const[r]=s.useState([]),c=s.useMemo(()=>[{Header:"Name",accessor:"name"},{Header:"Match odds: WON | LOST",accessor:"match"},{Header:"Fancy: WON | LOST",accessor:"fancy"},{Header:"Bookmaker: WON | LOST",accessor:"bookmaker"}],[]),{getTableProps:h,getTableBodyProps:g,headerGroups:b,prepareRow:m,page:f,pageOptions:u,gotoPage:j,state:{pageIndex:v}}=p.useTable({columns:c,data:r,initialState:{pageIndex:0}},p.usePagination);return e.jsxs(k,{children:[e.jsxs(x,{children:[e.jsx(n,{title:"Stats"}),e.jsx(l,{})]}),e.jsxs(T,{children:[e.jsx(i,{title:"Total bets",count:0}),e.jsx(i,{title:"Player exposure",count:0}),e.jsx(i,{title:"Match odds GGR",count:0}),e.jsx(i,{title:"Fancy GGR",count:0})]}),e.jsxs(S,{children:[e.jsxs(x,{children:[e.jsx(n,{title:"Player Stats",fontSize:"24px"}),e.jsx(l,{})]}),e.jsxs("div",{children:[e.jsxs("table",{...h(),children:[e.jsx("thead",{children:b.map(o=>e.jsx("tr",{...o.getHeaderGroupProps(),children:o.headers.map(d=>e.jsx("th",{...d.getHeaderProps(),children:d.render("Header")}))}))}),r.length?e.jsx(e.Fragment,{children:e.jsx("tbody",{...g(),children:f.map((o,d)=>(m(o),e.jsx("tr",{...o.getRowProps(),children:o.cells.map(a=>a.column.Header==="Date"?e.jsx("td",{...a.getCellProps(),children:y(a.value)}):e.jsx("td",{...a.getCellProps(),children:a.render("Cell")}))})))})}):e.jsx("tbody",{children:e.jsx("tr",{children:e.jsx("td",{colSpan:"9",style:{textAlign:"center"},children:"No data found"})})})]}),e.jsxs(H,{children:[e.jsx("div",{className:"total",children:"Total"}),e.jsx("div",{className:"price",children:"$0"})]}),e.jsx(P,{currentPage:v+1,totalPages:u.length,onPageChange:j})]})]})]})};export{W as default};

import React from "react";
import { Link } from "react-router-dom";
// Styles
import { Wrapper } from "./AgentList.styles";
import Subheading from "../Subheading";
import Title from "../Title/Title";
import { useState } from "react";
import { useMemo } from "react";
import { usePagination, useTable } from "react-table";
import Pagination from "../Pagination/Pagination";
const AgentList = () => {
  const [data, setData] = useState([
    {
      name: "Admin",
      phone_number: "+8801752720544",
    },
  ]);
  const columns = useMemo(
    () => [
      {
        Header: "Agent Name",
        accessor: "name",
      },
      {
        Header: "Mobile Number",
        accessor: "phone_number",
      },
      {
        Header: "Complain",
        accessor: "whats",
        Cell: (props) => {
          const {
            row: { original: item },
          } = props;

          return (
            <Link
              to={`https://api.whatsapp.com/send?phone=${parseInt(
                item.phone_number
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="38"
                height="38"
                viewBox="0 0 48 48"
                fill="none"
              >
                <circle cx="24" cy="24" r="24" fill="white" />
                <path
                  d="M34.8545 28.9122L31.0368 28.4763C30.12 28.3711 29.2182 28.6867 28.5719 29.333L25.8063 32.0986C21.5528 29.9342 18.0657 26.4622 15.9014 22.1936L18.682 19.413C19.3283 18.7667 19.6439 17.8649 19.5387 16.948L19.1028 13.1604C18.9225 11.6423 17.6449 10.5 16.1118 10.5H13.5116C11.8132 10.5 10.4003 11.9129 10.5055 13.6113C11.3021 26.4472 21.5678 36.6979 34.3886 37.4945C36.087 37.5997 37.4999 36.1868 37.4999 34.4884V31.8882C37.5149 30.3701 36.3726 29.0925 34.8545 28.9122Z"
                  fill="url(#paint0_linear_50_10341)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_50_10341"
                    x1="10.5"
                    y1="10.5"
                    x2="42.8332"
                    y2="20.8678"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#2C94FC" />
                    <stop offset="1" stop-color="#6A3BEA" />
                  </linearGradient>
                </defs>
              </svg>
            </Link>
          );
        },
      },
    ],
    []
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    pageOptions,
    gotoPage,
    state: { pageIndex },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    usePagination
  );
  return (
    <>
      
      <Wrapper>
        <Title title={"Agents List"} textAlign={"center"} />

        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          {data.length ? (
            <>
              <tbody {...getTableBodyProps()}>
                {page.map((row, i) => {
                  prepareRow(row);
                  return (
                    <tr {...row.getRowProps()}>
                      {row.cells.map((cell) => {
                        return (
                          <td {...cell.getCellProps()}>
                            {cell.render("Cell")}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </>
          ) : (
            <tbody>
              <tr>
                <td colspan="6" style={{ textAlign: "center" }}>
                  No data found
                </td>
              </tr>
            </tbody>
          )}
        </table>
        <Pagination
          currentPage={pageIndex + 1}
          totalPages={pageOptions.length}
          onPageChange={gotoPage}
        />
      </Wrapper>
    </>
  );
};

export default AgentList;

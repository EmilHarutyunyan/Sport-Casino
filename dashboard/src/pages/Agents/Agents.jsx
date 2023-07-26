import React, { useState, useEffect } from "react";
// Styles
import {
  ActionWrap,
  BtnWrap,
  FooterTable,
  FormWrap,
  WalletWrap,
  Wrapper,
} from "./Agents.styles";
import Title from "../../components/Title";
import { useCallback } from "react";
import { useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  CREATE_PERSON,
  EDIT_PERSON,
  VIEW_PERSON,
  WALLET_PERSON,
} from "../../router/route-path";
import { usePagination, useTable } from "react-table";
import { formatDateMDY, roleMemo, roles } from "../../utils/utils";
import Pagination from "../../components/Pagination/Pagination";
// Images
import balanceImg from "../../assets/images/balance.png";
import editImg from "../../assets/images/edit.png";
import viewImg from "../../assets/images/view.png"
import SelectCustom from "../../components/SelectCustom";
import { useDispatch, useSelector } from "react-redux";
import {getUsersByRole } from "../../app/features/user/userActions";
import { selectUser, setError } from "../../app/features/user/userSlice";
import Spinner from "../../components/Spinner/Spinner";

// const ActionsPerson = ({
//   handleNavigation,
//   WALLET_PERSON,
//   item,
//   balanceImg,
//   viewImg,
//   roleMemo,
//   id,
// }) => {
//   return (
//     <ActionWrap>
//       <div
//         onClick={() => handleNavigation(`${WALLET_PERSON}/${item.id}`, item)}
//       >
//         <img src={balanceImg} alt={"balance"} />
//       </div>
//       <div onClick={() => handleNavigation(`${VIEW_PERSON}/${item.id}`, item)}>
//         <img src={viewImg} alt={"view"} />
//       </div>
//     </ActionWrap>
//   );
// };

const Agents = () => {
  
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const { agents, loading } = useSelector(selectUser);
  const handleNavigation = useCallback(
    (path, state) => {
      navigation(path, { state });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  const columns = useMemo(
    () => [
      {
        Header: "Full name",
        accessor: "full_name",
      },
      {
        Header: "Username",
        accessor: "user_name",
      },
      {
        Header: "Super Agent",
        accessor: "super_agents",
      },
      {
        Header: "Wallets",
        accessor: "balance",
        Cell: ({ value }) => {
          return (
            <WalletWrap>
              <p>
                <span>Ballance</span>
                <span>{value}</span>
              </p>
            </WalletWrap>
          );
        },
      },

      {
        Header: "Players amount",
        accessor: "players",
        Cell: (props) => {
          const { value } = props;
          return <Link to={""}>{value.length}</Link>;
        },
      },
      {
        Header: "Created",
        accessor: "created",
      },
      {
        Header: "Actions",
        accessor: "status",
        Cell: (props) => {
          const {
            row: { original: item },
          } = props;
          
          return (
            <ActionWrap>
              <div
                onClick={() =>
                  handleNavigation(`${WALLET_PERSON}/${item._id}`, item)
                }
              >
                <img src={balanceImg} alt={"balance"} />
              </div>
              <div
                onClick={() =>
                  handleNavigation(`${VIEW_PERSON}/${item._id}`, roleMemo)
                }
              >
                <img src={viewImg} alt={"view"} />
              </div>
            </ActionWrap>
          );
        },
      },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      data: agents,
      initialState: { pageIndex: 0, pageSize: 5 },
    },
    usePagination
  );
useEffect(() => {
  dispatch(getUsersByRole(roles.agent));
  return () => dispatch(setError(null));
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);
 if (loading) {
   return <Spinner />;
 }
  return (
    <Wrapper>
      <Title title={"Agents"} />
      <FormWrap>
        <form action="">
          <div>
            <label>Search</label>
            <input type="text" placeholder="Full Name, Username" />
          </div>
        </form>
        <BtnWrap>
          {roleMemo()?.role === roles.super_agent ? (
            <button
              onClick={() =>
                handleNavigation(
                  `${CREATE_PERSON}/${roleMemo()?.role}`,
                  roleMemo()
                )
              }
            >
              Created {roleMemo()?.title}
            </button>
          ) : (
            <SelectCustom width={'400px'} date={[]} activeData={"Filter by Super Agent"} />
          )}
        </BtnWrap>
      </FormWrap>
      <div>
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
          {agents.length ? (
            <>
              <tbody {...getTableBodyProps()}>
                {page.map((row, i) => {
                  prepareRow(row);
                  return (
                    <tr {...row.getRowProps()}>
                      {row.cells.map((cell) => {
                        if (cell.column.Header === "Date") {
                          return (
                            <td {...cell.getCellProps()}>
                              {formatDateMDY(cell.value)}
                            </td>
                          );
                        } else {
                          return (
                            <td {...cell.getCellProps()}>
                              {cell.render("Cell")}
                            </td>
                          );
                        }
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </>
          ) : (
            <tbody>
              <tr>
                <td colSpan="9" style={{ textAlign: "center" }}>
                  No data found
                </td>
              </tr>
            </tbody>
          )}
        </table>
        <FooterTable>
          <div className="total">Total</div>
          <div className="price">0 Agents</div>
        </FooterTable>
        <Pagination
          currentPage={pageIndex + 1}
          totalPages={pageOptions.length}
          onPageChange={gotoPage}
        />
      </div>
    </Wrapper>
  );
};

export default Agents;

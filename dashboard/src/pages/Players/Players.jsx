import React, { useState, useMemo, useCallback, useEffect } from "react";
// Styles
import {
  Wrapper,
  FormWrap,
  BtnWrap,
  ActionWrap,
  FooterTable,
  StatusWrap,
  WalletWrap,
} from "./Players.styles";
import Title from "../../components/Title";
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
import viewImg from "../../assets/images/view.png";
import SelectCustom from "../../components/SelectCustom";
import { useDispatch, useSelector } from "react-redux";
import { getUsersByRole } from "../../app/features/user/userActions";
import Spinner from "../../components/Spinner/Spinner";
import { selectUser, setError } from "../../app/features/user/userSlice";

const ActionsPerson = ({
  handleNavigation,
  WALLET_PERSON,
  item,
  balanceImg,
  EDIT_PERSON,
  roleMemo,
  editImg,
}) => {
  return (
    <ActionWrap>
      <div
        onClick={() => handleNavigation(`${WALLET_PERSON}/${item.id}`, item)}
      >
        <img src={balanceImg} alt={"balance"} />
      </div>
      <div
        onClick={() => handleNavigation(`${EDIT_PERSON}/${item.id}`, roleMemo)}
      >
        <img src={editImg} alt={"edit"} />
      </div>
    </ActionWrap>
  );
};

const Players = () => {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const { loading, players } = useSelector(selectUser);

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
        Header: "Agent",
        accessor: "agent",
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
        }
      },
      {
        Header: "Status",
        accessor: "status",
        Cell: (props) => {
          const {
            row: { original: item },
          } = props;
          const color = colorStatus(item.status);
          return (
            <StatusWrap color={color}>
              <p>{item.status}</p>
            </StatusWrap>
          );
        },
      },
      {
        Header: "Registered",
        accessor: "registered",
      },
      {
        Header: "Actions",
        accessor: "action",
        Cell: (props) => {
          const {
            row: { original: item },
          } = props;
          if (roleMemo()?.role === roles.admin) {
            return (
              <div
                onClick={() =>
                  handleNavigation(`${VIEW_PERSON}/${item.id}`, item)
                }
              >
                <img src={viewImg} alt={"view"} />
              </div>
            );
          }
          return (
            <ActionsPerson
              handleNavigation={handleNavigation}
              WALLET_PERSON={WALLET_PERSON}
              item={item}
              balanceImg={balanceImg}
              EDIT_PERSON={EDIT_PERSON}
              roleMemo={roleMemo}
              editImg={editImg}
            />
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
      data: players,
      initialState: { pageIndex: 0 },
    },
    usePagination
  );

  const colorStatus = useCallback((status) => {
    if (status?.toLowerCase() === "active") {
      return "#009B22";
    }
    if (status?.toLowerCase() === "pending") {
      return "#BDAA00";
    }
  }, []);

  useEffect(() => {
    dispatch(getUsersByRole(roles.player));
    return () => dispatch(setError(null));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (loading) {
    return <Spinner />;
  }
  return (
    <Wrapper>
      <Title title={"Players"} />
      <FormWrap>
        <form action="">
          <div>
            <label>Search</label>
            <input type="text" placeholder="Full Name, Username" />
          </div>
        </form>
        <BtnWrap>
          {roleMemo()?.role === roles.agent ? (
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
            <SelectCustom
              width={"400px"}
              date={[]}
              activeData={"Filter by Agent"}
            />
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
          {players.length ? (
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
          <div className="price">0 Players</div>
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

export default Players;

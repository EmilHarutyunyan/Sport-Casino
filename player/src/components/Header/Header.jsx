import React, { useCallback } from "react";
import useModal from "../../hooks/useModal";
// Styles
import {
  Wrapper,
  LogoWrap,
  Nav,
  Lists,
  List,
  ActionNav,
  Container,
} from "./Header.styles";
import { ImgWrapper } from "../../themes/GlobalStyle";
// Images
import logo from "../../assets/images/logo.png";
import { mainLinks } from "./dataLinks";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { CONTACT_US, WITHDRAW, DEPOSIT, CALL_AGENT } from "../../router/route-path";
import ModalCustom from "../ModalCustom";
import ContactUs from "../ContactUs";
import { Login } from "../../pages";
// import { ResetPassword, ForgotPassword, Register } from "../../pages";
import UserAction from "../UserAction/UserAction";
import { BalanceIcon } from "../Icons/Icons";

const Header = () => {
  const navigate = useNavigate()
  const {
    isOpen: isOpenContact,
    openModal: openModalContact,
    closeModal: closeModalContact,
  } = useModal();
  const {
    isOpen: isOpenLogin,
    openModal: openModalLogin,
    closeModal: closeModalLogin,
  } = useModal();


  const handleNavigate = useCallback((path) => {
    navigate(path)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (
    <Wrapper>
      <Container className="main-container">
        <LogoWrap>
          <Link to="/">
            <ImgWrapper
              src={logo}
              alt="logo"
              width={"62px"}
              height={"28px"}
              objectFit={"contain"}
              loading={"lazy"}
            />
          </Link>
        </LogoWrap>
        <Nav>
          <Lists>
            {mainLinks.map((item) => {
              if (item.url === CONTACT_US) {
                return (
                  <List key={item.id} onClick={openModalContact}>
                    <p>{item.name}</p>
                  </List>
                );
              }
              return (
                <List key={item.id}>
                  <NavLink to={item.url}>{item.name}</NavLink>
                </List>
              );
            })}
          </Lists>
        </Nav>
        <ActionNav>
          <Lists>
            <List className="defaultList">
              <p onClick={openModalLogin}>Login</p>
            </List>
            <List className="defaultList">
              <Link to={CALL_AGENT} target="_blank">Sign Up</Link>
            </List>
            <List className="winDep">
              <NavLink to={WITHDRAW}>Withdraw</NavLink>
            </List>
            <List className="winDep">
              <NavLink to={DEPOSIT}>Deposit</NavLink>
            </List>
            <List className="dFlex">
              <BalanceIcon />
              Balance: {"0.00"}
            </List>
            <List>
              <UserAction />
            </List>
          </Lists>
          <Lists>
            <List>
              <span className="active">EN</span>
            </List>
            <List>
              <span>বাংলা</span>
            </List>
          </Lists>
        </ActionNav>
      </Container>
      {isOpenContact && (
        <ModalCustom closeModal={closeModalContact} isOpen={isOpenContact}>
          <ContactUs />
        </ModalCustom>
      )}
      {isOpenLogin && (
        <ModalCustom closeModal={closeModalLogin} isOpen={isOpenLogin}>
          <Login
            closeModalLogin={closeModalLogin}
            // openModalForgot={openModalForgot}
            openModalRegister={() => handleNavigate(CALL_AGENT)}
          />
        </ModalCustom>
      )}
      {/* {isOpenRegister && (
        <ModalCustom closeModal={closeModalRegister} isOpen={isOpenRegister}>
          <Register
            closeModalRegister={closeModalRegister}
            openModalLogin={openModalLogin}
          />
        </ModalCustom>
      )} */}
      {/* {isOpenForgot && (
        <ModalCustom closeModal={closeModalForgot} isOpen={isOpenForgot}>
          <ForgotPassword />
        </ModalCustom>
      )} */}
      {/* {isOpenResetPass && (
        <ModalCustom closeModal={closeModalResetPass} isOpen={isOpenResetPass}>
          <ResetPassword closeModal={closeModalResetPass} />
        </ModalCustom>
      )} */}
    </Wrapper>
  );
};

export default Header;

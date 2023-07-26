import React from "react";
import {
  // Navigate,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
// import PrivateRouter from './PrivateRouter'

import Layout from "../layout/Layout";
import { CALL_AGENT, DEPOSIT, DEPOSIT_PAYMENT, FUND_IN_OUT, HOME, MOBILE_PAYMENT, NOTIFICATIONS, NOT_FOUND_PAGE, OUTSTANDING, PLAYER, PLAYER_PROFILE, TRANSACTIONS, WITHDRAW } from "./route-path";
// import TokenService from "../services/token.service";
// Pages
import {
  Deposit,
  ErrorPage,
  FundInOut,
  Home,
  // Login,
  NotFoundPage,
  Notifications,
  Outstanding,
  Profile,
  Transactions,
  Withdraw,
  CallAgent,
} from "../pages";
import PaymentMethod from "../components/PaymentMethod";
import MobileBank from "../components/MobileBank/MobileBank";
// import PrivateRouter from "./PrivateRouter";

// const user = TokenService.getUser() || null;
const router = createBrowserRouter(
  createRoutesFromElements(
    // <Route errorElement={<ErrorPage />}>
    <Route path={HOME} element={<Layout />}>
      <Route index element={<Home />} />
      <Route path={PLAYER}>
        <Route path={PLAYER_PROFILE} element={<Profile />} />
        <Route path={FUND_IN_OUT} element={<FundInOut />} />
        <Route path={OUTSTANDING} element={<Outstanding />} />
        <Route path={TRANSACTIONS} element={<Transactions />} />
      </Route>
      <Route path={NOTIFICATIONS} element={<Notifications />} />
      <Route path={WITHDRAW} element={<Withdraw />} />
      <Route path={DEPOSIT} element={<Deposit />} />
      <Route path={DEPOSIT_PAYMENT} element={<PaymentMethod />} />
      <Route path={MOBILE_PAYMENT} element={<MobileBank />} />
      <Route path={CALL_AGENT} element={<CallAgent />} />
      {/*       
        {user ? (
          <Route path="/login" element={<Navigate to={"/"} />} />
        ) : (
          <Route path="/login" element={<Login />} />
        )} */}
      {/* <Route
            path="/profile"
            element={
              <PrivateRouter>
                <Profile />
              </PrivateRouter>
            }

          />

          {user ? (
            <Route path="/register" element={<Navigate to="/" />} />
          ) : (
            <Route path="/register" element={<Register />} />
          )} */}
      <Route path={NOT_FOUND_PAGE} element={<NotFoundPage />} />
      {/* </Route> */}
    </Route>
  )
);

export default router;

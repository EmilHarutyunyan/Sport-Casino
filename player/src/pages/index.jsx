import Home from "./Home/Home.lazy";
import About from "./About/About.lazy";
// import Login from "./Login";

// Auth
import Login from "./Auth/Login/Login.lazy";
import Register from "./Auth/Register/Register.lazy";
import ResetPassword from "./Auth/ResetPassword/ResetPassword.lazy";
import ForgotPassword from "./Auth/ForgotPassword/ForgotPassword.lazy";
import Withdraw from "./Withdraw";
import Deposit from "./Deposit"

// PlayerProfile
import { Profile, FundInOut, Outstanding, Transactions } from "./PlayerProfile";
import Notifications from "./Notifications/";

import CallAgent from "./CallAgent"

import NotFoundPage from "./NotFoundPage/NotFoundPage.lazy";
import ErrorPage from "./ErrorPage";


export {
  Home,
  About,
  Login,
  Register,
  ResetPassword,
  ForgotPassword,
  NotFoundPage,
  ErrorPage,
  Profile,
  FundInOut,
  Outstanding,
  Transactions,
  Notifications,
  Withdraw,
  Deposit,
  CallAgent,
};

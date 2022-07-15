import React, { lazy } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
// Client
import MainLayout from "./mainLayout/mainLayout";
import Product from "./userPages/Products/Products";
import Header from "./mainLayout/Header/Header";
import Footer from "./mainLayout/Footer/Footer";
import MyAccount from "./userPages/MyAccount/MyAccount";
import Referrals from "./userPages/MyAccount/Referrals";
import Categorys from "./userPages/Category/Category";
import Cart from "./userPages/Cart/Cart";
import ThankYou from "./userPages/Thankyou/ThankYou";
import Signin from "./userPages/Signin/Signin";
import Home from "./userPages/Home/Home";
import { ToastContainer } from "./utils/toast";
import AccessibleNavigationAnnouncer from "./components/AccessibleNavigationAnnouncer";
import PrivateRoute from "./components/login/PrivateRoute";

const Layout = lazy(() => import("./layout/Layout"));
const Login = lazy(() => import("./pages/Login"));
const SignUp = lazy(() => import("./pages/SignUp"));
const ForgetPassword = lazy(() => import("./pages/ForgotPassword"));
const ResetPassword = lazy(() => import("./pages/ResetPassword"));

const App = () => {
  const params = window.location.href.split("/");
  return (
    <>
      <ToastContainer />
      <Router>
        {params[3] == "user" ? <Header /> : null}

        <AccessibleNavigationAnnouncer />
        <Switch>
          {/* Admin side */}
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/forgot-password" component={ForgetPassword} />
          <Route path="/reset-password/:token" component={ResetPassword} />

          <PrivateRoute>
            {" "}
            <Route path="/" component={Layout} />
          </PrivateRoute>
          <Redirect exact from="/" to="/login" />

          {/* client side */}
          <Route path="/user/home" component={Home} />
          <Route path="/user/product" component={Product} />
          <Route path="/user/myaccount" component={MyAccount} />
          <Route path="/user/myaccount/referrals" component={Referrals} />
          <Route path="/user/category" component={Categorys} />
          <Route path="/user/cart" component={Cart} />
          <Route path="/user/thankyou" component={ThankYou} />
          <Route path="/user/signin" component={Signin} />
        </Switch>
        {params[3] == "user" ? <Footer /> : null}
      </Router>
    </>
  );
};

export default App;

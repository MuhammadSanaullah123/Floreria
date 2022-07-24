import React, { lazy, useEffect } from "react";
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
import MyOrders from "./userPages/MyAccount/MyOrders";
import DeliveryAddress from "./userPages/MyAccount/DeliveryAddress";
import Reminders from "./userPages/MyAccount/Reminders";

import Categorys from "./userPages/Category/Category";
import Cart from "./userPages/Cart/Cart";
import ThankYou from "./userPages/Thankyou/ThankYou";
import Signin from "./userPages/Signin/Signin";
import Home from "./userPages/Home/Home";
import Login from "./userPages/Login/Login";

import { ToastContainer } from "./utils/toast";
import AccessibleNavigationAnnouncer from "./components/AccessibleNavigationAnnouncer";
import PrivateRoute from "./components/login/PrivateRoute";

const Layout = lazy(() => import("./layout/Layout"));
//const Login = lazy(() => import("./pages/Login"));
const SignUp = lazy(() => import("./pages/SignUp"));
const ForgetPassword = lazy(() => import("./pages/ForgotPassword"));
const ResetPassword = lazy(() => import("./pages/ResetPassword"));

const App = () => {
  
  const params = window.location.href.split("/");
  console.log(params)
  
  return (
    <>
      <ToastContainer />
      <Router>
        

        <AccessibleNavigationAnnouncer />
        <Switch>
          {/* Admin side */}
          {/* <Route path="/login" component={Login} /> */}
          <Route path="/signup" component={SignUp} />
          <Route path="/forgot-password" component={ForgetPassword} />
          <Route path="/reset-password/:token" component={ResetPassword} />

          <PrivateRoute>
            <Route path="/" component={Layout} />
          </PrivateRoute>
          

          {/* client side */}
         
          <Route path="/user/home" component={Home} />
          <Route path="/user/product" component={Product} />
          <Route path="/user/myaccount/home" component={MyAccount} />
          <Route path="/user/myaccount/referrals" component={Referrals} />
          <Route path="/user/myaccount/myorders" component={MyOrders} />
          <Route
            path="/user/myaccount/deliveryaddress"
            component={DeliveryAddress}
          />
          <Route path="/user/myaccount/reminders" component={Reminders} />

          <Route path="/user/category" component={Categorys} />
          <Route path="/user/cart" component={Cart} />
          <Route path="/user/thankyou" component={ThankYou} />
          <Route path="/user/signin" component={Signin} />
          
          <Route path="/user/login" component={Login} />
          <Redirect exact from="/" to="/user/login" />
        </Switch>
      </Router>
    </>
  );
};

export default App;

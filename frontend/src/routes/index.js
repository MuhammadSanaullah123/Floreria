import { lazy } from "react";
const MyAccount = lazy(() => import("../userPages/MyAccount/MyAccount"));
const Referrals = lazy(() => import("../userPages/MyAccount/Referrals"));
const MyOrders = lazy(() => import("../userPages/MyAccount/MyOrders"));

const DeliveryAddress = lazy(() =>
  import("../userPages/MyAccount/DeliveryAddress")
);
const Reminders = lazy(() => import("../userPages/MyAccount/Reminders"));

const Categorys = lazy(() => import("../userPages/Category/Category"));
const Cart = lazy(() => import("../userPages/Cart/Cart"));
const ThankYou = lazy(() => import("../userPages/Thankyou/ThankYou"));
const Signin = lazy(() => import("../userPages/Signin/Signin"));
const Home = lazy(() => import("../userPages/Home/Home"));
const Login = lazy(() => import("../userPages/Login/Login"));

const Product = lazy(() => import("../userPages/Products/Products"));
// use lazy for better code splitting
const Dashboard = lazy(() => import("../pages/Dashboard"));
const Products = lazy(() => import("../pages/Products"));
const Materials = lazy(() => import("../pages/Materials"));
const ProductDetails = lazy(() => import("../pages/ProductDetails"));
const MaterialDetails = lazy(() => import("../pages/MaterialDetails"));
const Category = lazy(() => import("../pages/Category"));
const Staff = lazy(() => import("../pages/Staff"));
const Customers = lazy(() => import("../pages/Customers"));
const CustomerOrder = lazy(() => import("../pages/CustomerOrder"));
const Orders = lazy(() => import("../pages/Orders"));
const OrderInvoice = lazy(() => import("../pages/OrderInvoice"));
const Coupons = lazy(() => import("../pages/Coupons"));
// const Setting = lazy(() => import("../pages/Setting"));
//const Page404 = lazy(() => import("../pages/404"));
const EditProfile = lazy(() => import("../pages/EditProfile"));

/*
//  * ⚠ These are internal routes!
//  * They will be rendered inside the app, using the default `containers/Layout`.
//  * If you want to add a route to, let's say, a landing page, you should add
//  * it to the `App`'s router, exactly like `Login`, `CreateAccount` and other pages
//  * are routed.
//  *
//  * If you're looking for the links rendered in the SidebarContent, go to
//  * `routes/sidebar.js`
 */

const routes = [
  {
    path: "/dashboard",
    component: Dashboard,
  },
  {
    path: "/materials",
    component: Materials,
  },
  {
    path: "/materials/:id",
    component: MaterialDetails,
  },
  {
    path: "/products",
    component: Products,
  },
  {
    path: "/product/:id",
    component: ProductDetails,
  },
  {
    path: "/category",
    component: Category,
  },
  {
    path: "/customers",
    component: Customers,
  },
  {
    path: "/customer-order/:id",
    component: CustomerOrder,
  },
  {
    path: "/our-staff",
    component: Staff,
  },
  {
    path: "/orders",
    component: Orders,
  },
  {
    path: "/order/:id",
    component: OrderInvoice,
  },
  {
    path: "/coupons",
    component: Coupons,
  },
  { path: "/setting", component: EditProfile },
  // {
  //   path: "/404",
  //   component: Page404,
  // },
  {
    path: "/edit-profile",
    component: EditProfile,
  },
  //client side
  {
    path: "/user/login",
    component: Login,
  },
  {
    path: "/user/home",
    component: Home,
  },
  {
    path: "/user/product",
    component: Product,
  },
  {
    path: "/user/myaccount/home",
    component: MyAccount,
  },
  {
    path: "/user/myaccount/referrals",
    component: Referrals,
  },
  {
    path: "/user/myaccount/myorders",
    component: MyOrders,
  },
  {
    path: "/user/myaccount/deliveryaddress",
    component: DeliveryAddress,
  },
  {
    path: "/user/myaccount/reminders",
    component: Reminders,
  },
  {
    path: "/user/category",
    component: Categorys,
  },
  {
    path: "/user/cart",
    component: Cart,
  },
  {
    path: "/user/thankyou",
    component: ThankYou,
  },
  {
    path: "/user/signin",
    component: Signin,
  },
];

export default routes;

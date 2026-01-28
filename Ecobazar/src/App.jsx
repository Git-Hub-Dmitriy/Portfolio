import { lazy } from "react";
import "./App.module.scss";
import Layout from "@pages/Layout/Layout";
import RequireAuth from "@pages/hoc/RequireAuth";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { filterPopularProducts } from "@utils/filterPopularProducts";
import { filterHotDeals } from "@utils/filterHotDeals";
import { products } from "@data/products";
import { hotDeals } from "@data/hotDeals";
import { popularProducts } from "@data/popularProducts";

const Home = lazy(() => import("./pages/Home/Home"));
const About = lazy(() => import("./pages/About/About"));
const Shop = lazy(() => import("./pages/Shop/Shop"));
const Contact = lazy(() => import("./pages/Contact/Contact"));
const Blog = lazy(() => import("./pages/Blog/Blog"));
const Account = lazy(() => import("./pages/Account/Account"));
const Faqs = lazy(() => import("./pages/Faqs/Faqs"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));
const Product = lazy(() => import("./pages/Product/Product"));
const Descriptions = lazy(() =>
  import("./pages/Product/Descriptions/Descriptions")
);
const InformationProduct = lazy(() =>
  import("./pages/Product/InformationProduct/InformationProduct")
);
const Feedback = lazy(() => import("./pages/Product/Feedback/Feedback"));
const SinglePost = lazy(() => import("./pages/SinglePost/SinglePost"));
const Register = lazy(() => import("./pages/Register/Register"));
const Login = lazy(() => import("./pages/Login/Login"));
const Dashboard = lazy(() => import("./pages/Account/Dashboard/Dashboard"));
const OrderHistory = lazy(() =>
  import("./pages/Account/OrderHistory/OrderHistory")
);
const Settings = lazy(() => import("./pages/Account/Settings/Settings"));
const Shopping = lazy(() => import("./pages/Account/Shopping/Shopping"));
const AccountWishlist = lazy(() =>
  import("./pages/Account/AccountWishlist/AccountWishlist")
);
const Wishlist = lazy(() => import("./pages/Wishlist/Wishlist"));
const ShoppingCart = lazy(() => import("./pages/ShoppingCart/ShoppingCart"));
const SingleOrder = lazy(() =>
  import("./pages/Account/SingleOrder/SingleOrder")
);
const Checkout = lazy(() => import("./pages/Checkout/Checkout"));

const rout = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="shop" element={<Shop />} />
      <Route path="shop/:id/*" element={<Product />}>
        <Route path="description" element={<Descriptions />} />
        <Route path="information" element={<InformationProduct />} />
        <Route path="feedback" element={<Feedback />} />
      </Route>
      <Route path="blog" element={<Blog />} />
      <Route path="blog/:id" element={<SinglePost />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />

      <Route element={<RequireAuth />}>
        <Route path="account/*" element={<Account />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="orderHistory" element={<OrderHistory />} />
          <Route path="orderHistory/:id" element={<SingleOrder />} />
          <Route path="accountWishlist" element={<AccountWishlist />} />
          <Route path="shopping" element={<Shopping />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Route>

      <Route path="faqs" element={<Faqs />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route element={<RequireAuth />}>
        <Route path="wishlist" element={<Wishlist />} />
      </Route>
      <Route path="shoppingCart" element={<ShoppingCart />} />
      <Route path="checkout" element={<Checkout />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

filterPopularProducts(products, popularProducts);
filterHotDeals(products, hotDeals);

export default function App() {
  return (
    <>
      <RouterProvider
        future={{
          v7_startTransition: true,
        }}
        router={rout}
      />
    </>
  );
}

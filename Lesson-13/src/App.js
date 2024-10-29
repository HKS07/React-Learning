import React, { lazy, Suspense, useState } from "react";
import UserContext from "./utils/UserContext";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import ContactUs from "./components/ContactUs";
import Cart from "./components/Cart";
import Restaurant from "./components/Restaurant";
import FormLearn from "./components/Forms";
import Profile from "./components/Profile";
import Shimmer from "./components/Shimmer";


const Instamart = lazy(() => import("./components/Instamart"));

const AppLayout = () => {
  const [user, setUser] = useState({
    name: "hks",
    email: "hksingh99@gmail.com",
  });
  return (
    <UserContext.Provider value={{ user: user }}>
      <Header />
      <Outlet />
      <Footer />
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Body /> },
      {
        path: "about",
        element: <About />,
        children: [{ path: "profile", element: <Profile /> }],
      },
      { path: "/contact", element: <ContactUs /> },
      { path: "/cart", element: <Cart /> },
      { path: "restaurant/:id", element: <Restaurant /> },
      { path: "/formTest", element: <FormLearn /> },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />);

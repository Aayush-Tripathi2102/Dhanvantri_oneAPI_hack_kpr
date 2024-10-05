import Header from "./components/Header";
import Home from "./components/Home";
import Hospitals from "./components/Hospitals";
import Login from "./components/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Pharmacy from "./components/Pharmacy";
import Emergency from "./components/Emergency";
import Ved from "./components/Ved";
import Account from "./components/Account";
import Specialists from "./components/Specialists";
import BookSpecialist from "./components/BookSpecialist";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Header />
          <Home />
        </>
      ),
    },
    {
      path: "/login",
      element: (
        <>
          <Header />
          <Login />
        </>
      ),
    },
    {
      path: "/hospitals",
      element: (
        <>
          <Header />
          <Hospitals />
        </>
      ),
    },
    {
      path: "/emergency",
      element: (
        <>
          <Header />
          <Emergency />
        </>
      ),
    },
    {
      path: "/pharmacy",
      element: (
        <>
          <Header />
          <Pharmacy />
        </>
      ),
    },
    {
      path: "/ved",
      element: (
        <>
          <Header />
          <Ved />
        </>
      ),
    },
    {
      path: "/signup",
      element: (
        <>
          <Header />
          <Account />
        </>
      ),
    },
    {
      path: "/specialists",
      element: (
        <>
          <Header />
          <Specialists />
        </>
      ),
    },
    {
      path: "/BookSpecialist",
      element: (
        <>
          <Header />
          <BookSpecialist />
        </>
      ),
    },
  ]);

  return (
    <RouterProvider router={router}>
      <Header />
      <Home />
    </RouterProvider>
  );
}

export default App;

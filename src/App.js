import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Form from "./pages/Form";
import Signup from "./pages/Signup";
import NotFound from "./components/NotFound";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Investments from "./pages/Investments";
import Notifications from "./pages/Notifications";
import Status from "./pages/Status"; // Assuming this is correct
import "./App.css";

const App = () => {
  // Define the App component
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Form />,
      errorElement: <NotFound />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/ImageList/Dashboard",
      element: <Dashboard />,
    },
    {
      path: "/ImageList/Users",
      element: <Users />,
    },
    {
      path: "/ImageList/Investments",
      element: <Investments />,
    },
    {
      path: "/ImageList/Notifications",
      element: <Notifications />,
    },
    {
      path: "/status/:status", // ✅ Corrected dynamic route
      element: <Status />, // Ensure you are using the correct component
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;

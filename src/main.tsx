import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

// general css
import "./index.css";
import Navbar from "./components/Navbar/Navbar";

//pages
import Services from "./pages/Services/Seviices";
import Work from "./pages/Work/Work";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";

// Layout component to include ScrollToTop
const AppLayout: React.FC = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Services />,
      },
      {
        path: "/work",
        element: <Work />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);

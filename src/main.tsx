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
import Blog from "./pages/Blog/Blog";
import Imapact from "./pages/Imapact/Imapact";
import BlogPost from "./pages/Blog/BlogPost";
import Contact from "./pages/Contact/Contact";

// Layout component to include ScrollToTop
const AppLayout: React.FC = () => {
  return (
    <>
      {" "}
      <div className="app_layout">
        <ScrollToTop />
        <Navbar />
        <main className="main_content">
          <Outlet />
        </main>
        {/* <Footer /> */}
      </div>
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
        path: "/impact",
        element: <Imapact />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/blog/post-1",
        element: <BlogPost />,
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

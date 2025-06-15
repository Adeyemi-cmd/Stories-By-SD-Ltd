import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop: React.FC = () => {
    const { pathname } = useLocation(); // Get the current route's pathname

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page
    }, [pathname]); // Trigger whenever the route path changes

    return null; // This component does not render anything
};

export default ScrollToTop;


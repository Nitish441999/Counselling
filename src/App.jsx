import React, { useState, useEffect, Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./Pages/Navbar/Navbar";
import Footer from "./Pages/Footer/Footer";
import Loading from "./Component/Loading/Laoding";

// Lazy load your pages
const Home = React.lazy(() => import("./Pages/Home/Home"));
const Contact = React.lazy(() => import("./Pages/Contact/Contact"));
const About = React.lazy(() => import("./Pages/About/About"));
const MbbsCource = React.lazy(() => import("./Pages/Cource/MbbsCource"));
const BtechCource = React.lazy(() => import("./Pages/Cource/BtechCource"));
const LawCource = React.lazy(() => import("./Pages/Cource/LawCource"));
const AllCollage = React.lazy(() => import("./Pages/Collages/AllCollage"));
const CounsellingForm = React.lazy(() =>
  import("./Pages/CounsellingForm/CounsellingForm")
);

// ScrollToTop Component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on route change
  }, [pathname]);

  return null; // This component does not render anything
}

function App() {
  const [isLoading, setIsLoading] = useState(false); // State to control loading screen
  const location = useLocation(); // Get the current route location

  useEffect(() => {
    // Show loading screen for 2 seconds on route change
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, [location]); // Trigger on route change

  return (
    <div>
      <Navbar />
      <ScrollToTop /> {/* Add ScrollToTop here */}
      {isLoading ? (
        <Loading /> // Display loading screen
      ) : (
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/mbbsCourses" element={<MbbsCource />} />
            <Route path="/betchCourses" element={<BtechCource />} />
            <Route path="/lawCourses" element={<LawCource />} />
            <Route path="/CounsellingForm" element={<CounsellingForm />} />
            <Route path={location.pathname} element={<AllCollage />} />
          </Routes>
        </Suspense>
      )}
      <Footer />
    </div>
  );
}

export default App;

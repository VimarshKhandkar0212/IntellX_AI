import { BrowserRouter, Routes, Route} from "react-router-dom";

import Home from "../pages/Home";
import ServiceDetail from "../pages/ServiceDetail";
import NotFound from "../pages/NotFound"

import ScrollToSection from "../components/ScrollToSection";
import ScrollToTop from "../components/ScrollToTop";

import TestimonialsPage from "../pages/TestimonialsPage";

function AppRoutes(){
    return (
        // BrowserRouter -> Enables routing in you react application; Routes -> A container that holds all routes definitions.
        <BrowserRouter>
        <ScrollToTop />
        <ScrollToSection />
        <Routes>

        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Dynamic Service Pages */}
        <Route path="/services/:slug" element={<ServiceDetail />} />

        {/*Testimonials*/ }
        <Route path="/testimonials" element={<TestimonialsPage />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />

        </Routes>
        </BrowserRouter>

    );
}

export default AppRoutes;

import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

/* ------------------------------- Fonts ----------------------------------- */
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

/* ------------------------------- Components ------------------------------- */
import HomePage from "./routes/HomePage";
import AboutPage from "./routes/AboutPage";
import ContactPage from "./routes/ContactPage";
import NoPage from "./routes/NoPage";

/* --------------------------------- Routing -------------------------------- */
createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
        <Route index element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NoPage />} />
    </Routes>
  </BrowserRouter>
);

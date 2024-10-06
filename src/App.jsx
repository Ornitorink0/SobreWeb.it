import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';

import HomePage from "./pages/HomePage.jsx";
import BlogsPage from "./pages/BlogsPage.jsx";
import PolicyPage from "./pages/PolicyPage.jsx";
import NoPage from "./pages/NoPage.jsx";

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/Policy" element={<PolicyPage />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
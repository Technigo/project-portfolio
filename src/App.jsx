import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { BlogPage } from "./pages/BlogPage";

import "./styles/reset.css";
import "./styles/global.scss";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import { useState } from "react";

function App() {
  const [lang, setLang] = useState("en");
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home lang={lang} onLang={setLang} />} />
        <Route path="/blog/:id" element={<BlogPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

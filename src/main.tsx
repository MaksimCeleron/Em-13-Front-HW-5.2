import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import FirstPage from "./pages/firstpage";
import SecondPage from "./pages/secondpage";
import ThirdPage from "./pages/thirdpage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/firstpage" element={<FirstPage />} />
        <Route path="/secondpage" element={<SecondPage />} />
        <Route path="/thirdpage" element={<ThirdPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

import MarketPage from "./pages/MarketPage/MarketPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import AvatarPage from "./pages/AvatarPage/AvatarPage";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MarketPage />} />
          <Route path="/avatar/:id" element={<AvatarPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

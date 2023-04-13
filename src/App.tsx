import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TopBar from "./components/TopBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeArticle from "./components/HomeArticle";

function App() {
  return (
    <div className="App">
      <TopBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeArticle />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

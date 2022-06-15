
import { Routes, Route } from "react-router-dom";
import ArticleCreate from "./components/ArticleCreate";
import ArticleDelete from "./components/ArticleDelete";
import ArticleFull from "./components/ArticleFull";
import ArticleList from "./components/ArticleList";
import ArticleUpdate from "./components/ArticleUpdate";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ArticleList />} />
        <Route path="/:id" element={<ArticleFull />} />
        <Route path="/create" element={<ArticleCreate />} />
        <Route path="/update/:id" element={<ArticleUpdate />} />
        <Route path="/delete/:id" element={<ArticleDelete />} />
      </Routes>
    </div>
  );
}

export default App;

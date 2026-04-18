import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import MindWavePage from '../pages/MindWavePage';
import ArticlePage from '../pages/ArticlePage';
import Article2 from '../pages/Article2';
import Article3 from '../pages/Article3';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MindWavePage />} />
        <Route path="/article/ai-mental-health" element={<ArticlePage />} />
        <Route path="/article/destigmatization" element={<Article2 />} />
        <Route path="/article/mental-health-basics" element={<Article3 />} />
      </Routes>
    </Router>
  );
}

export default App;
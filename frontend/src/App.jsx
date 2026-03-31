import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import VibeSelector      from './pages/VibeSelector';
import StreetwearMinimal      from './pages/StreetwearMinimal';
import StreetwearArticles     from './pages/StreetwearArticles';
import StreetwearArticlePage  from './pages/StreetwearArticlePage';
import StreetwearYCP          from './pages/StreetwearYCP';
import StreetwearAwards       from './pages/StreetwearAwards';
import PreviewBar            from './components/PreviewBar';

export default function App() {
  const { pathname } = useLocation();
  const onHomePage = pathname.startsWith('/home/');

  return (
    <>
      <Routes>
        <Route path="/"                element={<VibeSelector />} />
        <Route path="/home/street"       element={<StreetwearMinimal />} />
        <Route path="/street/articles"     element={<StreetwearArticles />} />
        <Route path="/street/articles/:id" element={<StreetwearArticlePage />} />
        <Route path="/street/ycp"          element={<StreetwearYCP />} />
        <Route path="/street/awards"   element={<StreetwearAwards />} />
      </Routes>
      {onHomePage && <PreviewBar />}
    </>
  );
}

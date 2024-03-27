import * as React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const Jobs = React.lazy(() => import('jobs/Module'));
const AssetStore = React.lazy(() => import('assetstore/Module'));
const Explore = React.lazy(() => import('explore/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<Navigate to="/explore" />} />
        <Route path='/explore' element={<Explore />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/assets" element={<AssetStore />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;

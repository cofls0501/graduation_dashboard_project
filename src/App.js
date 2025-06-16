import React, { useState } from 'react';
import Dashboard from './Dashboard'; // 스크롤형 전체 보기
import DashboardTabs from './DashboardTabs'; // 탭형 보기

function App() {
  const [viewMode, setViewMode] = useState('tabs'); // 'full' 또는 'tabs'

  return (
    <div style={{ padding: '1rem' }}>
      <h1 style={{ textAlign: 'center' }}>연금 시각화 대시보드</h1>

      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
        <button onClick={() => setViewMode('full')}>전체 보기</button>
        <button onClick={() => setViewMode('tabs')} style={{ marginLeft: '10px' }}>탭 보기</button>
      </div>

      {viewMode === 'full' ? <Dashboard /> : <DashboardTabs />}
    </div>
  );
}

export default App;

import React from 'react';
import 'antd/dist/reset.css'; // ✅ 이 줄을 추가
import DashboardTabs from './components/DashboardTabs';

function App() {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>연금 예측 대시보드</h1>
      <DashboardTabs />
    </div>
  );
}

export default App;
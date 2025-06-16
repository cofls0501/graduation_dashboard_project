import React, { useState } from 'react';
import MemberChart from './components/MemberChart';
import FundChart from './components/FundChart';
import BenefitChart from './components/BenefitChart';
import DemographicChart from './components/DemographicChart';
import FundPortChart from './components/FundPortChart';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('member');

  const renderChart = () => {
    switch (activeTab) {
      case 'member':
        return <MemberChart />;
      case 'fund':
        return <FundChart />;
      case 'benefit':
        return <BenefitChart />;
      case 'demographic':
        return <DemographicChart />;
      case 'portfolio':
        return <FundPortChart />;
      default:
        return null;
    }
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h1 style={{ textAlign: 'center', fontSize: '1.5rem' }}>연금 예측 대시보드</h1>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '1rem' }}>
        <button onClick={() => setActiveTab('member')}>가입자/수급자</button>
        <button onClick={() => setActiveTab('fund')}>기금 수입/지출</button>
        <button onClick={() => setActiveTab('benefit')}>급여 예측</button>
        <button onClick={() => setActiveTab('demographic')}>인구 구조</button>
        <button onClick={() => setActiveTab('portfolio')}>포트폴리오</button>
      </div>

      <div>
        {renderChart()}
      </div>
    </div>
  );
}
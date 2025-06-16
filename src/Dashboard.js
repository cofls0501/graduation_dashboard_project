import React from 'react';
import MemberChart from './components/MemberChart';
import BenefitChart from './components/BenefitChart';
import FundChart from './components/FundChart';
import DemographicChart from './components/DemographicChart';
import FundPortChart from './components/FundPortChart';

export default function Dashboard() {
  return (
    <div>
      <h2>가입자 및 수급자 추이</h2>
      <MemberChart />
      
      <h2>연금 급여 예측</h2>
      <BenefitChart />
      
      <h2>기금 수입·지출</h2>
      <FundChart />
      
      <h2>인구 구조 추이</h2>
      <DemographicChart />
      
      <h2>기금 포트폴리오 (2060년)</h2>
      <FundPortChart />
    </div>
  );
}

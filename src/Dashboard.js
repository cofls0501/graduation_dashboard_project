import React, { useState } from 'react';
import { Tabs } from 'antd';
import MemberChart from './components/MemberChart';
import FundChart from './components/FundChart';
import BenefitChart from './components/BenefitChart';
import DemographicChart from './components/DemographicChart';
import FundPortChart from './components/FundPortChart';

const { TabPane } = Tabs;

export default function Dashboard() {
  const [activeKey, setActiveKey] = useState('1');

  return (
    <div style={{ padding: '1rem' }}>
      <h1 style={{ textAlign: 'center', fontSize: '1.5rem' }}>연금 예측 대시보드</h1>
      <Tabs
        activeKey={activeKey}
        onChange={(key) => setActiveKey(key)}
        centered
        size="large"
        tabPosition="top"
        style={{ overflowX: 'auto' }}
      >
        <TabPane tab="가입자/수급자 추이" key="1">
          <MemberChart />
        </TabPane>
        <TabPane tab="기금 수입/지출" key="2">
          <FundChart />
        </TabPane>
        <TabPane tab="급여 예측" key="3">
          <BenefitChart />
        </TabPane>
        <TabPane tab="인구 구조" key="4">
          <DemographicChart />
        </TabPane>
        <TabPane tab="기금 포트폴리오" key="5">
          <FundPortChart />
        </TabPane>
      </Tabs>
    </div>
  );
}

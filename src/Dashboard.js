import React from 'react';
import { Tabs } from 'antd';
import MemberChart from './MemberChart';
import FundChart from './FundChart';
import BenefitChart from './BenefitChart';
import DemographicChart from './DemographicChart';
import FundPortChart from './FundPortChart';

const { TabPane } = Tabs;

const DashboardTabs = () => {
  return (
    <div style={{
      height: '100vh',            // 전체 화면 높이 고정
      overflow: 'hidden',         // 스크롤 제거
      display: 'flex',
      flexDirection: 'column'
    }}>
      <Tabs
        defaultActiveKey="1"
        centered
        destroyInactiveTabPane     // 탭에서 벗어난 컴포넌트는 메모리에서 제거
        style={{ flex: 'none' }}
      >
        <TabPane tab="가입자 추이" key="1">
          <div style={{ height: 'calc(100vh - 60px)', overflow: 'auto' }}>
            <MemberChart />
          </div>
        </TabPane>
        <TabPane tab="기금 수입·지출" key="2">
          <div style={{ height: 'calc(100vh - 60px)', overflow: 'auto' }}>
            <FundChart />
          </div>
        </TabPane>
        <TabPane tab="급여 지급 현황" key="3">
          <div style={{ height: 'calc(100vh - 60px)', overflow: 'auto' }}>
            <BenefitChart />
          </div>
        </TabPane>
        <TabPane tab="인구 구조" key="4">
          <div style={{ height: 'calc(100vh - 60px)', overflow: 'auto' }}>
            <DemographicChart />
          </div>
        </TabPane>
        <TabPane tab="포트폴리오 구성" key="5">
          <div style={{ height: 'calc(100vh - 60px)', overflow: 'auto' }}>
            <FundPortChart />
          </div>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default DashboardTabs;

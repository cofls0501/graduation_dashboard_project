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
    <Tabs defaultActiveKey="1" centered>
      <TabPane tab="가입자/수급자 추이" key="1">
        <MemberChart />
      </TabPane>
      <TabPane tab="기금 수입·지출" key="2">
        <FundChart />
      </TabPane>
      <TabPane tab="급여 지급 현황" key="3">
        <BenefitChart />
      </TabPane>
      <TabPane tab="인구 구조" key="4">
        <DemographicChart />
      </TabPane>
      <TabPane tab="포트폴리오 구성" key="5">
        <FundPortChart />
      </TabPane>
    </Tabs>
  );
};

export default DashboardTabs;
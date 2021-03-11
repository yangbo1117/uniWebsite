import React from 'react';
import { Tabs } from 'antd';
import './index.scss';
import Shanghai from './cpt/Shanghai/index';
import Jiangxi from './cpt/Jiangxi/index';
import Sichuan from './cpt/Sichuan/index';
import Yunnan from './cpt/Yunnan/index';

const { TabPane } = Tabs;
const Typicalcpt = () =>{
    return(
        <div id='typicalcpt_tabs'>
            <Tabs defaultActiveKey="1">
                <TabPane tab="上海交通大学医学院附属瑞金医院" key="1">
                    <Shanghai></Shanghai>
                </TabPane>
                <TabPane tab="江西省赣州市人民医院" key="2">
                    <Jiangxi></Jiangxi>
                </TabPane>
                <TabPane tab="四川省医学科学院·四川省人民医院" key="3">
                    <Sichuan></Sichuan>
                </TabPane>
                <TabPane tab="云南省省本级医保支付平台" key="4">
                    <Yunnan></Yunnan>
                </TabPane>
            </Tabs>
        </div>
    )
}

export default Typicalcpt;

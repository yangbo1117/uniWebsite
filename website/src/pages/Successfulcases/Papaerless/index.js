import React from 'react';
import { Row, Col, Divider } from 'antd';
import '../public_scss/_cpt.scss';

const Papaerlesscpt = () => {
    const data = [
    "华中科技大学同济医学院附属同济医院",
    "浙江大学医学院附属第二医院",
    "大连医科大学附属第二医院",
    "邯郸市中心医院",
    "上海交通大学医学院附属新华医院",
    "青岛市市立医院",
    "青岛市中心医院",
    "赤峰学院附属医院",
    "浙江大学医学院附属妇产科医院",
    "中南大学湘雅三医院",
    "许昌市中心医院",
    "云南昆钢医院（医共体）",
    "河南省胸科医院",
    "…",
    ]
    return (
        <div className='custom_cases'>
            <div className='case_title'>
                <Divider orientation="left"><div className='title_self'>部分医院客户：</div></Divider>
            </div>
            <Row>
                {
                    data.map((i, index) => (
                        <Col lg={{ span: 8 }} sm={{ span: 12 }} xs={{ span: 24 }} key={index}>
                            <div className='custom_cases_item'>{i}</div>
                        </Col>
                    ))
                }
            </Row>
        </div>
    )
}

export default Papaerlesscpt;
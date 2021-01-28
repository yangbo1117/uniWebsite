import React from 'react';
import { Row, Col, Divider } from 'antd';
import '../public_scss/_cpt.scss';

const HisInfo = () => {
    const data = [
        "复旦大学附属眼耳鼻喉科医院",
        "复旦大学附属肿瘤医院",
        "上海市质子重离子医院",
        "中国福利会国际和平妇幼保健院",
        "上海市第一妇婴保健院（东，西，南院）",
        "上海市杨浦区市东医院",
        "上海市松江区妇幼保健院",
        "上海美兰湖妇产科医院",
        "上海文艺医院",
        "上海泰坤堂中医院",
        "上海化工医疗中心",
        "上海第一康复医院",
        "……",
    ]
    const data1 =[
        "复旦大学附属眼耳鼻喉科医院",
        "复旦大学附属肿瘤医院",
        "上海市质子重离子医院",
        "中国福利会国际和平妇幼保健院",
        "上海市第一妇婴保健院（东，西，南院）",
        "上海市浦东新区人民医院",
        "上海市杨浦区市东医院",
        "上海市松江区妇幼保健院",
        "上海美兰湖妇产科医院",
        "上海第一康复医院",
        "……",
    ]
    return (
        <div className='custom_cases'>
            <div className='case_title'>
                <Divider orientation="left"><div className='title_self'>部分HIS医院信息管理系统医院客户:</div></Divider>
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
            <div className='case_title'>
                <Divider orientation="left"><div className='title_self'>部分电子病历系统医院客户:</div></Divider>
            </div>
            <Row>
                {
                    data1.map((i, index) => (
                        <Col lg={{ span: 8 }} sm={{ span: 12 }} xs={{ span: 24 }} key={index}>
                            <div className='custom_cases_item'>{i}</div>
                        </Col>
                    ))
                }
            </Row>
        </div>
    )
}

export default HisInfo;
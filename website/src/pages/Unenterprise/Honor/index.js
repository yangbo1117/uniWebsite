import React from 'react';
import '../_public_scss/_title.scss';
import './index.scss';
import { Row, Col } from 'antd';
import t0 from './img/honor0.jpg';
import t1 from './img/honor1.jpg';
import t2 from './img/honor2.jpg';
import t3 from './img/honor3.jpg';
import t4 from './img/honor4.jpg';
import t5 from './img/honor5.jpg';


let data = [
    { pic:t0, title:'高新技术企业证书' },
    { pic:t1, title:'上海市科技小巨人证书' },
    { pic:t2, title:'CMMI-5认证证书' },
    { pic:t3, title:'CCCI信息技术服务管理体系认证证书' },
    { pic:t4, title:'CCCI质量管理体系认证证书' },
    { pic:t5, title:'IAF医疗卫生信息系统软件设计和开发证书' },
]
const Honor = () => {
    return (
        <div id='honor'>
            <h4 className='public_enterprise_title'><span>企业荣誉 Enterprise honor</span></h4>
            <div className='demeanour_content'>
                <p>20年来，上海联众在医疗软件行业不断积累与创新，追求效益与价值，承接各种大中型医院软件开发和系统集成项目，始终走在技术革新的前沿。对技术不懈追求，对产品勇于创新，对客户用心服务，凭借着精益求精、锲而不舍的精神，上海联众获得了诸多荣誉奖项，也受到业内的一致好评。</p>
                <Row gutter={[24, 0]}>
                    {
                        data.map((item, index) => {
                            return (
                                <Col lg={{ span: 8 }} sm={{ span: 12 }} xs={{ span: 24 }} key={index}>
                                    <div className='demeanour_content_img'>
                                        <img src={item.pic} alt='' />
                                        <p>{item.title}</p>
                                    </div>
                                </Col>
                            )
                        })
                    }
                </Row>
                <div className='demeanour_content_tag'>
                    <h4><b>历年来部分荣誉</b></h4>
                    <Row>
                        <Col xs={{span:22,offset:1}} md={{span:10,offset:1}} >
                            <ul className='ul_list1'>
                                <li>2019年通过CMMI 5级管理评定</li>
                                <li>2019年荣获HIT行业品牌排行榜“DRG TOP1”</li>
                                <li>2017年上海市张江国家自助创新示范区专项发展资金重点项目</li>
                                <li>2014年上海市黄浦区认定企业技术中心</li>
                                <li>2014年上海联众数字化病案数据分析平台荣获上海市重点项目基金</li>
                            </ul>
                        </Col>
                        <Col xs={{span:22,offset:1}} md={{span:10,offset:1}}>
                            <ul className='ul_list2'>
                                <li>2013年被评为“上海市科技小巨人企业（培育型）”</li>
                                <li>2011年获得上海市技术创新基金无偿资助</li>
                                <li>2008年荣获上海市科学技术成果奖</li>
                                <li>2004年被评上海市优秀软件产品</li>
                                <li>...</li>
                            </ul>
                        </Col>
                    </Row>
                </div>
            </div>

        </div>
    )
}
export default Honor;
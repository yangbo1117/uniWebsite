import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';
import { Row,Col } from 'antd';

export default class Footer extends React.Component{
    render(){
        return(
            <div id="footer">
                <Row>
                    <Col xs={{span:24,offset:0}} sm={{span:22,offset:1}} lg={{span:20,offset:2}} xl={{span:18,offset:3}} xxl={{span:16,offset:4}}>
                        <div className="footer_box1">
                            <Row>
                                <Col xs={24} md={10} lg={10} order={1} >
                                    <section className="footer_img">
                                        <div>
                                            <img src={require('../../assets/img/unionnet.png')} alt="" className="footer_logo"/>
                                        </div>
                                        <div>
                                            <img src={require('./img/weixin.jpg')} alt="" className="footer_weixin"/>
                                        </div>
                                    </section>
                                </Col>
                                <Col xs={24} md={14} lg={14} order={2} >
                                    <section className="footer_list">
                                        <Row>
                                            <Col xs={24} md={12} lg={12} order={1}>
                                                <dl>
                                                    <dt>关于我们</dt>
                                                    <dd><Link to='/unenterprise/introduce'>企业介绍</Link></dd>
                                                    <dd><Link to='/unenterprise/honor'>企业荣誉</Link></dd>
                                                    <dd><Link to='/unenterprise/demeanour'>企业风采</Link></dd>
                                                </dl>
                                            </Col>
                                            <Col xs={24} md={12} lg={12} order={2}>
                                                <dl>
                                                    <dt>产品解决方案</dt>
                                                    <dd><Link to='/product/hisinfos'>HIS医院信息化管理解决方案</Link></dd>
                                                    <dd><Link to='/product/digitization'>联众病案数字化解决方案</Link></dd>
                                                    <dd><Link to='/product/medicalrecord'>联众病案管理分析解决方案</Link></dd>
                                                    <dd><Link to='/product/drgdata'>联众DRG一体化解决方案</Link></dd>
                                                </dl>
                                            </Col>
                                        </Row>
                                    </section>
                                </Col>
                            </Row>
                        </div>
                        <div className="footer_box2">
                            <Row>
                                <Col xs={24} sm={24} lg={12} xxl={8} order={1}>
                                    <p>Copyright&copy;2020unionnet. All Right Reserved</p>
                                </Col>
                                <Col xs={24} sm={24} lg={12} xxl={8} order={1}>
                                    <p>上海联众网络信息股份有限公司 版权所有 隐私政策</p>
                                </Col>
                                <Col xs={24} sm={24} lg={12} xxl={4} order={1}>
                                    <p>
                                        <a target="_blank" rel = 'noopener noreferrer' href='http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31010102003763' >沪公网备案 31010102003763</a>
                                    </p>
                                </Col>
                                <Col xs={24} sm={24} lg={12} xxl={4} order={1}>
                                    <a target="_blank" rel = 'noopener noreferrer' href="https://beian.miit.gov.cn">沪ICP备15001099号-1</a>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}
import React, { useEffect } from 'react';
import { Row, Col } from 'antd';
import { NavLink, Switch, Route, Redirect } from 'react-router-dom';
import 'assets/css/publicsolution.scss';
import Demeanour from './Demeanour';
import Introduce from './Introduce';
import Honor from './Honor';

const Unenterprise = () => {
    useEffect(() => {
        document.documentElement.scrollTop = document.body.scrollTop = 0;
    }, [])
    const tabs = [
        { tabName: "企业介绍", path: '/unenterprise/introduce', compt: Introduce },
        { tabName: "企业荣誉", path: '/unenterprise/honor', compt: Honor },
        { tabName: "企业风采", path: '/unenterprise/demeanour', compt: Demeanour },

    ]
    return (
        <div id="total_solution">
            <div className="total_solution_banner">
                <img src={require('./_img/top_banner.jpg')} alt="" />
            </div>
            <Row>
                <Col xs={{span:22,offset:1}} sm={{span:22,offset:1}} lg={{span:20,offset:2}} xl={{span:18,offset:3}} xxl={{span:16,offset:4}}>
                    <div className="total_solution_list">
                        <Row>
                            {
                                tabs.map((item, index) => {
                                    return (
                                        <Col key={index} xs={24} sm={12} lg={8} xl={6}>
                                            <div className="total_solution_navlinkbox">
                                                <NavLink to={`${item.path}`} activeClassName="total_solution_active"><span className='custom_span'>{item.tabName}</span></NavLink>
                                            </div>
                                        </Col>
                                    )
                                })
                            }
                        </Row>
                    </div>
                    <div className='total_solution_route'>
                        <Switch>
                            {
                                tabs.map((item, index) => (
                                    <Route path={item.path} component={item.compt} key={index}></Route>
                                ))
                            }
                            <Redirect exact from='/unenterprise' to='/unenterprise/introduce'></Redirect>
                        </Switch>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
export default Unenterprise;

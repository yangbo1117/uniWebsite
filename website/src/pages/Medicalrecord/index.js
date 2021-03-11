import React from 'react';
import 'assets/css/publicsolution.scss';
import { Row,Col } from  "antd";
import { Switch,Route, NavLink,Redirect } from 'react-router-dom';
import Management from './Management';
import Hqms from './Hqms';
import Code from './Code';
import Cloud from './Cloud';



export default class Medicalrecord extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            tabs:[
                {tabName:"病案管理分析平台",path:'/product/medicalrecord/management',compt: Management},
                {tabName:"病案质量监测系统(HQMS)",path:'/product/medicalrecord/hqms',compt:Hqms}, //质量监测系统(HQMS)
                {tabName:"病案智能编码系统",path:'/product/medicalrecord/code',compt: Code},
                {tabName:"云病案平台",path:'/product/medicalrecord/cloud',compt: Cloud},
            ],
        };
    } 
    componentDidMount(){
        document.documentElement.scrollTop = document.body.scrollTop =0;
    }
    render(){
        const { tabs } = this.state;
        return (
            <div id="total_solution">
                <section className="total_solution_banner">
                    <img src={require('./_img/top_banner.jpg')} alt=""/>
                </section>
                <Row>
                    <Col xs={{span:22,offset:1}} sm={{span:22,offset:1}} lg={{span:20,offset:2}} xl={{span:18,offset:3}} xxl={{span:16,offset:4}}>
                        <div className="total_solution_list">
                            <Row>
                                {
                                    tabs.map((item,index)=>{
                                        return(
                                        <Col key={index} xs={24} sm={12}  lg={8} xl={6}>
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
                                    tabs.map((item,index)=>(
                                        <Route path={item.path} component={ item.compt } key={index}></Route>
                                    ))
                                }
                                <Redirect exact from='/product/medicalrecord' to='/product/medicalrecord/management'></Redirect>
                            </Switch>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}
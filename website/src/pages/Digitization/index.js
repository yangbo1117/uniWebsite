import React from 'react';
import 'assets/css/publicsolution.scss';
import { Row,Col } from  "antd";
import { Switch,Route, NavLink,Redirect } from 'react-router-dom';
import Digital from './Digital';
import Paperless from './Paperless';
import Wechatorder from './Wechatorder';
import Printing from './Printing';

export default class Digitization extends React.Component{
    constructor(props) {
        super(props); 
        this.state = {
            tabs:[
                {tabName:"医院病案数字化系统",path:'/product/digitization/digital',compt:Digital},
                {tabName:"医院无纸化病案系统",path:'/product/digitization/paperless',compt:Paperless},
                {tabName:"医院微信预约打印系统",path:'/product/digitization/wechatorder',compt:Wechatorder},
                {tabName:"医院病案自助打印系统",path:'/product/digitization/printing',compt:Printing},
            ],
        };
    } 
    componentDidMount(){
        document.documentElement.scrollTop = document.body.scrollTop =0;
    }
    render(){
        const {  tabs } = this.state;
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
                                    tabs.map((i,index)=>(
                                        <Route path={i.path} component={ i.compt } key={index}></Route>
                                    ))
                                }
                                <Redirect exact from='/product/digitization' to='/product/digitization/digital'></Redirect>
                            </Switch>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}
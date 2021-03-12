import React from 'react';
import 'assets/css/publicsolution.scss';
import { Row, Col } from  "antd";
import { Switch, Route, NavLink, Redirect } from 'react-router-dom';
import Performance from './Performance';
import Medicalpayment from './Medicalpayment';
import Fundregulation from './Fundregulation';
import Qualitymanage from './Qualitymanage';
import Pubhospperformance from './Pubhospperformance';
import Clinicalpathway from './Clinicalpathway';
import chunk from "src/utils/chunk";

export default class Drgdata extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            tabs:[
                {tabName:"DRG医保支付系统",path:'/product/drgdata/payment',compt:Medicalpayment},
                {tabName:"DRG基金监管系统",path:'/product/drgdata/fund',compt:Fundregulation},
                {tabName:"DRG医院质量管理与绩效评价平台",path:'/product/drgdata/quality',compt:Qualitymanage},
                {tabName:"三级公立医院绩效考核平台",path:'/product/drgdata/threelevel',compt:Pubhospperformance},
                {tabName:"基于大数据的临床路径系统",path:'/product/drgdata/clinical',compt:Clinicalpathway},
                {tabName:"医院医疗质量管理和费用监控系统",path:'/product/drgdata/performance',compt:Performance},
            ],
        };
    } 
    componentDidMount(){
        document.documentElement.scrollTop = document.body.scrollTop = 0;
    }
      
    render(){
        const {  tabs } = this.state;
        const tabslist = chunk(tabs, 4);
        return (
            <div id="total_solution">
                <section className="total_solution_banner">
                    <img src={require('./_img/top_banner.jpg')} alt=""/>
                </section>
                <Row>
                    <Col xs={{span:22,offset:1}} sm={{span:22,offset:1}} lg={{span:20,offset:2}} xl={{span:18,offset:3}} xxl={{span:16,offset:4}}>
                        {
                            tabslist.map((tabs,idx) => (
                                <div className="total_solution_list" key={idx}>
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
                            ))
                        }
                        <div className='total_solution_route'>
                            <Switch>
                                {
                                    tabs.map((i,index)=>(
                                        <Route path={i.path} component={ i.compt } key={index}></Route>
                                    ))
                                }
                                <Redirect exact from='/product/drgdata' to='/product/drgdata/payment'></Redirect>
                            </Switch>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}
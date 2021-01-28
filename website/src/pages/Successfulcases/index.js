import React from 'react';
import 'assets/css/publicsolution.scss';
import { Row,Col } from  "antd";
import { Switch,Route, NavLink,Redirect } from 'react-router-dom';
import DrgsCases from './Drgs/index';
import HisInfoCases from './Hisinfo/index';
import RecordCases from './Record/index';
import DigitalCases from './Digital/index';
import PapaerleseCases from './Papaerless/index';
import TypicalCases from './Typical/index';

export default class Successfucases extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            tabs:[
                {tabName:"DRG客户案例",path:'/successfulcases/drgs',compt: DrgsCases},
                {tabName:"HIS医院信息化管理客户案例",path:'/successfulcases/hisinfo',compt: HisInfoCases},
                {tabName:"病案管理分析平台客户案例",path:'/successfulcases/record',compt: RecordCases},
                {tabName:"医院病案数字化客户案例",path:'/successfulcases/digital',compt: DigitalCases},
                {tabName:"医院无纸化病案系统客户案例",path:'/successfulcases/papaerlese',compt: PapaerleseCases},
                {tabName:"DRG典型客户评价",path:'/successfulcases/typical',compt: TypicalCases},
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
                                        <Col key={index} xs={24} sm={12} lg={8} xl={8}>
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
                                <Redirect exact from='/successfulcases' to='/successfulcases/drgs'></Redirect>
                            </Switch>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}
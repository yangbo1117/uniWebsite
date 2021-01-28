import React from 'react';
import 'assets/css/publicsolution.scss';
import { Row,Col } from  "antd";
import { Switch,Route, NavLink,Redirect } from 'react-router-dom';
import NewsCenter from "./NewsCenter/index";

export default class Page extends React.Component{
    constructor(props) {
        super(props); 
        this.state = {
            tabs:[
                {tabName:"新闻列表",path:'/news/newscenter',compt:NewsCenter},
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
                                <Redirect exact from='/news' to='/news/newscenter'></Redirect>
                            </Switch>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}
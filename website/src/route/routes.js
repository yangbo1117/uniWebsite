import React,{ Component, Fragment } from 'react';
import { Route, Switch, } from 'react-router-dom';
import { BackTop } from "antd";
// import Bundle  from './loadable';
import QueueAnim from 'rc-queue-anim';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import Home from '../pages/Home';
import Drgdata from '../pages/Drgdata'; //Drg数据
import Medicalrecord from '../pages/Medicalrecord'; //病案
import Unenterprise from '../pages/Unenterprise'; //企业文化
import Digitization from '../pages/Digitization'; //数字化
import Hisinfos from '../pages/Hisinfos'; //HIS信息化
import Successfulcases from '../pages/Successfulcases'; //成功案例
import Messages from "../pages/Messages"; //商务信息
import NewsPage from "../pages/News"; //新闻中心

// const Home = Bundle(() => import(/* webpackChunkName: "Home" */ '../pages/Home'));
// const Drgdata = Bundle(() => import(/* webpackChunkName: "Drgdata" */ '../pages/Drgdata'));
// const Medicalrecord = Bundle(() => import(/* webpackChunkName: "Medicalrecord" */ '../pages/Medicalrecord'));
// const Unenterprise = Bundle(() => import(/* webpackChunkName: "Unenterprise" */ '../pages/Unenterprise'));
// const Digitization = Bundle(() => import(/* webpackChunkName: "Digitization" */ '../pages/Digitization'));
// const Hisinfos = Bundle(() => import(/* webpackChunkName: "Hisinfos" */ '../pages/Hisinfos'));
// const Successfulcases = Bundle(() => import(/* webpackChunkName: "Successfulcases" */ '../pages/Successfulcases'));

export default class Eroute extends Component{
    render(){
        const style = {
            paddingTop: '64px',
        }
        return(
            <Fragment>
                <QueueAnim type='left'>
                    <Route component={Header} key='header'></Route>
                        <div id='custom_router' style={style} key='page'>
                            <Switch>
                                <Route path="/about" component={ Home }></Route>
                                <Route path="/product/drgdata" component={ Drgdata }></Route>
                                <Route path="/product/medicalrecord" component={ Medicalrecord }></Route>
                                <Route path="/product/digitization" component={ Digitization }></Route>
                                <Route path="/product/hisinfos" component={ Hisinfos }></Route>
                                <Route path="/unenterprise" component={ Unenterprise }></Route>
                                <Route path='/successfulcases' component={ Successfulcases }></Route>
                                <Route path='/messages' component={ Messages }></Route>
                                <Route path='/news' component={ NewsPage }></Route>
                                <Route path='/' component={ Home }></Route>
                            </Switch>
                        </div>
                        <BackTop />
                    <Footer key='footer'></Footer>
                </QueueAnim>
            </Fragment>
        )
    }
}
import React from 'react';
import './index.scss';
import { Row, Col, Drawer } from 'antd';
import { NavLink } from 'react-router-dom';
import Menu from '../../components/Menu';
import { GlobalOutlined, BulbOutlined, MenuOutlined } from '@ant-design/icons';

class Header extends React.Component {
    state = {
        visible:false,
        currentState:'Index',// 动态添加className
    }

    showDrawer = () => {
      this.setState({
        visible: true,
      });
    };
  
    onClose = () => {
      this.setState({
        visible: false,
      });
    };

    componentDidMount() {
        window.addEventListener('resize', this.resize);
    }
    componentWillUnmount(){
        window.removeEventListener('resize',this.resize);
    }
    resize = () =>{
        let width = document.documentElement.clientWidth;
        if(width>992){
            this.setState({visible: false})
        }
    }

    scrollToAnchor = (anchorName) => {
        if (anchorName) {
            // 找到锚点
            let anchorElement = document.getElementById(anchorName);
            // 如果对应id的锚点存在，就跳转到锚点
            if (anchorElement) { anchorElement.scrollIntoView({ block: 'start', behavior: 'auto' }); }
        }
    }

    showPop = () => {
        document.body.addEventListener("touchmove", { passive: false });  //passive参数：是否让 阻止默认行为(preventDefault()) 失效
        document.body.style.overflow = 'hidden';
    }

    closePop = () => {
        // document.body.removeEventListener('touchmove',self.stopScroll);
        // //添加事件监听时添加了passive参数，在ios9中移除事件监听也需要加此参数
        document.body.removeEventListener('touchmove', { passive: true });
        document.body.style.overflow = 'auto';
    }

    handlePush = (url,active) => {
        this.props.history.push(url);
        window.scrollTo(0, 0);
        this.setState({
            currentState:active
        })
    }

    render() {
        const { visible } = this.state;
        return (
            <div id="header">
                <Row>
                    <Col xs={{span:22,offset:1}} sm={{span:22,offset:1}} lg={{span:20,offset:2}} xl={{span:18,offset:3}} xxl={{span:16,offset:4}}>
                        <Row>
                            <Col xs={{ span: 12 }} sm={{ span: 12 }} md={{ span: 6 }} lg={{ span: 4 }}>
                                <div className="header_logo" onClick={() => this.handlePush('/')}>
                                    <img src={require('assets/img/newlogo.png')} alt="" />
                                </div>
                            </Col>
                            <Col xs={{ span: 12 }} sm={{ span: 12 }} md={{ span: 4, offset: 14 }} lg={{ span: 15, offset: 5 }} xl={{span:12,offset:8}}>
                                <div className="header_navbox">
                                    <ul>
                                        <li><NavLink activeClassName='active_header' exact to='/'><section className="header_title" onClick={() => this.handlePush()}>首页</section></NavLink></li>
                                        <li>
                                            
                                            <NavLink activeClassName='active_header' to='/unenterprise'><section className="header_title">关于联众</section></NavLink>
                                            <div className="navbar_box navbar_box2">
                                                <p><NavLink to='/unenterprise/introduce'>企业介绍</NavLink></p>
                                                <p><NavLink to='/unenterprise/honor'>企业荣誉</NavLink></p>
                                                <p><NavLink to='/unenterprise/demeanour'>企业风采</NavLink></p>
                                            </div>
                                        </li>
                                        <li><NavLink activeClassName='active_header' to='/product'><section className="header_title" onClick={() => { setTimeout(() => { this.scrollToAnchor("product") }, 100) }}>产品与解决方案</section></NavLink>
                                            <div className="navbar_box navbar_box4">
                                                <section className="navbox4_shell">
                                                    <div className="nav_solution">
                                                        <h4><GlobalOutlined />解决方案</h4>
                                                        <p onClick={() => { this.props.history.push('/product/hisinfos');}}><i></i>联众HIS医院信息化管理解决方案</p>
                                                        <p onClick={() => { this.props.history.push('/product/digitization');}}><i></i>联众病案数字化解决方案</p>
                                                        <p onClick={() => { this.props.history.push('/product/medicalrecord');}}><i></i>联众病案管理分析解决方案</p>
                                                        <p onClick={() => { this.props.history.push('/product/drgdata');}}><i></i>联众DRG一体化解决方案</p>
                                                    </div>
                                                    <div className="nav_product">
                                                        <h4><BulbOutlined />产品</h4>
                                                        <p><span><i></i><NavLink to='/product/hisinfos/hospmsg'>HIS医院信息系统</NavLink></span><span><i></i><NavLink to='/product/digitization/digital'>医院病案数字化系统</NavLink></span></ p>
                                                        <p><span><i></i><NavLink to='/product/hisinfos/elerecord'>电子病历系统</NavLink></span><span><i></i><NavLink to='/product/digitization/paperless'>医院无纸化病案系统</NavLink></span></p>
                                                        <p><em className="navbar_box4_line"><i></i>————————</em><span><i></i><NavLink to='/product/digitization/wechatorder'>医院微信预约打印系统</NavLink></span></p>
                                                        <p><span><i></i><NavLink to='/product/drgdata/payment'>DRG医保支付系统</NavLink></span><span><i></i><NavLink to='/product/digitization/printing'>病案自助打印系统</NavLink></span></p>
                                                        <p><span><i></i><NavLink to="/product/drgdata/fund">DRG基金监管系统</NavLink></span><em className="navbar_box4_line"><i></i>————————</em></p>
                                                        <p><span><i></i><NavLink to='/product/drgdata/quality'>DRG医院质量管理与绩效评价平台</NavLink></span><span><i></i><NavLink to='/product/medicalrecord/management'>病案管理分析平台</NavLink></span></p>
                                                        <p><span><i></i><NavLink to='/product/drgdata/threelevel'>三级公立医院绩效考核系统</NavLink></span><span><i></i><NavLink to='/product/medicalrecord/hqms'>病案质量监测系统(HQMS)</NavLink></span></p>
                                                        <p><span><i></i><NavLink to='/product/drgdata/clinical'>基于大数据的临床路径系统</NavLink></span><span><i></i><NavLink to='/product/medicalrecord/code'>病案智能编码系统</NavLink></span></p>
                                                        <p><span><i></i><NavLink to='/product/drgdata/performance'>医院医疗质量管理和费用监控系统</NavLink></span><span><i></i><NavLink to='/product/medicalrecord/cloud'>云病案平台</NavLink></span></p>
                                                    </div>
                                                </section>
                                            </div>
                                        </li>
                                        <li><NavLink activeClassName='active_header' to='/news'><section className="header_title" >新闻中心</section></NavLink></li>
                                        <li><NavLink activeClassName='active_header' to='/successfulcases'><section className="header_title">成功案例</section></NavLink></li>
                                        {/* <li><section className="header_title">服务支持</section></li> */}
                                        {/* <li><NavLink activeClassName='active_header' to='/messages'><section className="header_title">联系我们</section></NavLink></li> */}
                                        <li>
                                            <NavLink activeClassName='active_header' to='/messages'><section className="header_title">联系我们</section></NavLink>
                                            <div className="navbar_box navbar_box2">
                                                <p><NavLink to='/messages/cooperation'>商务合作</NavLink></p>
                                                <p><NavLink to='/messages/joinus'>招贤纳士</NavLink></p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="header_menu" onClick={() => { this.showDrawer() }}>
                                    <MenuOutlined />
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Drawer
                    placement='left'
                    getContainer={ '#root' }
                    closable={false}
                    onClose={this.onClose}
                    visible={visible}
                    zIndex={9999}
                >
                    <Menu close={ this.onClose }></Menu>
                </Drawer>
            </div>
        )
    }

}

export default Header;
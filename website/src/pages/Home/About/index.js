import React from 'react';
import { Row, Col, message } from 'antd';
import { OverPack } from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';
import { MailFilled, EnvironmentFilled, PhoneFilled } from '@ant-design/icons';
import './index.scss';

export default class About extends React.Component {
    state = {
        iptname: "",
        ipttel: "",
        iptproposal: ""
    }
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.Changeipt = this.Changeipt.bind(this)

    }
    Changeipt(ev) {
        this.setState({
            [ev.target.name]: ev.target.value
        })
    }
    handleSubmit(event) {
        const { iptname, ipttel, iptproposal } = this.state;
        event.preventDefault() //阻止的默认行为（表单是的默认行为提交）
        if (!iptname) {
            message.warn('请填写姓名!');
            return;
        } else if (!ipttel) {
            message.warn('请填写手机号!');
            return;
        } else if (!iptproposal) {
            message.warn('请填写您的意见!');
            return;
        }
        if(iptname && ipttel && iptproposal){
            message.success('发送成功！')
        }
    }



    render() {
        const data = [
            {
                title: '企业邮箱',
                icon: <MailFilled />,
                content: 'sales@21unionnet.com',
            },
            {
                title: '企业电话',
                icon: <PhoneFilled />,
                content: '021-63054912',
            },
            {
                title: '企业地址',
                icon: <EnvironmentFilled />,
                content: '上海市黄浦区龙华东路325号博荟广场A幢10楼',
            },
        ]
        return (
            <div id="about">
                <Row>
                    <Col xs={{span:22,offset:1}} sm={{span:22,offset:1}} lg={{span:20,offset:2}} xl={{span:18,offset:3}} xxl={{span:16,offset:4}}>
                        <OverPack playScale={0.3} key="abttitle">
                            <QueueAnim type='bottom' delay={150} duration={800} key="abtAnim1">
                                <h3 key="abttitle1" className="about_title"><span>欢迎您提出意见与建议</span></h3>
                            </QueueAnim>
                        </OverPack>
                        <OverPack playScale={0.3} className='about_content' key="abtcontent">
                            <div className="aboutfrom">
                                <QueueAnim delay={200} duration={800} type="left" key="abt1">
                                    <div key="abtform">
                                        <form onSubmit={this.handleSubmit}>
                                            <section className="about_name">
                                                <Row>
                                                    <Col span={12}><label>您的姓名:</label></Col>
                                                    <Col span={12}><label>联系我们:</label></Col>
                                                </Row>
                                            </section>
                                            <section className="about_input">
                                                <Row>
                                                    <Col span={12}><input type="text" name="iptname" placeholder='请填写您的姓名' onChange={this.Changeipt} value={this.state.iptname} /></Col>
                                                    <Col span={12}><input type="text" name="ipttel" placeholder='请填写您的手机号' onChange={this.Changeipt} value={this.state.ipttel} /></Col>
                                                </Row>
                                            </section>
                                            <p>你的意见与建议:</p>
                                            <textarea className="about_textarea" rows="7" name="iptproposal" onChange={this.Changeipt} value={this.state.iptproposal}>
                                            </textarea>
                                            <Row>
                                                <input type="submit" value="提 交" className="about_sub" />
                                            </Row>
                                        </form>
                                    </div>
                                </QueueAnim>
                            </div>
                            <div className="aboutmsg">
                                <QueueAnim delay={200} duration={800} key="abt2">
                                    <div key="abtwords">
                                        {
                                            data.map((i, index) => (
                                                <div key={index}>
                                                    <section className="aboutmsg_title">
                                                        <Row>
                                                            <Col span={2} offset={2}>{i.icon}</Col>
                                                            <Col span={20} >{i.title}</Col>
                                                        </Row>
                                                    </section>
                                                    <Row>
                                                        <Col span={2} offset={2}></Col>
                                                        <Col span={20} ><p>{i.content}</p></Col>
                                                    </Row>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </QueueAnim>
                            </div>
                        </OverPack>
                    </Col>
                </Row>
            </div>
        )
    }
}
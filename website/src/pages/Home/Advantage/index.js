import React from 'react';
import { OverPack } from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import { Row, Col } from 'antd';
import './index.scss';
import img1 from './img/advantage1.png';
import img2 from './img/advantage2.png';
import img3 from './img/advantage3.png';
import img4 from './img/advantage4.png';

export default class Advantage extends React.Component {
    render() {
        const data = [
            { pic: img1, title: '业内权威专家研发的', content: '一体化解决方案' },
            { pic: img2, title: '覆盖全国的雄厚医院', content: '客户合作经验' },
            { pic: img3, title: '专业、高效的', content: '本地化实施和服务' },
            { pic: img4, title: '高学历的', content: '海外技术团队' },
        ]
        return (
            <div id="advantage">
                <Row>
                    <Col xs={{span:24,offset:0}} sm={{span:22,offset:1}} lg={{span:20,offset:2}} xl={{span:18,offset:3}} xxl={{span:16,offset:4}}>
                        <OverPack playScale={0.3} key="advtitle">
                            <QueueAnim type='bottom' delay={100} duration={800} key="advAnim1">
                                <h3 key="advtitle" className="advantage_title"><span>企业优势</span></h3>
                            </QueueAnim>
                        </OverPack>
                        <OverPack playScale={0.3} key="advcontent" style={{height:'100%',width:'100%'}}>
                            <TweenOne key="advAnim2" className='advAnim2_box' animation={{ opacity: 1, duration: 700 }} style={{ opacity: 0}}>
                                {
                                    data.map((i, index) => (
                                        <div className="advantage_box" key={index}>
                                            <div className="ad_img">
                                                <img src={i.pic} alt="" />
                                            </div>
                                            <section className="ad_words">
                                                <p>{i.title}</p>
                                                <b>{i.content}</b>
                                            </section>
                                        </div>
                                    ))
                                }
                            </TweenOne>
                        </OverPack>
                    </Col>
                </Row>
            </div>
        )
    }
}
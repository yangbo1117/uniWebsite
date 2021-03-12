import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col  } from 'antd';
import './index.scss';
import './hover.css';
import Button from '../../../components/Button';
import img1 from './img/product1.jpg';
import img2 from './img/product2.jpg';
import img3 from './img/product3.jpg';
import img4 from './img/product4.jpg';

export default class Product extends React.Component {
    state = {
        product_list: [
            {
                name: 'productbox1',
                key: 'over1',
                type: ['left', 'right'],
                describe: '专业、安全、准确，加速医院信息化进程',
                title: '联众医院信息化管理解决方案',
                content: '通过建立医院内部高效、稳定的信息管理系统，以病人为中心，高质量完成医院对于人财物的管理，同时满足医院对多元化信息处理的客观需求，保障各相关职能科室以及业务部门的信息交换和密切协作，规避医疗信息的孤岛现象。',
                picture: img1,
                url: '/product/hisinfos'
            },
            {
                name: 'productbox2',
                key: 'over2',
                type: ['right', 'left'],
                describe: '病案资源共享，发掘病案价值',
                title: '联众病案无纸化解决方案',
                content: '联众拥有完整的医疗服务产品线、丰富的医院客户经验以及为不同用户定制的产品解决方案。其中无纸化解决方案包括对数字化翻拍、无纸化病案、病案微信预约以及病案自助打印系统。通过电子病案实现网络传输和信息共享，提升了医院工作效率、医疗管理和质量水平。同时节约了大量纸张和耗材，节约了病案存放空间，节省了人力成本。',
                picture: img2,
                url: '/product/digitization'
            },
            {
                name: 'productbox3',
                key: 'over3',
                type: ['left', 'right'],
                describe: '加强病案管控，促进病案规范化管理',
                title: '联众病案管理分析解决方案',
                content: '从电子病历调取病案首页信息，从HIS系统调取费用信息，减少病案数据录入工作量，进一步减轻医务人员的工作压力，全程质控首页，审核病案信息和编码正确性，有效保障病案首页质量，大幅度减少错差率。',
                picture: img3,
                url: '/product/medicalrecord'
            },
            {
                name: 'productbox4',
                key: 'over4',
                type: ['right', 'left'],
                describe: '基于大数据多维分析，凝聚DRG产品功能',
                title: '联众DRG/DIP一体化解决方案',
                content: '通过事前引导、事中控制、事后分析的方式助力医疗机构提高决策质量，提升医院内部的核心竞争力。DRG/DIP一体化解决方案以不同用户的需求为研发基础，包括以下几个模块：院端病案平台建设、院端DRG平台建设和DRG区域平台建设。',
                picture: img4,
                url: '/product/drgdata'
            },
        ]
    }
    render() {
        const { product_list } = this.state;
        return (
            <div id="product">
                <Row>
                    <Col xs={{span:22,offset:1}} sm={{span:22,offset:1}} lg={{span:20,offset:2}} xl={{span:18,offset:3}} xxl={{span:16,offset:4}}>
                        <h3 className="product_title" key="producttitle"><span>产品展示</span></h3>
                        {
                            product_list.map((item, index) => {
                                return (
                                    <section className="productbox" id={item.name} key={item.url} >
                                        <Row type="flex" align="middle" justify="center" gutter={[{xs:32,sm:32,lg:48,xl:96}, 0]}>
                                            <Col sm={{ span: 24 }} xs={{ span: 24 }} lg={{ span: 12, order: (index % 2) }}  >
                                                <div className="hovereffect">
                                                    <img className="img-responsive" src={item.picture} alt="" />
                                                    <div className="overlay">
                                                        <h2>{item.title}</h2>
                                                        <p>
                                                            <Link to={item.url}>LINK HERE</Link>
                                                        </p>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col sm={{ span: 24 }} xs={{ span: 24 }} lg={{ span: 12 }}>
                                                <div className="productbox_words">
                                                    <p className='words_describe'>{item.describe}</p>
                                                    <h3 className="words_title">{item.title}</h3>
                                                    <div className='words_text'>
                                                        {item.content}
                                                    </div>
                                                    <div className="productbox_btn">
                                                        <Link to={item.url}>
                                                            <Button text={"查看更多"}></Button>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </section>
                                )
                            })
                        }
                    </Col>
                </Row>
            </div>
        )
    }
}
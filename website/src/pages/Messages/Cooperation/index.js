import React from "react";
import { Row, Col, Space } from "antd";
import { MailFilled, PhoneFilled, EnvironmentFilled, UserOutlined, MobileFilled, WechatFilled } from "@ant-design/icons";
import img1 from "./img/user1.jpg";
import img2 from "./img/user2.jpg";
import img3 from "./img/user3.jpg";
import img4 from "./img/user4.jpg";

const data = [
    { title: "HIS解决方案、电子病历系统", username: "孔青晖", tel: "13917667935", wx: img1 },
    { title: "数字化、无纸化解决方案和病案自助打印系统", username: "钱卫锋", tel: "13720386060", wx: img2 },
    { title: "病案管理分析解决方案和病案智能编码系统", username: "阳新胜", tel: "13764537049", wx: img3 },
    { title: "DRG系列产品解决方案", username: "郑伟", tel: "15079186570", wx: img4 },
]
const msgs = [
    {
        title: '邮箱:',
        icon: <MailFilled />,
        content: 'sales@21unionnet.com',
    },
    {
        title: '电话:',
        icon: <PhoneFilled />,
        content: '021-63054912',
    },
    {
        title: '地址:',
        icon: <EnvironmentFilled />,
        content: '上海市黄浦区龙华东路325号博荟广场A幢10楼',
    },
]

const Page = (props) => {
    return(
        <div>
            <div className="card-padding-3 cursor">
                <Row gutter={[24, 24]}>
                    {
                        data.map((item, index) => {
                            return (
                                <Col xl={{ span: 6 }}  sm={{ span: 12 }} xs={{ span: 24 }} key={index}>
                                    <div className="card-showdow card-calc-padding hover-line">
                                        <div className="title-line"></div>
                                        <p className="card-title-m card-title-2">{item.title}</p>
                                        <div className="card-p"><Space><span className="span-b"><UserOutlined /></span><strong className="span-strong">{item.username}</strong></Space></div>
                                        <div className="card-p"><Space><span className="span-b"><MobileFilled /></span><strong className="span-strong">{item.tel}</strong></Space></div>
                                        <div className="flex-card">
                                            <Space>
                                                <img src={item.wx} alt="" className="card-block-wx"/>  
                                                <span className="span-icon-wx"><WechatFilled /></span>
                                            </Space>
                                        </div>
                                    </div>
                                </Col>
                            )
                        })
                    }
                </Row>
            </div>
            {
                msgs.map((i, index) => (
                    <div key={index} className="card-padding-s">
                        <Space>
                            <span className="span-b">{i.icon}</span>
                            <span> </span>
                            <span className="span-b">{i.title}</span>
                            <span className="span-15"><p>{i.content}</p></span>
                        </Space>
                    </div>
                ))
            }
        </div>
    )
}

export default Page;
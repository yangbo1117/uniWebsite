import React from 'react';
import { Row, Col, Divider } from 'antd';
import '../public_scss/_cpt.scss';

const Drgscpt = () => {
    const data = [
        "上海瑞金医院",
        "上海交通大学医学院附属瑞金医院 ",
        "上海长海医院 ",
        "浙江大学医学院附属第一医院 ",
        "浙江大学医学院附属第二医院 ",
        "云南省普洱市人民医院 ",
        "云南省中医医院 ",
        "云南省第一人民医院 ",
        "上海同济大学附属同济医院 ",
        "四川省肿瘤医院 ",
        "浙江省肿瘤医院 ",
        "昆明医科大学第一附属医院 ",
        "山东省立医院 ",
        "昆明医科大学第二附属医院 ",
        "山东省聊城市人民医院 ",
        "云南省第二人民医院 ",
        "浙江大学医学院附属妇产科医院 ",
        "四川省人民医院 ",
        "山东省千佛山医院 ",
        "山东省济宁市第一人民医院 ",
        "浙江省人民医院 ",
        "山东省淄博市中心医院 ",
        "云南省红河州第一人民医院 ",
        "云南省昆明市第一人民医院 ",
        "云南省肿瘤医院 ",
        "山东省淄博市第一人民医院 ",
        "四川省达州市中心医院 ",
        "浙江大学医学院附属邵逸夫医院",
        "江西省人民医院",
        "南昌大学第一附属医院 ",
        "兰州大学附属第一医院 ",
        "福建医科大学附属协和医院 ",
        "安徽医科大学第二附属医院 ",
        "江西省中医药大学附属医院",
        "赣南医学院第一附属医院 ",
        "郑州大学第一附属医院 ",
        "安徽省立医院 ",
        "福建省泉州市第一医院 ",
        "安徽省宿州市立医院",
        "吉林大学第二医院 ",
        "遵义医科大学附属医院 ",
        "山西省大同市第三人民医院 ",
        "山西省临汾市人民医院",
        "吉林大学第三医院 ",
        "贵州省兴义市人民医院 ",
        "新疆维吾尔自治区人民医院 ",
        "新疆医科大学附属肿瘤医院 ",
        "赣州市人民医院 ",
        "南昌大学第二附属医院",
        "……",
    ]
    return (
        <div className='custom_cases'>
            <div className='case_title'>
                <Divider orientation="left"><div className='title_self'>部分医院客户：</div></Divider>
            </div>
            <Row>
                {
                    data.map((i, index) => (
                        <Col lg={{ span: 8 }} sm={{span:12}} xs={{span:24}} key={index}>
                            <div className='custom_cases_item'>{i}</div>
                        </Col>
                    ))
                }
            </Row>
        </div>
    )
}

export default Drgscpt;
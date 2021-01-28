import React from 'react';
import { Avatar, Typography, } from 'antd';
import photo from './img/photo.png';
import '../../css/_page.scss';

const { Title } = Typography;
const Shanghaicpt = () => {
    return (
        <div id='case_hosp'>
            <div className='case_hosp_photo'>
                <div>
                    <Avatar src={photo} size={128}></Avatar>
                </div>
                <div>
                    <Title level={2}>上海交通大学医学院附属瑞金医院</Title>
                </div>
            </div>
            <div className='case_hosp_content'>
                <p>
                    上海交通大学医学院附属瑞金医院经过6年多的DRG应用，DRG现已成为院内考核和精细化管理中不可或缺的一部分:通过DRG绩效考核，医院开始深入临床科室，通过基于DRG的带组医生评价管理，权责分布逐步清晰。让医疗过程透明化、可量化，让疑难杂症第一时间得到治疗，让患者花最少的钱享受最好的服务。真正打造了患者满意，医生积极的“双赢”格局。
                </p>
                <p>
                    在应用DRG进行内部绩效考核与分配的过程中，医院严格按照“两切断、一转变、八要素”的核心要求，通过打破绩效分配要靠定价约束的现象，在医院内部建立一套与医院发展战略相匹配、体现医务人员劳务价值的分配导向。
                </p>
                <p>
                    瑞金医院从平均住院日，病种归类、高峰病种、RW考核等多方面开展设计应用模式。对每个DRG组核定一个平均住院日，根据考核标准对各临床科室制定适当的奖惩措施，提高术前、术中、术后的效率。
                </p>
                <p>
                    使得在三四级手术、疑难危重患者增加的前提下，平均住院日从2013年的8.08天开始逐年下降，其中2017年的平均住院日已下降到6.99天。利用DRG分组明细分析各专科情况，实时监控专科病种结构，帮助各临床科室主动调整结构。
                </p>
                <p>
                    在上海市模式下，高峰病种仅仅4年就从8个增加到56个。通过疾病难易程度( RW)考核，瑞金医院RW>2的收治人数从2013年开始时的7000多人次，在2017年已经上升到了12000人次左右。
                </p>
                <div>
                    <img src={require('./img/shanghai1.png')} alt="" className='case_hosp_img3'></img>
                </div>
            </div>

        </div>

    )
}

export default Shanghaicpt;
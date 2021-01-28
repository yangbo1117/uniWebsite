import React from 'react';
import { Avatar, Typography, Divider } from 'antd';
import photo from './img/photo.png';
import '../../css/_page.scss';

const { Title } = Typography;
const Jiangxicpt = () => {
    return (
        <div id='case_hosp'>
            <div className='case_hosp_photo'>
                <div>
                    <Avatar src={photo} size={128}></Avatar>
                </div>
                <div>
                    <Title level={2}>江西省赣州市人民医院</Title>
                </div>
            </div>
            <div className='case_hosp_content'>
                <p>
                    <img src={require('./img/jiangxi1.png')} alt='' className='case_hosp_img1'></img>
                    2020年4月，江西省卫健委发布了《江西省2019年度DRG绩效分析报告》，赣州市人民医院多项指标再次名列全省前茅。其中，反映收治疾病种类的DRG组数位居全省第二，反映医疗工作总量的DRG总量以及诊疗人次位居全省第三，反映医疗质量安全的低风险死亡率为全省最低，反映医疗服务整体技术难度的CMI值位居地市级医院第一。这是该院继迈入全国地级城市医院百强之后，交出的又一份亮丽成绩单。
                </p>
                <Divider orientation="right" plain="true">
                    内容出处：《今日头条》赣州市人民医院
                </Divider>
                <p>
                近年来，该院高度重视综合服务能力建设，疑难、危急重症疾病诊治水平全面提升，十几个重点病种/术种总例数位居全省前三、赣州市第一。其中急性心梗、急性缺血性脑血管病介入/溶栓、胃底食管静脉曲张内镜治疗、输尿管镜下碎石取石、颅内血肿清除术等位列全省第二，垂体瘤手术、颅内动脉瘤夹闭术/介入、肝脏恶性肿瘤+经肝动脉栓塞化（TACE）、胆总管结石ERCP取石术、前置胎盘、支气管扩张位列全省第三，新生儿呼吸窘迫综合症位列三级综合医院第一。
                </p>
                <p>
                    <img src={require('./img/jiangxi2.png')} alt='' className='case_hosp_img2'></img>
                    DRG绩效评价是以出院患者信息为依据，综合考虑患者的主要诊断和主要治疗方式，结合个体体征如年龄、并发症和伴随病，将疾病的复杂程度和费用相似的病例分到同一个DRG组中，从而让不同强度和复杂程度的医疗服务之间有了客观对比依据，其科学性得到了各级卫生健康行政主管部门和医疗机构的广泛认可。江西省于2015年起先后应用DRG对辖区内三级医院、二级医院开展住院医疗服务、质量绩效评价，定期发布DRG绩效分析结果。
                </p>
                <div>
                    <img src={require('./img/jiangxi3.png')} alt="" className='case_hosp_img3'></img>
                </div>
            </div>

        </div>

    )
}

export default Jiangxicpt;
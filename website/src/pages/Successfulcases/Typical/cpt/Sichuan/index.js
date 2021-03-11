import React from 'react';
import { Avatar, Typography, } from 'antd';
import photo from './img/photo.png';
import '../../css/_page.scss';

const { Title } = Typography;
const Sichuancpt = () => {
    return (
        <div id='case_hosp'>
            <div className='case_hosp_photo'>
                <div>
                    <Avatar src={photo} size={128} ></Avatar>
                </div>
                <div>
                    <Title level={2}>四川省医学科学院·四川省人民医院</Title>
                </div>
            </div>
            <div className='case_hosp_content'>
                <p>
                    通过DRG的考核，四川省人民医院提供了发展思路和考核办法，使医生主动思考科室发展，数据代替经验，医院管理实现质的飞跃;
                    <img src={require('./img/sichuan1.png')} alt='' className='case_hosp_img1'></img>
                    公开公正，让医疗过程透明化，可量化;推进分级诊疗，让疑难重症第一时间能得到治疗，让基层医院发挥防守第一线作用，让老百姓更加合理就医，科学就医，实现资源优质分配;以工作量，工作强度，质量安全为核心的绩效改革方式，打破传统大锅饭模式，真正起到激励作用，优劳优得，多劳多得。
                </p>
                <p>
                    四川省人民医院自系统上线以来， 根据DRG组进行计算， 包括CMl , 相对复杂度RW，手术分级，病种结构，单病种排名等， 将过去依靠数量的考核转变成为依靠质量的绩效考核，原来粗放的考核指标转变为精细化管理。系统可以按病区，科室，工作组，学科，医生等为单位进行绩效分析计算考核，提高医生的工作积极性和效率。
                </p>
                <p>
                    医院其中一个科室，根据DRG绩效考核要求，在床位数一定的情况下，医院考核对三四级手术量的要求进行提高，医生通过思考，以压缩住院日的方式减少住院时间。
                </p>
                <p>
                    该科室采取两个有效办法，一是改进治疗方式，应用临床路径；二是减少术后感染。这样整个医疗组行动起来，手术前充分研究讨论治疗方案，做好手术准备，手术后医生对手术部位进行仔细清理，然后进行缝合，减少感染的风险甚至死亡风险。有效地减少患者的住院日，提高床位周转率。这一改变的意义在于：一是提高医生积极性；二是为病人提供优异的医疗服务；三是减少了医疗费用。这一年该科室完成了医院要求的指标，更好地实现了社会效益与经济效益相结合。
                </p>
                <div>
                    <img src={require('./img/sichuan2.png')} alt="" className='case_hosp_img3'></img>
                </div>
            </div>
        </div>
    )
}

export default Sichuancpt;
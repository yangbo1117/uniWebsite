import React from 'react';
import '../../../assets/css/page.scss';

export default class Code extends React.Component{
    render(){
        return( 
            <div id='custom_drg'>
                <h3><span>病案智能编码系统</span></h3>
                <p>
                随着国家鼓励使用DRG进行医院绩效考核和国家卫健委进行三级公立医院绩效考核，以及全国30个城市试点DRG医保支付，病案首页数据已成为重要的数据来源，完整、准确的病案首页数据是应用成功的关键因素。
                </p>
                <p>
                为高效地辅助医生完成病案首页的录入，确保病案首页数据的质量，上海联众推出DRG智能编码系统，为DRG绩效考核提供重要的数据支撑，为DRG医保支付的成功推行奠定基础。
                </p>
                <p>
                上海联众病案智能编码系统，是全面完整的首页数据审核、校验、辅助指导系统，系统可独立安装运行，也可与其他系统结合运用(病案首页统计系统、HQMS系统、电子病历系统、DRG平台等)。拥有数据采集、数据审核，DRG预入组，病案首页数据质量评分，结果反馈五大主要功能。
                </p>
                <img  className='custom_drg_img' src={require('./img/pic1.png')} alt="" />
                <div className="custom_drg_box">
                    <p className="custom_drg_words">编码审核框架图</p>
                    <b>主要特点与价值</b>
                    <p>智能编码解决方案的主要特点体现在：</p>
                    <ul>
                        <li>由临床专家、病案专家、编码专家共同编辑制订的5万+规则的大型编码知识库，规则覆盖广，提高病案首页数据质量。</li>
                        <li>可以接口嵌入的形式，完成对医生工作站端的功能提示，保证数据的安全性。</li>
                        <li>准确的病案首页质量评分，对病案首页质量做到实时监管。</li>
                        <li>嵌入DRG分组器，对病案进行DRG预分组，做到事前分析，避免入错组。</li>
                        <li>专业的后期维护，拥有15个省近40%的全国百强医院的客户合作经验，可针对各省市不同情况，对智能编码系统进行长期实时维护。</li>
                    </ul>
                </div>
                <p>上海联众DRG智能编码系统，集辅助，审核，监管，评价，分析为一体，全面化、效率化地对病案数据质量提供保障。</p>
            </div>
        )
    }
}
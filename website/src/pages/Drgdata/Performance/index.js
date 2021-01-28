import React from 'react';
import '../../../assets/css/page.scss';

export default class  custom_drg extends React.Component{
    render(){
        return( 
            <div id='custom_drg'>
                <h3><span>医院医疗质量管理和费用监控系统</span></h3>
                <p>
                    上海联众医院医疗质量管理和费用监控系统运用以DRG为依托的医疗质量管理体系，对医院内部医疗能力、医疗效率、技术水平深度分析，帮助医院在提高医疗质量的同时，控制不合理费用的增长，做到社会效益和经济效益协调发展。系统主要应用于病案数据质量控制、DRG医院决策支持、医院绩效考核和医院医保费用分析,为医院加强院内决策部署提供技术支撑。
                </p>
                <img  className='custom_drg_img' src={require('./img/pic1.png')} alt="" />
                <div className="custom_drg_box">
                    <p className="custom_drg_words">平台功能展示</p>
                    <b>主要特点与价值</b>
                    <ul>
                        <li>实现多院区、跨院区的DRG集中管控分析：平台可以进行分院区上传数据以及对总院区、分院区及跨院区数据分析。建立一体化的DRG综合数据库，帮助医院动态掌握各院区的医疗服务运行状况以及医疗资源情况，实现同一医院的不同院区DRG医疗质量与费用监控一体化分析。</li>
                        <li>两种分组模式，实时DRG在线预分组：两个版本的分组器进行分组计算，针对绩效与医保费用，科学合理的入组算法和权重测算，帮助医生提升医疗诊断与病案填写质量，对每一个病例都能做到事前分析，规范诊疗流程、提高医疗质量、控制费用不合理增长。</li>
                        <li>多维度医疗质量评价，标杆指标直观对比：基于DRG数据对全院医疗质量进行决策分析，包括：综合能力(CMI),疑难病例能力,重点监控能力,外科能力,医疗质量,病种结构等，同时对部分同级别同类型医院标杆值进行对比参照，全方位了解医院在区域内的医疗水平，提升医院的医疗技术水平和管理水平。帮助医院管理层进行各类专科的优劣评价以及纵横向比较，对医院医疗质量的相关评价进行宏观管理。</li>
                        <li>深度剖析费用情况，形成医保控费长效机制：系统支持对全院总体费用/DRG组费用/异常费用/亏损病例费用等情况进行分析。通过对费用异常的病案进行分析，避免因编码问题导致的医保费用损失，保障医院的基本利益。结合医院绩效与医疗质量情况，优化完善医院资源配置，实现医疗质量与医院费用的联动。</li>
                    </ul>
                </div>
                <img className='custom_drg_img' src={require('./img/pic2.png')} alt="" />
                <div className="custom_drg_box">
                    <p className="custom_drg_words">平台首页展示</p>
                </div>
                <p>全新的上海联众医院医疗质量管理和费用监控系统帮助医院建立以DRG为依托的医疗质量管理体系，实现对医疗行为的“事前”主动引导，实现医疗行为的“事中”监测控制，完善医疗行为的“事后”分析评价，最终实现医疗服务质量管理的合理化和精细化，为医院管理提供有价值的决策支持。</p>
                <img className='custom_drg_img' src={require('./img/pic3.png')} alt="" />
                <img className='custom_drg_img' src={require('./img/pic4.png')} alt="" />
                <div className="custom_drg_box">
                    <p className="custom_drg_words">费用情况逐级分析下钻展示</p>
                </div>
            </div>
        )
    }
}
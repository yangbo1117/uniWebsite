import React from 'react';
import '../../../assets/css/page.scss';

export default class  custom_drg extends React.Component{
    render(){
        return( 
            <div id='custom_drg'>
                <h3><span>DRG医院质量管理与绩效评价平台</span></h3>
                <p>
                随着我国医疗卫生体制的改革，如何建立完善的医疗服务质量管理体系成为规范医疗服务行为、提高医疗服务质量的有力保证和基础。
                </p>
                <p>
                为了帮助区域管理层对各医院及其科室进行绩效评价，比较医院之间的医疗水平，服务能力和质量，管理医院的工作效率，上海联众研发了DRG医院质量管理与绩效评价平台，运用DRG对区域内各医院的临床科室、医疗组及临床医师的医疗服务绩效、综合能力、疑难病例、外科能力、低风险死亡等情况进行汇总、对比、分析、评价，帮助医院和医院的有关科室提高绩效，规范诊疗，提高服务能力。通过对DRG相关绩效指标的直观对比分析（如CMI、DRG组数、时间消耗指数、费用消耗指数、安全类指标等），帮助区域医院建立完善的DRG绩效评价体系。
                </p>
                <img  className='custom_drg_img' src={require('./img/pic1.png')} alt="" />
                <div className="custom_drg_box">
                    <p className="custom_drg_words">平台主要功能展示</p>
                    <b>主要特点与价值</b>
                    <p>医院质量管理与绩效评价平台：</p>
                    <ul>
                        <li>对DRG相关绩效指标全方位对比分析，为医院综合服务能力、区域专病中心和重点学科（专科）建设等提供决策依据。</li>
                        <li>提高病案数据质量，定期监管医院上传的病案首页数据的完整性和准确性，提示编码异常情况，指导医院正确编码。</li>
                        <li>完善的明细导出功能，多维度可视化的图表交互设计，更直观地详细的查询各项数据和指标，并深度剖析，挖掘数据。</li>
                    </ul>
                </div>
                <img className='custom_drg_img' src={require('./img/pic2.png')} alt="" />
                <div className="custom_drg_box">
                    <p className="custom_drg_words">平台登入界面展示</p>
                </div>
                <p>上海联众DRG医院质量管理与绩效评价平台根据医院绩效评价的指标和需求，设置了数据审核、DRG/单病种分组明细导出、综合能力CMI、疑难病例RW、外科能力、重点监控、医疗质量等功能模块，对关键指标进行多维度深度挖掘分析，直观地监测区域内各医院的运营情况，为区域医院打造完善的DRG绩效评价体系。</p>
            
            </div>
        )
    }
}
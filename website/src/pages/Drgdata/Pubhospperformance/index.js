import React from 'react';
import '../../../assets/css/page.scss';

export default class  Pubhospperformance extends React.Component{
    render(){
        return( 
            <div id='custom_drg'>
                <h3><span>三级公立医院绩效考核系统</span></h3>
                <p>
                2019年1月30日，国务院办公厅发布《关于加强三级公立医院绩效考核的意见》，要求自2020年起，每年2月底前各省均需完成对上一年度辖内医院绩效考核的工作。针对相关政策，上海联众推出了国家三级医院公立绩效考核平台。平台集信息采集、数据计算、指标审核、指标分析与统计、汇总监测于一体，满足综合绩效考评管理要求的同时为卫健委针对公立医院的工作提供更加全面、科学的技术支撑。
                </p>
                <img  className='custom_drg_img' src={require('./img/pic1.png')} alt="" />
                <div className="custom_drg_box">
                    <p className="custom_drg_words">三级公立医院绩效考核数据分析</p>
                    <b>应用意义：</b>
                    <p>&nbsp;&nbsp;&nbsp;<strong>提高医院运营效率，推动医院综合改革</strong></p>
                    <ul>
                        <li>促进收入分配更科学、更公平，实现医疗服务整体效率提高和质量提升，为公立医院综合改革政策落地见效提供信息化支撑，确保结果真实客观。</li>
                        <li>推动管理模式上由粗放式行政化管理向全方位精细化绩效管理转变，拓宽医院管理范围。</li>
                    </ul>
                    <p>&nbsp;&nbsp;&nbsp;<strong>促进分级诊疗，提高医疗效率</strong></p>
                    <ul>
                        <li>引导三级公立医院根据功能定位重点收治疑难复杂和危急重症患者，将适宜患者向下转诊，以提高医疗资源利用效率。</li>
                        <li>推动三级医院逐步扩大日间手术病种范围，缩短患者等待住院和等待手术时间，提高医疗服务效率，缓解患者“住院难”和“手术难”问题。</li>
                    </ul>
                </div>
                <img className='custom_drg_img' src={require('./img/pic2.png')} alt="" />
                <div className="custom_drg_box">
                    <p className="custom_drg_words">三级公立医院绩效考核平台登陆界面</p>
                    <b>核心功能：</b>
                    <p>&nbsp;&nbsp;&nbsp;<strong>数据汇总监测分析</strong></p>
                    <p style={{textIndent:'2em'}}>将全省数据进行汇总后，系统对医院绩效考核一级、二级、三级各大指标的数值及增长曲线等进行直观的监测分析。分析方式包括但不限于：趋势分析、对比分析、象限分析、交叉分析等方面，帮助卫健委全面了解医院绩效考核水平。</p>
                    <p>&nbsp;&nbsp;&nbsp;<strong>评分功能</strong></p>
                    <p>系统对每个指标项进行评分，评分依据从以下几方面进行考虑：</p>
                    <ul>
                        <li>依据绩效考核中的指标导向，判断该指标变化趋势，如：手术并发症应逐渐降低。</li>
                        <li>依据国家或省里相关文件对某些指标的定量规定，如：基药处方比例需达到：三级医院30%、二级医院50%、基层医院70%。</li>
                        <li>参照全省同级医院在CMI、低风险死亡率的排名、均值。</li>
                        <li>其他依据国家和省里的具体评分标准进行调整。</li>
                    </ul>
                </div>
            
            </div>
        )
    }
}
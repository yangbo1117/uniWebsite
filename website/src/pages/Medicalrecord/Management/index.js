import React from 'react';
import '../../../assets/css/page.scss';

export default class Management extends React.Component{
    render(){
        return( 
            <div id='custom_drg'>
                <h3><span>病案管理分析平台</span></h3>
                <p>
                病案是医院医疗业务统计的原始资料之一，是医疗业务活动数量和质量统计分析的可靠依据，病案资料的有效积累可增强临床医学研究结论的准确性。因此，病案管理质量决定了医院医学事业的发展趋势，是医院管理的重要组成部分。现阶段，由于医生或编码员错误填写病案部分内容，导致病案质量不佳。因此，医院亟需加大对于病案的管理力度，提高病案的准确程度。
                </p>
                <p>
                基于此相关背景，上海联众研发了病案管理分析平台，平台将功能模块化，包括配置管理系统、数据接口系统、数据采集系统、病案统计系统、病案示踪系统、病案质控系统等内容。新版医院病案管理分析平台在原有病案管理的基础上，从医院信息化的整体考虑，进一步强调了病案首页系统在医院信息化整体框架中统计分析的作用。
                </p>
                <img  className='custom_drg_img' src={require('./img/pic1.png')} alt="" />
                <div className="custom_drg_box">
                    <p className="custom_drg_words">平台首页展示</p>
                    <b>主要特点与价值</b>
                    <p>上海联众病案管理分析平台的主要特点体现在：</p>
                    <ul>
                        <li>拓宽数据应用范围，支持不同系统相互衔接。</li>
                        <li>结合医院自身情况，自定义配置管理内容。</li>
                        <li>全面了解病案流向，满足等级评审要求。</li>
                        <li>全方位审核数据，减少人员工作量。</li>
                    </ul>
                </div>
                <img className='custom_drg_img' src={require('./img/pic2.png')} alt="" />
                <div className="custom_drg_box">
                    <p className="custom_drg_words">病案统计管理系统界面展示</p>
                </div>
                <p>平台内含完善、标准的数据库，拥有强大的病案查询分析功能、丰富的统计分析报表和内置的自定义报表设计工具。通过平台可以查询病案状态、选择病案签收方式、统计分析任意指标、扩展相关病案模板。平台支持用户一键生成医院简报，为用户决策及时提供所需分析数据。拥有强大灵活的数据接口工具，支持无缝对接医院相关系统，满足医院管理需求。</p>
            
            </div>
        )
    }
}
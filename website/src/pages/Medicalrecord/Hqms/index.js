import React from 'react';
import '../../../assets/css/page.scss';

export default class Hqms extends React.Component{
    render(){
        return( 
            <div id='custom_drg'>
                <h3><span>病案质量监测系统(HQMS)</span></h3>
                <p>
                为进一步丰富和完善医疗服务监管与医院评审评价体系，探索建立基于信息化网络平台,加强医院日常监管与评价的方法，促进医疗质量持续改进，卫生部医管司在《三级综合医院医疗质量管理与控制指标（2011年版）》（卫办医政函〔2011〕54号）的基础上，建立了医疗服务监管信息网络直报系统，开展医疗服务监管信息网络直报试点工作。
                </p>
                <p>
                为了帮助医院上报规范的病案首页，确保医院评审评价数据的真实性，上海联众研发了质量监测系统（HQMS），对医院内所发生的各种医疗过程信息尤其是医疗质量数据信息进行审核，实现上报工作的自动化、信息化，增强上报数据的准确性，使得医院轻松达到A类数据对接标准，方便快捷地完成实时数据上报。
                </p>
                <img  className='custom_drg_img' src={require('./img/pic1.png')} alt="" />
                <div className="custom_drg_box">
                    <p className="custom_drg_words">自动转换卫生部标准编码展示</p>
                    <b>主要特点与价值</b>
                    <p>上海联众病案管理分析平台的主要特点体现在：</p>
                    <ul>
                        <li>根据《HQMS数据对接接口标准》的需要，自动转换卫生部标准编码。</li>
                        <li>根据《数据对接接口校验规则》的要求，对上报数据进行审核、校验。</li>
                        <li>根据卫生部医政司医疗质量检测系统提供的七大类分析指标和统计口径，对上报数据进行分析。</li>
                        <li>根据《HQMS数据对接软件开发说明书》中的说明和医院情况配置对接参数，定时上报HQMS数据。</li>
                    </ul>
                </div>
                <img className='custom_drg_img' src={require('./img/pic2.png')} alt="" />
                <div className="custom_drg_box">
                    <p className="custom_drg_words">HQMS上传数据信息展示</p>
                </div>
                <p>上海联众质量监测系统（HQMS）通过设置相关对接参数和时间实现无人值守的HQMS数据的统计、审核和上报，拥有完善的监测数据审核校验功能和各类质量检测指标分析功能，并提供日志查询掌握相关对接情况。</p>
            
            </div>
        )
    }
}
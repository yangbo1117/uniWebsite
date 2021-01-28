import React from 'react';
import '../../../assets/css/page.scss';
export default class  Medicalpayment extends React.Component{
    render(){
        return( 
            <div id='custom_drg'>
                <h3><span>DRG医保支付系统</span></h3>
                <p>
                随着医保支付方式改革逐步覆盖所有医疗机构和医疗服务，全国范围内普遍实施多元复合式医保支付方式。以DRG为单位付费，能有效约束治疗过程中的治疗方案，从而控制医疗费用的不合理增长、提高治疗的效率，在一定程度上解决“看病难、看病贵”的问题。
                </p>
                <p>
                为了有效帮助医保局和医疗机构对自身管理及工作进行有针对性的调整和优化，逐步构建立体化科学化的控费提质的医保支付管理模式，上海联众推出DRG医保支付系统，结合当地医保政策，与医保业务流程快速结合并推广到各医院应用。拥有成熟稳定的分组器，运用大数据方法，计算每份病案的支付金额，使得控费更加精细化、更贴近当地医保实际支付流程。
                </p>
                <img  className='custom_drg_img' src={require('./img/pic1.png')} alt="" />
                <div className="custom_drg_box">
                    <p className="custom_drg_words">平台登陆界面展示</p>
                    <b>主要特点与价值</b>
                    <p>DRG医保支付解决方案的主要特点体现在：</p>
                    <ul>
                        <li>细化到各DRG组的支付分析，实时监控DRG支付合理性。</li>
                        <li>对区域内整体数据的可视化展示，包括医保资金使用概况、结余前三名医院、病种等信息。</li>
                        <li>按照医院为检索方式开展的支付汇总与明细，以出院科室为分类条件进行的结算分析，方便查询，一目了然。</li>
                        <li>帮助医院规范诊疗行为，避免造成费用过高及过低病例。</li>
                    </ul>
                </div>
                <img className='custom_drg_img' src={require('./img/pic2.png')} alt="" />
                <div className="custom_drg_box">
                    <p className="custom_drg_words">平台主页展示</p>
                </div>
                <p>上海联众DRG医保支付系统根据一般支付系统的功能属性和医院自身特点及需求，已充分具备上传审核病案数据、DRG分组计算、支付计算、生成结算清单、数据分析与监测等功能。</p>
            
            </div>
        )
    }
}
import React from 'react';
import '../../../assets/css/page.scss';

export default class custom_drgregulation extends React.Component {
    render() {
        return (
            <div id='custom_drg'>
                <h3><span>DRG基金监管系统</span></h3>
                <p>
                正确管理医疗保险基金关系到整个基本医疗保险制度的正常运转。如何监管医保费用，控制医疗费用不合理增长，实现医保基金的收支平衡和确保医保基金安全，充分发挥医保基金效益，成为医保部门亟需解决的难题。对于医院而言，如何自查自纠，合理分配资源，规范诊疗流程也是一个重要问题。
                </p>
                <p>
                针对如何解决医保费用监管的核心问题，上海联众研发了DRG基金监管系统。DRG基金监管系统拥有院内版和医保版两个版本，院内版面向医院端，帮助医院自我监督医疗质量，有效管控资源；医保版面向医保局，发挥监管作用，维护医保合法权益。
                </p>
                <p>
                上海联众DRG基金监管系统拥有由医保基金监管专家、临床专家、医保质控专家等共同编辑制订的大型知识库，对医保数据进行逻辑性、合理性等方面的全方位审查。通过自主研发的大型数学模型，丰富大数据分析比较维度，数据下钻深度挖掘主要问题来源，定位追踪分析原因，对于医保数据异常的病例进行智能化检查，对药物、材料和诊疗项目等多方面进行审核监测，有效筛查“疑似虚报”，“高编”，“分解入院”等问题，杜绝“欺诈”，“骗保”，“套现”等医疗乱象，确保基金安全。
                </p>
                <img className='custom_drg_img' src={require('./img/pic1.png')} alt="" />
                <div className="custom_drg_box">
                    <p className="custom_drg_words">DRG基金监管系统意义</p>
                </div>
                <div className="custom_drg_box">
                    <b>主要特点与价值</b>
                    <ul>
                        <li><strong>提升智能监控质量和监管效能：</strong>通过数据分析和智能审核等方式，使用统计和逆运算对医院病例进行监控管理。</li>
                        <li><strong>丰富智能监测维度：</strong>运用智能监控系统，对医院病例进行智能监测，对药品、材料和诊疗项目等多方面进行审核监测。</li>
                        <li><strong>医保费用分析：</strong>医保费用分析与医保基金监管平台有互通性与兼容性。推进医疗服务和支付方式规范化、精细化管理。</li>
                    </ul>
                </div>
                <p>上海联众DRG基金监管系统的功能包括审核疑点展示、DRG组违规统计、过度服务统计、疑似虚报统计、分解服务统计等，对医保基金安全问题进行有效的监管。</p>
                <p>医保局可通过DRG基金监管系统对自身管理及工作进行有针对性的调整和优化，逐步构建立体化科学化的基金监管模式。医院可以通过DRG基金监管系统有效监控评价医院医疗服务能力、医疗质量与安全、医疗服务效率、针对性的完善医疗服务能力，规范诊疗流程，精细化医疗收入管控使得医疗资源得到合理分配与利用。</p>
            </div>
        )
    }
}
import React from 'react';
import '../../../assets/css/page.scss';

export default class custom_drg extends React.Component {
    render() {
        return (
            <div id='custom_drg'>
                <h3><span>医院医疗质量管理和费用监控系统</span></h3>
                <p>
                    绩效考核数据的质量直接关系到医疗技术水平和医院管理能力。国务院办公厅发布的《关于加强三级公立医院绩效考核》中明确表示要加强信息系统建设，提高绩效考核数据准确性。如何提高绩效考核数据质量，减少“唯数据论”现象的发生，是横亘于医疗机构面前的一大难题。
                </p>
                <p>
                    绩效考核的结果可作为公立医院发展规划、重点项目立项、财政投入、缴费核拨、绩效工资、医保支付、价格调整的重要依据，与医院等级评审、重点专科建设和医院绩效评价以及各项评优评先工作紧密结合。
                </p>
                <p>
                    上海联众研发的DRG院内绩效考核数据分析系统，提供面向医院用户的DRG大数据分析服务。区别于以往图表的割离状态，新版院内绩效考核系统摆脱旧版系统框架的局限性，界面升级，支持数据联动，图表下钻，强调图表关联性，多维度对医院、科室、医生组进行数据横向对比分析，全方位了解院内绩效情况，取长补短，对医院下一步的方向计划制定解决方案。
                </p>
                <img className='custom_drg_img' src={require('./img/pic1.png')} alt="" />
                <div className="custom_drg_box">
                    <p className="custom_drg_words">DRG应用对象</p>
                </div>
                <img className='custom_drg_img' src={require('./img/pic2.png')} alt="" />
                <div className="custom_drg_box">
                    <p className="custom_drg_words">平台功能展示</p>
                    <b>主要特点与价值</b>
                    <ul>
                        <li>对医院上传的病案进行数据审核，找出异常病案数据进行提示，指导医院正确编码，提高病案数据的完整性和正确性。</li>
                        <li>与同级标杆医院相关指标进行横向对比分析，提高医院整体综合水平。</li>
                        <li>分组器前置，DRG实时分组和事后各指标对比，分析临床科室、医生的问题所在，引导科室领导制定出本科室的医疗技术指标、规范制度，提升医疗技术和管理水平。</li>
                        <li>支持移动端APP，兼容多种设备，界面清晰，操作简洁。</li>
                    </ul>
                </div>
                <p>DRG院内绩效考核数据统计分析包含：综合能力分析、外科能力分析、疑难病例分析、重点监控病种分析、三级公立医院绩效考核单病种分析、医疗质量分析、病种结构分析等功能。</p>
            </div>
        )
    }
}
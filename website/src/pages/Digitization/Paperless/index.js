import React from 'react';
import '../../../assets/css/page.scss';

export default class Paperless extends React.Component {
    render() {
        return (
            <div id='custom_drg'>
                <h3><span>医院无纸化病案系统</span></h3>
                <p>
                    随着医疗信息化建设的高速发展，作为医院管理的重要组成部分的病案管理需要紧跟时代的步伐。传统的医院病案管理存在三大突出问题：现有的病案库房容量不足；调阅纸质病案费时费力；纸质病案无备份。为了让病案这一宝贵信息库发挥效用，采用现代化的管理方法来加强病案管理已势在必行。
                </p>
                <p>
                    为了降低医院运营成本，提高病案质量，减轻医务人员工作量，同时也加强信息共享，交互服务标准化，上海联众推出了无纸化病案解决方法，以CA平台为基础，对院内各个业务系统进行集成电子签名及无纸化归档改造，依托制作平台和接口平台实现全数字化病案，进而实现可信数字化病案归档。
                </p>
                <p>
                    上海联众无纸化病案基于数字化，住院病历文档通过标准接口实时地接入无纸化病案文档平台，在过程中会对文档进行合规权限验证、按照病案分类重新组织整理、记录变化日志。
                </p>
                <p>
                    系统支持多种完整校验模式、病历文档变更能自动提醒责任部门进行审核，各责任部门审核通过归档，最终形成可以脱离业务系统的可信数字化病案。系统包括归档撤销，封存审核，定义日志记录等一系列操作功能，还可以为患者提供窗口打印、微信预约、自助打印等多种服务模式，方便实际各种社会用途。
                </p>
                <img className='custom_drg_img' src={require('./img/pic1.png')} alt="" />
                <div className="custom_drg_box">
                    <p className="custom_drg_words">无纸化病案平台框架图</p>
                    <b>主要特点与价值</b>
                    <p>无纸化病案的主要特点体现在：</p>
                    <ul>
                        <li><strong>四大归档模式：</strong>系统支持四大归档模式，满足医院个性化管理需要。</li>
                        <li><strong>运行平稳处理高效：</strong>系统运行平稳处理高效，可以支撑医院业务快速增长。</li>
                        <li><strong>纸质电子化过程：</strong>掌握纸质病案数字化的核心技术，帮助医院逐步实现完全无纸化。</li>
                        <li><strong>病案完整、一致和可追溯：</strong>系统设计严谨实现务实，保证归档病案完整、一致和可追溯。</li>
                    </ul>
                </div>
                <img className='custom_drg_img' src={require('./img/pic2.png')} alt="" />
                <div className="custom_drg_box">
                    <p className="custom_drg_words">病案归档流程图</p>
                </div>
                <p>上海联众无纸化病案对病案信息及时采集，确保病案的完整性，无纸化病案产生的数据和住院文档可以提供多种不同类型系统服务临床使用，能够方便医师高效地进行打印、借阅、科研、随访、封存等操作，提高了医院资源利用率，同时推动数字化医院建设，促进医院管理模式建立。</p>
            </div>
        )
    }
}
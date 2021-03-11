import React from 'react';
import '../../../assets/css/page.scss';

export default class Cloud extends React.Component {
    render() {
        return (
            <div id='custom_drg'>
                <h3><span>云病案平台</span></h3>
                <p>
                2015年5月18日，国务院发布了《关于城市公立医院综合改革试点的指导意见》，明确要求公立医院管理机构制定绩效评价指标体系，实行分级诊疗， 鼓励推行按疾病诊断相关组（DRG）付费方式。各地卫健委需要更加科学的评价医院的绩效水平，更好促进分级诊疗体系的建立。 
                </p>
                <p>
                做好新时期医院病案质量管控可加强医院信息化建设，为推进医疗卫生体制改革具有积极的现实意义。
                </p>
                <p>
                上海联众研发了云病案系统(UniCaseCloud)，综合考虑病案首页业务需求，DRG数据审核和分组需求，打造适用于省级、市级、县级、医共体等不同范围区域的云端平台，发挥技术优势，提升各区域医疗机构的病案质量，满足医疗机构首页填写与报表导出需求，为数据安全提供重要保障。协助各级医疗机构(尤其是无病案统计系统或病案统计系统尚不完善的卫生院)对其住院病案首页数据进行统一的采集、审核管理，加强其医疗质量管理与病案质控工作，建立健全病案管理工作流程。
                </p>
                <div className="custom_drg_box">
                    <b>应用意义</b>
                    <p>&nbsp;&nbsp;&nbsp;<strong>支持二级及基层医院在线录入病案</strong></p>
                    <p>云病案平台着力于为尚不完备病案首页系统的二级及基层医院服务，通过将病案录入云端化，协助医院运用新兴技术，提高病案存储的可靠性和安全性，降低医院对病案管理难度。</p>
                    <p>&nbsp;&nbsp;&nbsp;<strong>云端管理医院病案，及时监督病案质量</strong></p>
                    <p>在云端进行病案首页录入及管理，精准管理院端病案，及时监督数据质量，统计分析病案质量，提高医疗机构病案数据质量，保证上报数据的完整性、科学性、规范性，并且符合上报要求，完成相关数据上报工作。</p>
                </div>
                <div className="custom_drg_box">
                    <b>平台功能</b>
                    <p>&nbsp;&nbsp;&nbsp;<strong>云端平台在线编辑器病案录入</strong></p>
                    <ul>
                        <li>2012新版病案首页，支持无病案统计系统或病案统计系统尚不完善的卫生院进行在线编辑录入住院首页基本信息、诊断、手术/操作、费用等信息。</li>
                        <li>编码库及时更新，支持国家临床2.0版本、医保1.0版本。</li>
                    </ul>
                    <p>&nbsp;&nbsp;&nbsp;<strong>实时更新的大型规则知识库</strong></p>
                    <ul>
                        <li>拥有权威的专家团队共同编辑制订的大型规则知识库，审核规则超过5万+，且仍在不断更新升级中。</li>
                        <li>对病案首页填写进行全面审核分析，包含完整性审核、准确性审核、逻辑性审核、新生儿数据审核、手术逻辑审核、诊断合并编码规则审核等十二项审核，保证病案首页的完整性和准确性。</li>
                        <li>云端可在线更新，及时得到最新规则库进行病案审核。</li>
                    </ul>
                    <p>&nbsp;&nbsp;&nbsp;<strong>多方位，多维度的病案质控分析</strong></p>
                    <ul>
                        <li>可根据各个医疗卫生机构的自身需求，对质控规则、质控评分进行自定义设置。</li>
                        <li>逐层细化，实现对区域、全院、科室的病案质控评分情况统计分析，为医疗卫生机构进一步提升病案数据质量和制订管理策略提供数据支撑。</li>
                    </ul>
                    <p>&nbsp;&nbsp;&nbsp;<strong>病案导出功能</strong></p>
                    <ul>
                        <li>支持根据关键指标对范围内数据进行统计排名和分析，方便用户查看整体数据信息并能随时导出报表。</li>
                        <li>提供医疗卫生机构常用的病案统计报表，包括手术质量统计表，住院病人病种顺位表，住院病人疾病诊断顺位表，住院病人手术操作顺位表，全院费用分类统计表，为医院统计分析，完成相关数据报告工作。</li>
                    </ul>
                </div>
            </div>
        )
    }
}
import React from 'react';
import '../../../assets/css/page.scss';

export default class Clinicalpathway extends React.Component {
    render() {
        return (
            <div id='custom_drg'>
                <h3><span>基于大数据的临床路径系统</span></h3>
                <p>
                    在当前医保付费形势下，无论是使用按DRG付费、按病种分值（DIP）付费还是多种医保支付方式共存，控费是大势所趋，这决定着医疗机构的收入、效益以及医疗服务的质量。
                </p>
                <p>
                    为了使医疗机构在加强院内费用管控的同时，提高医疗质量与效率，强化院内绩效管理，还得解决医院最根本的问题：在保证医疗质量的前提下，精细化规范诊疗流程，从源头进行控费。
                </p>
                <p>
                    上海联众开发了基于大数据的临床路径系统，通过对某一类疾病建立一套标准化治疗模式与治疗程序来减少医疗资源的浪费，有效保护患者利益，保证医院医疗质量，提升医院核心竞争力。
                </p>
                <p>
                    基于大数据的临床路径系统对医院的病例大数据进行采集分组，基于DRG分组原理对医疗和护理方案进行设计，测算出单个病种的治疗费用，规范诊疗流程，减少不必要、不合理的诊疗行为，方便医生根据事先制定的方案进行治疗，让医疗效率和医疗质量得到大幅度提升，更好地控制费用不合理增长现象，减少了医疗药品及耗材的浪费，降低了不必要的医疗成本。各医院管理层通过总结临床路径管理实施中出现的问题、提出解决对策，通过明确病种的诊疗护理操作规程，使医护人员行为规范化、标准化，有效避免乱开药、滥检查等过度治疗现象，同时增进医患沟通，建立和谐医患关系。
                </p>
                <img className='custom_drg_img' src={require('./img/pic1.png')} alt="" />
                <div className="custom_drg_box">
                    <p className="custom_drg_words">平台登陆界面展示</p>
                    <b>主要特点与价值</b>
                    <p>基于大数据的临床路径系统的主要特点体现在:</p>
                    <ul>
                        <li><strong>控制医疗成本：</strong>客观公正反应每一病种的科学诊治过程和医疗费用，为帮助医院控制医疗费用不合理增长，得到基金合理补偿提供科学依据。</li>
                        <li><strong>保证医疗质量：</strong>可以作为医疗质量，医疗水平评价的工具，有助于医疗质量的持续改进。</li>
                        <li><strong>提高医院管理水平：</strong>通过对临床路径数据的统计和分析，引导医生合理开展医疗工作，促进医务人员医疗行为规范，持续改进和优化临床路径管理工作，提高医疗管理质量和水平。</li>
                    </ul>
                </div>
                <p>上海联众基于大数据的临床路径系统，开发了1000多个临床路径，包含无合并症/并发症或轻微合并症/并发症对诊疗过程没有大的影响的DRG组，覆盖约90%以上病例，尽可能覆盖到所有的专科。院内应用可以优化治疗方案，提高医疗效率，使医院总收入升高。同时就诊流程的标准化和规范化，可以为医院合理得到医保结算基金补偿提供历史依据。</p>
            </div>
        )
    }
}
import React from 'react';
import '../../../assets/css/page.scss';
export default class Hospmsg extends React.Component {
    render() {
        return (
            <div id='custom_drg'>
                <h3><span>HIS医院信息系统</span></h3>
                <p>
                随着信息技术的发展，医院运行机制也在不断转变。做好信息化建设可推动医院改革深化，加快医院发展速度，提升医院工作效率。上海联众研发了HIS医院信息系统，利用计算机软硬件技术和网络通信技术等现代化手段，对医院及其所属各部门的人流、物流、财流进行综合管理。医护人员通过应用工作站，对在医疗活动各阶段产生的数据进行采集、存储、处理、提取、传输、汇总，加工形成各种信息，为医院整体运行提供全面自动化管理及各种服务，促进医院管理的现代化、科学化。
                </p>
                <img className='custom_drg_img' src={require('./img/pic1.png')} alt="" />
                <div className="custom_drg_box">
                    <p className="custom_drg_words">总体信息流程</p>
                    <b>主要特点与价值</b>
                    <p>HIS医院信息系统的主要特点体现在：</p>
                    <p><strong className='strong_listyle'>一体化系统模块，消除数据壁垒</strong></p>
                    <p>
                        HIS医院信息系统包括门急诊管理系统、电子病历系统(EMR)、药品管理系统、医技管理系统、医学影像系统、物流管理系统、行政管理系统、决策支持系统、医保对账系统、医保数据上传系统、病员综合服务系统、实验室信息系统(LIS)、放射医技信息系统(RIS)和医学影像存储与通信系统(PACS)等内容。通过各系统模块整合，有效实现一体化数据交互，规避医疗信息孤岛，有效消除数据壁垒。
                    </p>
                    <p><strong className='strong_listyle'>减少冗余功能，精细化研发工作站</strong></p>
                    <p>
                    系统内设门诊/住院医生工作站、门诊/住院护士工作站。各工作站主要功能依据职能要求进行研发。如医生工作站主要功能为编辑电子病历、打印、处理医嘱；护士工作站(门诊)主要功能为门诊分诊、排队登记；护士工作站(住院)主要功能则是床位管理、医嘱管理、治疗管理。通过将系统功能专业化、精细化，使医护人员快速掌握并运用，将主要精力投入到对病人的诊疗护理。
                    </p>
                </div>
                <p>信息技术是现代医院宝贵的物质资源，HIS医院信息系统的建设可以整合医院分散于各部门的数据信息，将数据集中统一储存，方便信息数据的提取，增强管理的科学性，协调发展社会效益与经济效益。</p>
            </div>
        )
    }
}
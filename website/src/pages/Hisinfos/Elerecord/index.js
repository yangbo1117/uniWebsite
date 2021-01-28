import React from 'react';
import '../../../assets/css/page.scss';
export default class Elerecord extends React.Component{
    render(){
        return( 
            <div id='custom_drg'>
                <h3><span>电子病历系统</span></h3>
                <p>
                电子病历系统是信息技术和网络技术在医学领域应用的重要媒介，为医学研究提供广阔的前景。上海联众研发的电子病历系统（EMR）提供医疗机构内部使用，利用电子计算机保存、管理、传输和重现数字化的病人的医疗记录，在此基础上充分考虑患者信息的保密性，提高医疗质量和医治效率等服务功能的计算机信息系统。系统内设五大功能模块，分别为：门诊医生工作站、住院医生工作站、住院护理电子病历系统、移动查房系统、病历质量控制系统和随访及科研系统。
                </p>
                <img className='custom_drg_img' src={require('./img/pic1.png')} alt="" />
                <div className="custom_drg_box">
                    <p className="custom_drg_words">电子病历系统首页信息展示</p>
                    <b>主要特点与价值</b>
                    <p>电子病历系统的主要特点体现在：</p>
                    <p><strong className='strong_listyle'>自主选择病案模板,提高病案规范程度</strong></p>
                    <p>为提高病案填写质量和规范程度，电子病历系统含有每个科室的入院录、病程记录、手术记录、出院记录等模板，医生可根据病人的实际情况和科室的客观条件选择相应的模板进行填写。同时系统拥有对病案填写进行提示的功能，帮助医生提高书写病历的效率，规范书写病历。</p>
                    <p><strong className='strong_listyle'>全面查看既往病史，拓宽患者诊疗范围</strong></p>
                    <p>点击文件健康档案，医生可查看该病人的历次住院门诊信息，同时根据就诊记录，研究病人病因以及是否有并发症出现的可能。通过对既往病史进行分析，全面了解患者病情，进行精细化诊疗。</p>
                    <p><strong className='strong_listyle'>严格进行权限管理，保证数据安全可靠</strong></p>
                    <p>安全和可靠是病案数据的应用前提。系统将对病案的修改权限局限于创建者及提交后的上级医师，同时要求只有必须提交的文档才允许打印，其中主治主任查房需上级审核后才能打印。由此提高病案数据安全，维护患者隐私权益，保障病案数据质量。</p>
                    <p><strong className='strong_listyle'>自动生成病历处方，提高医生诊疗效率</strong></p>
                    <p>系统支持用户在依次填写病历内容后自动生成处方内容，简化医生操作流程，提高医生诊疗效率，同时避免由于药品书写出现错误而耽误病人诊疗。</p>
                </div>
                <img  className='custom_drg_img' src={require('./img/pic2.png')} alt="" />
                <div className="custom_drg_box">
                    <p className="custom_drg_words">入院录模版选择界面</p>
                </div>
            </div>
        )
    }
}
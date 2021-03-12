import React from 'react';
import '../../../assets/css/page.scss';

export default class Digital extends React.Component{
    render(){
        return( 
            <div id='custom_drg'>
                <h3><span>医院病案数字化系统</span></h3>
                <p>
                传统的纸质病案数字化通过高速扫描仪将拆散的病案扫描成黑白数字图像，由于扫描仪无法扫描装订的病案，扫描前需要将病案拆散，等扫描完后再重新装订，需要花费大量的人力和物力，而且容易损坏原始纸质病历。
                </p>
                <p>
                上海联众作为国内较早利用非接触方式进行病案数字化的企业，采取翻拍方式，使用数字成像仪直接将装订的纸质病案拍摄成彩色和黑白的数字图像，操作简易，流程简洁，制作速度快，相比于高速扫描仪，数字成像仪更加便宜，使得加工病案更经济、高效。
                </p>
                <p>
                联众数字化病案应用系统是由数字化病案浏览器、管理工作站、打印工作站、科研工作站和随访工作站组成。病案管理部门可以在不同的工作站对数字化病案信息进行检索操作，医护人员无需到病案室借阅纸质病案，直接通过数字化病案浏览器搜索和查看数字化病案。病案数字化大幅提高了病案管理的科学性和工作效率，使病案资源得以充分的利用。 
                </p>
                <img  className='custom_drg_img' src={require('./img/pic1.png')} alt="" />
                <div className="custom_drg_box">
                    <p className="custom_drg_words">病案数字化系统内部结构</p>
                </div>
                <img className='custom_drg_img' src={require('./img/pic2.png')} alt="" />
                <div className="custom_drg_box">
                    <p className="custom_drg_words">病案数字化系统操作流程</p>
                    <b>主要特点与价值</b>
                    <p>病案数字化的主要特点体现在：</p>
                    <ul>
                        <li><strong>节约病案储藏空间：</strong>数字化病案使用硬盘、光盘，节省了医院库房空间，使得存放空间问题得到解决。</li>
                        <li><strong>妥善保管病案：</strong>对病案进行数字化备份，降低管理难度和花费，高效保护病案。</li>
                        <li><strong>优化病案管理：</strong>病案数字化后，所有管理工作均在计算机上进行，大大提高了管理水平。</li>
                        <li><strong>病案检索打印：</strong>检索可查询到数字病案，节省时间人力，降低了病案管理人员的工作强度。</li>
                        <li><strong>方便病案借阅：</strong>按权限借用，更好地保护病案内容，避免了不必要的法律纠纷。</li>
                    </ul>
                </div>
                <p>上海联众提出全数字化病案的概念，将与病案相关的全部文书、图像等转换成统一的图片格式集中存储形成全数字化病案，便于检索使用以及数据挖掘，在实际运用中替代纸质病案，提高病案查询利用率，真正发挥病案信息的价值和作用。 </p>
            </div>
        )
    }
}
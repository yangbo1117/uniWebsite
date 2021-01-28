import React from 'react';
import { Collapse } from 'antd';
import { withRouter } from 'react-router-dom';
import './index.scss';


const { Panel } = Collapse;

class CustomMenu extends React.Component{
    handleClick = (e,url) =>{
        e.stopPropagation();
        e.cancelBubble = true;
        this.props.history.push(url);
        this.props.close();
    }

    scrollToAnchor = (anchorName) => {
        if (anchorName) {
            // 找到锚点
            let anchorElement = document.getElementById(anchorName);
            // 如果对应id的锚点存在，就跳转到锚点
            if (anchorElement) { anchorElement.scrollIntoView({ block: 'start', behavior: 'auto' }); this.props.close()  }
        }
    }

    state={
        data1:[
            {
                name:'企业介绍',url:'/unenterprise/introduce'
            },
            {
                name:'企业荣誉',url:'/unenterprise/honor'
            },
            {
                name:'企业风采',url:'/unenterprise/demeanour'
            },
        ],
        data2:[
            { name:'联众HIS医院信息化管理解决方案',url:'/product/hisinfos'},
            { name:'联众病案数字化解决方案',url:'/product/digitization'},
            { name:'联众病案管理分析解决方案',url:'/product/medicalrecord'},
            { name:'联众DRG一体化解决方案',url:'/product/drgdata'},
        ],
        data3:[
            { name:'HIS医院信息系统',url:'/product/hisinfos/hospmsg'},
            { name:'电子病历系统',url:'/product/hisinfos/elerecord'},
            { name:'医院病案数字化系统',url:'/product/digitization/digital'},
            { name:'医院无纸化病案系统',url:'/product/digitization/paperless'},
            { name:'医院微信预约打印系统',url:'/product/digitization/wechatorder'},
            { name:'病案自主打印系统',url:'/product/digitization/printing'},
            { name:'病案管理分析平台',url:'/product/medicalrecord/management'},
            { name:'病案质量监测系统(HQMS)',url:'/product/medicalrecord/hqms'},
            { name:'病案智能编码系统',url:'/product/medicalrecord/code'},
            { name:'云病案平台',url:'/product/medicalrecord/cloud'},
            { name:'三级公立医院绩效考核系统',url:'/product/drgdata/threelevel'},
            { name:'DRG医保支付系统',url:'/product/drgdata/payment'},
            { name:'DRG基金监管系统',url:'/product/drgdata/fund'},
            { name:'DRG医院质量管理与绩效评价平台',url:'/product/drgdata/quality'},
            { name:'基于大数据的临床路径系统',url:'/product/drgdata/clinical'},
            { name:'医院医疗质量管理和费用监控系统',url:'/product/drgdata/performance'},
        ],
        data4: [
            {name:'商务合作', url: "/messages/cooperation"},
            {name:'招贤纳士', url: "/messages/joinus"},
        ]
    }
    render(){
        const { data1, data2, data3, data4 } = this.state;
        return(
            <div id='custom_menu' ref='custom_menu'>
                <Collapse  expandIconPosition='right' bordered={false} accordion>
                    <div className="ant-collapse-item ant-collapse-no-arrow">
                        <div className="ant-collapse-header" role="button"  aria-expanded="false" onClick={(e)=>{this.handleClick(e,'/')}}>
                        首页
                        </div>
                    </div>
                    <Panel header="关于联众" key="1" showArrow={true}>
                       {
                           data1.map((item,index)=>(
                            <p key={index} onClick={(e)=>{this.handleClick(e,item.url)}}>{item.name}</p>
                           ))
                       }
                    </Panel>
                    <Panel showArrow header="产品与解决方案" key="2">
                        <Collapse expandIconPosition='right' bordered={false} accordion>
                            <Panel header='解决方案' key='4'>
                                {
                                    data2.map((item,index)=>(
                                        <p key={index} onClick={(e)=>{ this.handleClick(e,item.url) }}>{item.name}</p>
                                    ))
                                }
                            </Panel> 
                            <Panel header='产品' key='5'>
                                {
                                    data3.map((item,index)=>(
                                        <p key={index} onClick={(e)=>{ this.handleClick(e,item.url) }}>{item.name}</p>
                                    ))
                                }
                            </Panel> 
                        </Collapse>
                    </Panel>
                    <div className="ant-collapse-item ant-collapse-no-arrow" onClick={(e) => { this.handleClick(e,"/news") }}>
                        <div className="ant-collapse-header" role="button"  aria-expanded="false">
                        新闻中心
                        </div>
                    </div>
                    <div className="ant-collapse-item ant-collapse-no-arrow" onClick={(e)=>{ this.handleClick(e,"/successfulcases") }}>
                        <div className="ant-collapse-header" role="button"  aria-expanded="false">
                        成功案例
                        </div>
                    </div>
                    <Panel header="联系我们" key="6" showArrow={true}>
                       {
                           data4.map((item,index)=>(
                            <p key={index} onClick={(e)=>{this.handleClick(e,item.url)}}>{item.name}</p>
                           ))
                       }
                    </Panel>
                    {/* <div className="ant-collapse-item ant-collapse-no-arrow" onClick={(e) => { this.handleClick(e,"/messages") }}>
                        <div className="ant-collapse-header" role="button"  aria-expanded="false">
                            联系我们
                        </div>
                    </div> */}
                </Collapse>
            </div>
        )
    }
}

export default withRouter(CustomMenu);
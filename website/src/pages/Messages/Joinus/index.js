import React from "react";
import { Space } from "antd";
import { UserOutlined, PayCircleOutlined } from "@ant-design/icons";

const data = [
    {
        position: "软件工程师",
        count: "25人",
        salary: "10000-25000",
        worktime: "常日班",
        duty: {
            title: "岗位职责：",
            content: [
                "公司相关产品系统开发；",
                "后期系统更新，升级开发；",
                "对公司产品系统进行演示、介绍及系统后期维护支持。",
            ]
        },
        task: {
            title: "任职要求：",
            content: [
                "一本211及以上院校，计算机相关专业或3年以上项目经验；",
                "熟悉常用的设计模式；",
                "对Html5, Css3, Jquery, Bootstrap等主流前端技术熟悉；",
                "熟练掌握Java或C#等至少一门面向对象编程语言；",
                "熟练掌握诸如Asp.Net Core，Entity Framework Core, Redis等技术框架；",
                "熟练掌握Sql Server等关系型数据库,可独立完成数据库的设计及优化操作；",
                "具备善于思考，具有独立解决问题的能力。",

            ]
        }
    },
    {
        position: "软件实施员",
        count: "8人",
        salary: "6000-12000",
        worktime: "常日班",
        duty: {
            title: "岗位职责：",
            content: [
                "负责公司软件产品的实施，包括安装、调试、系统上线；",
                "对软件进行后期维护，包括产品升级、更改设置等。",
                "负责公司软件产品的培训演示及交流。",
                "帮助客户解决系统现场运行中的各种问题，并及时反馈和汇报工作，针对公司项目实施流程提出合理化建议。",
            ]
        },
        task: {
            title: "任职要求：",
            content: [
                "本科，计算机相关专业；",
                "熟悉Sql Server等大型数据库，熟悉Sql语言与计算机硬件；",
                "可以适应出差;",
                "具有良好的分析和解决问题能力、良好的沟通能力、良好的宣讲能力；",
                "较好的团队意识，有很强的责任心、有很强的抗压能力;",
                "有医疗相关软件实施维护经验优先。",
            ]
        }
    },
    {
        position: "项目助理",
        count: "8人",
        salary: "6000-12000",
        worktime: "常日班",
        duty: {
            title: "岗位职责：",
            content: [
                "根据项目立项文件协调各部门负责人员，制作项目计划；",
                "根据项目计划制作项目核算；",
                "执行项目计划，跟踪运营、完成验收；",
                "项目现场工作人员的日常管理，与客户、销售、现场管理人员保持维护沟通；",
                "协调公司其他部门完成项目工作。",
            ]
        },
        task: {
            title: "任职要求：",
            content: [
                "本科学历，专业不限；",
                "工作细致认真且有耐心，有良好的执行力；",
                "有文职类工作经验者优先。",
            ]
        }
    },
    {
        position: "商务助理",
        count: "2人",
        salary: "6000-12000",
        worktime: "常日班",
        duty: {
            title: "岗位职责：",
            content: [
                "负责组织部门会议、会中记录、跟进会议决议的执行进展；",
                "负责客户信息管理、销售合同管理；",
                "负责公司项目的整体监管，重点关注项目实施中可能的风险点，保证该项目顺利完成；",
                "协助上级领导汇总编排周度、月度计划和总结，跟进计划执行进展，跟进销售项目的进展；",
                "汇总各部门的业务数据，并进行数据分析。妥善调度和调整项目实施方案 ；",
                "领导交办的其他工作。",
            ]
        },
        task: {
            title: "任职要求：",
            content: [
                "全日制本科985或211学历优先，有项目管理经验、医疗软件行业优先，可接受优秀应届生；",
                "形象好，气质佳，富有亲和力；",
                "具备良好的沟通协调能力、有责任心、性格活泼开朗、有较强的服务意识；",
                "普通话准确流利、具备一定的商务礼仪知识；",
                "熟练使用办公电脑软件。",
            ]
        }
    },
]

const Page = (props) => {
    return(
        <div className="card-padding-3">
            {
                data.map((item,index) => {
                    return (
                        <div key={index}>
                            <div className="position-title-box">
                                <p className="title-position">{item.position}</p>
                                <div className="card-padding-1">
                                    <Space>
                                        <Space>
                                            <UserOutlined />
                                            <span className="span-strong">{item.count}</span>
                                        </Space>
                                        <Space>
                                            <PayCircleOutlined />
                                            <span className="span-strong">{item.salary}</span>
                                        </Space>
                                        <span className="span-strong">{item.worktime}</span>
                                    </Space>
                                </div>
                            </div>
                            <div className="card-padding-1"> 
                                <p className="span-b paddingBottom-1">{item.duty.title}</p>
                                {
                                    item.duty.content.map((text, no) => {
                                        return (
                                            <p className="list-indent" key={no}>{no + 1}、{text}</p>
                                        )
                                    })
                                }
                            </div>
                            <div className="card-padding-1">
                                <p className="span-b paddingBottom-1">{item.task.title}</p>
                                {
                                    item.task.content.map((text, no) => {
                                        return (
                                            <p className="list-indent" key={no}>{no + 1}、{text}</p>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Page;
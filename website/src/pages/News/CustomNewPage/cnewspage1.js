import React, { Fragment } from "react";
import file from "./imgs/重磅｜医院医疗质量管理和费用监控系统V2.0全新升级！.pdf"
export default () => {
    return (
        <Fragment>
            <div style={{height:"100vh", width: "100vw", position: "fixed", zIndex: "101"}}>
                <iframe src={file} style={{width:'100%',height:'100%'}} title="重磅｜医院医疗质量管理和费用监控系统V2.0全新升级！"></iframe>
            </div>
        </Fragment>
    )
};
import React from 'react';
import { Spin } from 'antd';
import Loadable from 'react-loadable';

export default function withLoadable (comp) {
    const style={
        minHeight:'100vh',
        width:'100%',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }
    return Loadable({
        loader:comp,
        loading:()=><div style={style}><Spin></Spin></div>,
        delay:0
    })
}
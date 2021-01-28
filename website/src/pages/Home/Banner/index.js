import React from 'react';
import { Carousel } from 'antd';
import './index.scss';
import TweenOne from 'rc-tween-one';
import { OverPack } from 'rc-scroll-anim';

export default class Banner extends React.Component{
    render(){
        let settings = {
            effect:"fade",
            infinite: true,
            speed: 1000,//图片切换速度
            autoplaySpeed :2500, //轮播时长
            autoplay:true,
        };
        return(
            <div id="banner">
                <OverPack key='banner' playScale={0.1} >
                    <TweenOne key="banner1"  animation={{ opacity: 1, duration:1000 }}
                        style={{ opacity: 0,}}
                    >
                        <Carousel {...settings}>
                            <img src={require("./img/banner1.jpg")} alt="" />
                            <img src={require("./img/banner2.jpg")} alt="" />
                            <img src={require("./img/banner3.jpg")} alt="" />
                            <img src={require("./img/banner4.jpg")} alt="" />
                        </Carousel>
                    </TweenOne>
                </OverPack>
            </div>
        )
    }
}
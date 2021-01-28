import React from 'react';
import './index.scss';
import Slider from "react-slick";
import { OverPack } from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';
import { Row, Col } from 'antd';
import list from "assets/js/newsdata";

export default class News extends React.Component {
  
  render() {
    let newsList = list.filter(i => i.show).reverse().slice(0, 6);
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplay: true,
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div id="news">
        <div className="news_shell">
          <Row>
            <Col xs={{span:20,offset:2}} sm={{span:20,offset:2}} lg={{span:20,offset:2}} xl={{span:18,offset:3}} xxl={{span:16,offset:4}}>
              <OverPack playScale={0.3} key="newtitle">
                <QueueAnim type='bottom' delay={100} duration={800} key="newsAnim1">
                  <h3 className="news_title" key="newstitle"><span>新闻动态</span></h3>
                </QueueAnim>
              </OverPack>
              <OverPack  playScale={0.3} key="newcontent">
                <QueueAnim type='bottom' delay={200} duration={800} key="newsAnim2">
                  <div className="news_pc" key="newscontent">
                    <Slider {...settings}>
                      {newsList.map((item, index) => {
                        return (
                          <a href={item.url} target="_blank" rel='noopener noreferrer' key={index} >
                            <div className="newsbox">
                              <div className="news_img">
                                <img src={item.photo} alt="" />
                              </div>
                              <section className="news_inner">
                                <p className='news_h4'>{item.title}</p>
                                <p className="news_time">{item.time}</p>
                                <p className="news_words" style={{"WebkitBoxOrient": "vertical"}}>{item.msg}</p>
                              </section>
                            </div>
                          </a>
                        )
                      })}
                    </Slider>
                  </div>
                </QueueAnim>
              </OverPack>
            </Col>
          </Row>
        </div>
      </div>
    )
  }

}
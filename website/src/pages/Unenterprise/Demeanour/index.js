import React from 'react';
import './index.scss';
import '../_public_scss/_title.scss';
import Slider from "react-slick";
import { Row, Col } from 'antd';
import { createFromIconfontCN } from '@ant-design/icons';
const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1911746_zwmlxkspm6.js',
});

let data = new Array(32).fill("");
export default class Demeanour extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  render() {
    const style = {
      fontSize:'38px',
      padding:'15px',
      fontWeight: 700,
    }
    return (
      <div id="demeanour">
        <h4 className='public_enterprise_title'><span>企业风采 Corporate style</span></h4>
       <div className='demeanour_text_shell'>
        <Row gutter={[32,32]}>
            <Col md={{span:6}} xs={{span:12}} sm={{span:12}} >
              <section className='demeanour_textbox'>
                <IconFont type="icon-yiliaoweisheng-3" style={ style }/>
                <p>同舟共济，携手共进</p>
              </section>
            </Col>
            <Col md={{span:6}} xs={{span:12}} sm={{span:12}} >
              <section className='demeanour_textbox'>
                <IconFont type="icon-yiliaoweisheng-2" style={ style }/>
                <p>团结拼搏，争创佳绩</p>
              </section>
            </Col>
            <Col md={{span:6}} xs={{span:12}} sm={{span:12}} >
              <section className='demeanour_textbox'>
                <IconFont type="icon-yiliaoweisheng-" style={ style }/>
                <p>扬帆起航，劈波斩浪</p>
              </section>
            </Col>
            <Col md={{span:6}} xs={{span:12}} sm={{span:12}} >
              <section className='demeanour_textbox'>
                <IconFont type='icon-yiliaoweisheng-1' style={ style }/>
                <p>天赋钻誉，专业精锐</p>
              </section>
            </Col>
          </Row>
       </div>
        <div className='vh_slider1_shell'>
          <Slider
            autoplay={ false }
            infinite={ true }
            asNavFor={this.state.nav2}
            ref={slider => (this.slider1 = slider)}
          >
            {
              data.map((item, index) => (
                <div className="viewhigh_slider1" key={index}>
                  <img src={require(`./img/demeanour${data.length - (1 + index)}.jpg`)} alt="" />
                </div>
              ))
            }
          </Slider>
        </div>
        <div className='vh_slider2_shell'>
          <Slider
            asNavFor={this.state.nav1}
            ref={slider => (this.slider2 = slider)}
            slidesToShow={4}
            swipeToSlide={true}
            focusOnSelect={true}
          >
            {
              data.map((item, index) => (
                <div className="viewhigh_slider2" key={index}>
                  <img src={require(`./img/demeanour${data.length - (1 + index)}.jpg`)} alt="" />
                </div>
              ))
            }
          </Slider>
        </div>
      </div>
    );
  }
}
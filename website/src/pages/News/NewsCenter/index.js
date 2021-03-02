import React, { Component } from "react";
import newsList from "assets/js/newsdata";
import { List, Card, ConfigProvider, Button } from "antd";
import "./index.scss";
import zh_CN from 'antd/es/locale/zh_CN'; //汉化

const { Meta } = Card;
class Page extends Component {
    render() {
        const ListData = [].concat(newsList).sort((a,b) => b.id - a.id);
        return(
            <div className="card-padding-3">
                <ConfigProvider locale={zh_CN}>
                <List
                    grid={{ 
                        gutter: [48, 48], 
                        xs: 1,
                        sm: 1,
                        md: 2,
                        lg: 2,
                        xl: 3,
                        xxl: 3,  
                    }}
                    pagination={{
                        pageSize: 9,
                        showQuickJumper: { show: true, goButton: <Button size= "small" type="link" >前往</Button>}
                    }}
                    dataSource={ListData}
                    renderItem={item => (
                    <List.Item>
                        <a target="_blank" rel="noopener noreferrer" href={item.url}>
                         <Card
                            style={{ backgroundColor: "#F7F7F7"}}
                            hoverable
                            cover={
                                // <div style={{width: "100%", height: 250, backgroundImage: `url(${item.photo})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }}></div>
                                <div style={{width: "100%", height: 250, display:"flex", justifyContent:"center", overflow: "hidden"}}>
                                    <img src={item.photo} alt="" style={{display: "block",height: "100%"}}/>
                                </div>
                            }
                        >
                            <Meta description={
                                <>
                                    <div style={{ width: "100%",minHeight: 70}}>
                                        <p className="news-title-b" >{item.title}</p>
                                    </div>
                                    <p>{item.time}</p>
                                </>
                            } />
                        </Card>
                        </a>
                    </List.Item>
                    )}
                />
                </ConfigProvider>
            </div>
        )
    }
}

export default Page;
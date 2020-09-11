
/**logo+导航栏  */


import React from 'react'

import {Row, Col} from 'antd';
import { Menu } from 'antd';
import {
    HomeOutlined,
    SettingFilled,
    SmileOutlined,
    SyncOutlined,
    LoadingOutlined,
    DribbbleOutlined,
    UserOutlined ,
    SettingOutlined
    
    
  } from '@ant-design/icons';


export default class PcHeader extends React.Component{
    constructor(){
        super();
        this.state={
            current:"top"
        }
    }
    render(){
        const { current } = this.state;
        return(
         <header>
              <Row>
                 <Col span={2}></Col>
                 <Col span={4}>
                     <a href="#" class="logo">
                         <img src='../../img/logo.gif'></img>
                         <span>电信</span>
                     </a>
                 </Col>
                 <Col span={16}>
                 <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                     <Menu.Item key="top" >
                            <HomeOutlined></HomeOutlined> 头条
                     </Menu.Item>
                     <Menu.Item key="shehui"  >
                            <UserOutlined /> 社会
                     </Menu.Item>
                     <Menu.Item key="guonei" >
                            <SettingOutlined /> 国内
                     </Menu.Item>
                     <Menu.Item key="guiji"  >
                           <SyncOutlined /> 国际
                     </Menu.Item>
                     <Menu.Item key="yule" >
                           <SettingFilled></SettingFilled>  娱乐
                     </Menu.Item>
                     <Menu.Item key="tiyu"  >
                          <DribbbleOutlined />  体育
                     </Menu.Item>
                     <Menu.Item key="keji" >
                           <LoadingOutlined></LoadingOutlined>科技
                     </Menu.Item>
                     <Menu.Item key="shishang"  >
                          <SmileOutlined></SmileOutlined>  时尚
                     </Menu.Item>
                 </Menu>

                 </Col>
                 <Col span={2}></Col>
                </Row>
         </header>
        )
    }
}
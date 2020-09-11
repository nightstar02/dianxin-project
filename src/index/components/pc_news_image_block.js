import React from 'react'
import { Card } from 'antd';

export default class PcNewsImageBlock extends React.Component{
    render(){
        const { Meta } = Card;
        return(
            <div class="topNewsList">
                <Card hoverable style={{ width: 130 }}  
                      cover={<img alt="example" src="../../img/logo.gif" />}>
                    <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>
                <Card hoverable style={{ width: 130 }} 
                      cover={<img alt="example" src="../../img/logo.gif"/>}>
                    <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>
                <Card hoverable style={{ width: 130 }} 
                      cover={<img alt="example" src="../../img/logo.gif" />}>
                    <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>
                <Card hoverable style={{ width: 130 }} 
                      cover={<img alt="example" src="../../img/logo.gif" />}>
                    <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>
                <Card hoverable style={{ width: 130 }} 
                      cover={<img alt="example" src="../../img/logo.gif" />}>
                    <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>
                <Card hoverable style={{ width: 130 }} 
                      cover={<img alt="example" src="../../img/logo.gif" />}>
                    <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>
            </div>
        )
    }
}
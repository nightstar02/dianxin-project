import React from 'react'

import {Row, Col} from 'antd';
import { Carousel } from 'antd';

import PcNewsImageBlock from './pc_news_image_block'


export default class PcNewContainer extends React.Component{
    
    render(){

        const contentStyle = {
           dots:true,
           autoplay:true,
           speed:500,


        };

        return(
         <div>
                <Row>
                <Col span={2}></Col>
                <Col span={20}>
                    <div class="leftContainer">
                        <div class="carousel">
                        <Carousel {...contentStyle}>
                          <div>
                             <img src="../../img/微信图片_20200911143538.jpg"></img>
                         </div>

                         <div>
                             <img src="../../img/微信图片_20200911143557.jpg"></img>
                         </div>

                         <div>
                           <img src="../../img//微信图片_20200911143601.jpg"></img>
                         </div>

                         <div>
                           <img src="../../img/微信图片_20200911143604.jpg"></img>
                         </div>
                        </Carousel>
                             </div>
                        <PcNewsImageBlock></PcNewsImageBlock>
                    </div>
                </Col>
                <Col span={2}></Col>
                
            </Row>
         </div>
        )

    }


}
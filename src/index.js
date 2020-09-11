/*
 * @Author: your name
 * @Date: 2020-09-10 09:18:05
 * @LastEditTime: 2020-09-11 10:45:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit"
 * @FilePath: \webpack-project\src\search.js
 */

import React from 'react'
import ReactDom from 'react-dom'

import MediaQuery from 'react-responsive'
import 'antd/dist/antd.css';


import PcIndex from './index/components/pc_index'
import MobileIndex from './index/components/mobile_index'





class Root extends React.Component{
    render(){
        return(
            <div>
            
                <MediaQuery query="(min-device-width:1224px)"><PcIndex></PcIndex>
                </MediaQuery>

                <MediaQuery query="(max-device-width:1224px)">  <MobileIndex></MobileIndex>
                </MediaQuery>
                 
               
            </div>
          /*   <div class="text">
            你眉眼弯似月，衣袂翩如雪，人间风景因你而憔悴。<img src={logo}></img>
            </div> */
        )
    }
}
<div id="root">
    
</div>

ReactDom.render(
    <Root></Root>,
    document.getElementById("root")
)
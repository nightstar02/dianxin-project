/*
 * @Author: your name
 * @Date: 2020-09-10 09:18:05
 * @LastEditTime: 2020-09-10 15:39:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit"
 * @FilePath: \webpack-project\src\search.js
 */

import React from 'react'
import ReactDom from 'react-dom'
//import './css/search.css'
import './css/search.less'
import logo from './img/logo.png'

class Search extends React.Component{
    render(){
        return <div class="text">
            你眉眼弯似月，衣袂翩如雪，人间风景因你而憔悴。<img src={logo}></img>
            </div>
    }
}
<div id="root">
    
</div>

ReactDom.render(
    <Search></Search>,
    document.getElementById("root")
)
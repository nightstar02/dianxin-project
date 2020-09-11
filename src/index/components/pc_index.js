
import React from 'react'
import PcHeader from './pc_header'
import PcFooter from './pc_footer'
import PcNewContainer from './pc_news_Container'

export default class PcIndex extends React.Component{
    render(){
        return(
            <div class="container">
              <PcHeader></PcHeader>
              <PcNewContainer></PcNewContainer>
              <PcFooter></PcFooter>
            </div>
        )
    }
}
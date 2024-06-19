import React, { Component } from 'react'

const HOCComp = (Wrappercount) => {
    class HOC extends Component{
        constructor(props) {
            super(props)
        
            this.state = {
                 count:0
            }
        }
        counterinc = ()=>{
            this.setState(({count:this.state.count+1}))
        }

        render(){
            return <Wrappercount count={this.state.count} counterinc={this.counterinc}></Wrappercount>
        }
    }
    return HOC
    
}

export default HOCComp

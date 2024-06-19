import React, { Component, Fragment } from 'react'
import ChildCom1 from './ChildCom1'

 class ParentComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             empName:"sandeep",
             empSalary:20000
        }
    }
    
    changedata = ()=>{
        this.setState(({empSalary:this.state.empSalary+5000}))
    }
    


    render() {
        return (
            <React.Fragment>
                <h1>hi</h1>
                <p>Employee Name is:<strong>{this.state.empName}</strong></p>
                <p>Employee Salary is:<strong>{this.state.empSalary}</strong></p>
                <button type='button' onClick={()=>this.changedata()}>change state Data</button>
                <hr/>
                <ChildCom1 name={this.state.empName} salary={this.state.empSalary} changedata={this.changedata}/>
                <hr/>
            </React.Fragment>
        )
    }
}

export default ParentComp

import React from "react";
import {connect} from "react-redux";
import * as actions from "./action.js";
import {bindActionCreators} from "redux";

class App extends React.Component{
  zengjiashu(){
    var number=Number(this.refs.numbertext.value);
    this.props.actions.zengjiashu(number);
  }
  render(){
    return (
      <div>
      <div>{this.props.v}</div>
      <button onClick={this.props.actions.zengjia}>+</button>
       &nbsp;
      <button onClick={this.props.actions.jianshao}>-</button>
      <p>
      <input type="text" ref="numbertext"/>
      <input type="button" value="按我增加这么多" onClick={(this.zengjiashu).bind(this)}/>
      </p>
      </div>
    );
  }
}

export default connect(
  (state)=>{
      return {
        v:state.v
      }
  },
  (dispatch)=>{
     return {
       actions:bindActionCreators(actions,dispatch)
     }
  }
)(App);

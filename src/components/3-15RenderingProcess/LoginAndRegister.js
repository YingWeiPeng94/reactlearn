import React, { Component } from 'react';




//点击按钮的时候input框不清空：类型结构没变
// 解决方写式jey值
export default class LoginAndRegister extends Component {
    state={
        isReg:true
    }
  render() {
    return (
      <div> 
        <button onClick={()=>{
            this.setState({
                isReg:!this.state.isReg
            })
        }}>登录\注册</button>
        
        {
            this.state.isReg?
            <div className="reg">
                <p>
                    账号：<input key="reg" type="text"/>
                </p>
                <p>
                    密码：<input key="reg" type="password"/>
                </p>
                <p>
                    确认密码：<input type="password"/>
                </p>
                <button>注册</button>
            </div>: <div className="login">
                <p>
                    账号：<input key="login" type="text"/>
                </p>
                <p>
                    密码：<input key="login" type="password"/>
                </p>
                <button>登录</button>
            </div>
        }
           
        
       </div>
    );
  }
}

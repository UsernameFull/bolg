import React from "react";
import style from "./RegisterBody.css";

class RegisterBody extends React.Component {
  constructor(props) {
    super(props);
    this.checkUsername=this.checkUsername.bind(this)

    this.usernameChange=this.usernameChange.bind(this)
    this.passwordChange=this.passwordChange.bind(this)
    this.repasswordChange=this.repasswordChange.bind(this)
    this.emailChange=this.emailChange.bind(this)
    
    this.state={
        form:{
          username:'',
          password:'',
          repassword:'',
          email:'',
        }
    }
  }
  usernameChange(e){
      var username=e.target.value
      this.setState((prevState)=>{
        console.log(this.state.form)
        return {form:Object.assign(prevState.form,{username:username})}
      })
  }
  passwordChange(e){
      var password=e.target.value
      this.setState((prevState)=>{
        console.log(this.state.form)
        return {form:Object.assign(prevState.form,{password:password})}
      })
  }
  repasswordChange(e){
      var repassword=e.target.value
      this.setState((prevState)=>{
        console.log(this.state.form)
        return {form:Object.assign(prevState.form,{repassword:repassword})}
      })
  }
  emailChange(e){
      var email=e.target.value
      this.setState((prevState)=>{
        console.log(this.state.form)
        return {form:Object.assign(prevState.form,{email:email})}
      })
  }
  checkUsername(e) {
    var value =  e.target.value
    console.log('Username:', e.target.value)
    //检查username字段是否非空
    function check_null(str) {
        if (str === "" || str.length>15) {
            return true
        }
        return false
    }
    //检查username字段是否有非法字符
    function check_other_char(str) {
        var arr = ["&", "\\", "/", "*", ">", "<", "@", "!", "?"];
        for (var i = 0; i < arr.length; i++) {
            for (var j = 0; j < str.length; j++) {
                if (arr[i] == str.charAt(j)) {
                    return true;
                }
            }
        }
        return false;
    }
    if (check_other_char(value) === true) {
        document.getElementById('usernameSpan').innerHTML = "用户名有非法字符"
    } else if (check_null(value) === true) {
        document.getElementById('usernameSpan').innerHTML = "用户名不能为空，或用户名过长"
    } else {
        document.getElementById('usernameSpan').innerHTML = "用户名合法"
    }

}
  render() {
    return (
      <div className={style.mainbody}>
        <div className={style.registerbox}>
        <form action="">
          <ul>
            <li>
              <label>用户名：</label>
              <input type="text" value={this.state.form.username} id="username" onChange={this.usernameChange}/>
            </li>
            <li>
              <label>密码：</label>
              <input type="password" value={this.state.form.password} id="password" onChange={this.passwordChange}/>
            </li>
            <li>
              <label>重新输入密码：</label>
              <input type="password" value={this.state.form.repassword} id="repassword" onChange={this.repasswordChange}/>
            </li>
            <li>
              <label>邮箱：</label>
              <input type="text" value={this.state.form.email} id="email" onChange={this.emailChange}/>
            </li>
            <li>
              <input type="submit" value='注册'/>
              <input type="button" value='登录'/>
            </li>
          </ul>
        </form>
        </div>
      </div>
    );
  }
}
export default RegisterBody;

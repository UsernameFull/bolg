import React from "react";
import style from "./LoginBody.css";
import $ from "jquery";

class HomeBody extends React.Component {
    haddlesubmit(e){
        e.preventDefault()
        $.ajax({
            url: "http://localhost:4000/blogCreatArticle",
            dataType: "json",
            cache: false,
            type: "POST",
            crossDomain: true,
            data: data,
            success: data => {
              newArticleID = data;
              console.log(typeof newArticleID);
    
              alert("提交成功 " + newArticleID);
              createHashHistory().push("/");
            }
          });
        
    }
  render() {
    return (
      <div className={style.mainbody}>
            <div className={style.loginbox}>
           <form onSubmit={this.haddlesubmit} className={style.loginform}>
                <p>登录</p>
                <ul>
                    <li>用户名：<input type="text" /></li>
                    <li>密码：<input type="password" /></li>
                </ul>
                <input type="submit" value="提交" className={style.button}/ >
            </form>`
            </div>
      </div>
    );
  }
}

export default HomeBody;

import React from "react";
import style from "./Header.css";
import A_Xu from "../../img/A_Xu.jpg";


class Header extends React.Component {
  render() {
    return (
		<div className={style.header}>
			<div className={style.avatar}>
				<img src={A_Xu} />	
			</div>
			<div className={style.title}>
				<h1>John Smith の blog</h1>
			</div>
			<ul className={style.nav}>
			<li><a href="/index.html">Home</a></li>
			<li><a href="/publish.html">发布文章</a></li>
			<li><a href="#">历史文章</a></li>
			<li><a href="#">浏览记录</a></li>
			<li><a href="#">关于</a></li>
			</ul>
			<div className={style.user} >
			<ul>
				<li><a href="/login.html">登录</a></li>
				<li>|</li>
				<li><a href="#">注册</a></li>
			</ul>
			</div>
  		</div>
    );
  }
}

export default Header;

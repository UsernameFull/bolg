import React from "react";
import style from "./ArticleShowBody.css";
import $ from "jquery";
import { Link } from 'react-router-dom'
import { createHashHistory } from 'history'
import ArticleCollet from "./ArticleCollet.js"

class ArticleShowBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        _id: "",
        title: "",
        text: "",
        overview: "",
        date: ""
      }
    };
  }
  getlistItemJson() {
    var id = this.props.articleID;
    $.ajax({
      url: "http://localhost:4000/Article/" + id,
      dataType: "json",
      cache: false,
      crossDomain: true,
      success: data => {
        this.setState({ data: data[0] });
      }
    });
  }

  componentDidMount() {
    this.getlistItemJson();
  }
  changeArticle(){
    this.props.changeState()
  }
  render() {

    var htmlcode={__html:this.state.data.text}
    return (
      <div className={style.mainbody}>
        <div className={style.left}>
          <p>{this.state.data.title}</p>
          <p>{new Date(this.state.data.date).toLocaleString()}</p>
          <input type="button" value="修改文章" onClick={this.changeArticle.bind(this)}/>
          <div dangerouslySetInnerHTML={htmlcode} className={style.textcontainner}></div>
          {this.props.articleID}
        </div>
        <div className={style.right}>
          <ArticleCollet ></ArticleCollet> 
        </div>
      </div>
    );
  }
}

export default ArticleShowBody;

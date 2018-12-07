import React from "react";
import style from "./PublishBody.css";
import $ from "jquery";
import marked from "marked";
import highlight from "highlight.js";

import '../../css/js-highlight.css'
import '../../css/markdown.css'

highlight.configure({
  tabReplace: "  ",
  classPrefix: "hljs-",
  languages: [
    "CSS",
    "HTML, XML",
    "JavaScript",,
    "PHP",
    "Python",
    "Stylus",
    "TypeScript",
    "Markdown"
  ]
});

let rendererMD = new marked.Renderer();
let defaultopt = {
  renderer: rendererMD,
  gfm: true, //是否使用GitHub标准
  tables: true, //是否允许支持表格语法
  breaks: false, //是否允许回车换行
  pedantic: false, //是否采用兼容性模式
  sanitize: false, //是否对输出进行过滤（清理），将忽略任何已经输入的html代码（标签）
  smartLists: true, //是否采用更时髦的图表
  smartypants: false, //是否采用更时髦的标点
  highlight(code) {
    return highlight.highlightAuto(code).value;
  }
};
marked.setOptions(defaultopt);

class PublishBody extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {
        _id: "",
        title: "",
        text: "",
        mdpreview:null,
        overview: "",
        date: new Date()
      }
    };
    this.HaddleSubmit = this.HaddleSubmit.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
  }

  handleTitleChange(e) {
    let val = e.target.value;
    let data = Object.assign({}, this.state.data, { title: val });
    this.setState({
      data: data
    });
  }
  HaddleSubmit(e) {
      var data = {};
      data["title"] = this.state.data.title;
      data["date"] = new Date();

      var overview = this.state.data.text;
      var length = overview.length < 120 ? overview.length : 120;
      overview = overview.slice(0, length - 1);
      console.log(overview);
      data["overview"] = overview;

    //   var text = this.editor.txt.html();
      data["text"] = this.state.data.text;;
      console.log(data);
      var newArticleID = "dd";
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
          window.location.href = '/index.html'
        }
      });
    

    e.preventDefault();
  }

  onContentChange(e) {
    let temp = e.target.innerText;
    console.log(marked(temp))
    let data = Object.assign(this.state.data, { text: temp,mdpreview: marked(temp) });
    this.setState({
        data: data
      });
  }

  render() {
    let state = this.state;
    console.log(state)
    return (
      <div className={style.PublishBody}>
        <div className={style.left}>
          <form onSubmit={this.HaddleSubmit}>
            <input
              type="text"
              className={style.articleInputTitle}
              value={this.state.data.title}
              onChange={this.handleTitleChange}
            />
            <div className={style.editor}>
            <div contentEditable="true" 
            className={style.textarea} value={state.text} onInput={e => {this.onContentChange(e)}}
            />
            <div className={style.markdownpreview+" markdown"}
            dangerouslySetInnerHTML={{ __html: state.data.mdpreview }}
            />
            </div>
            <input type="submit" className={style.button} value="提交" />
          </form>
        </div>
        <div className={style.right} />
      </div>
    );
  }
}

export default PublishBody;

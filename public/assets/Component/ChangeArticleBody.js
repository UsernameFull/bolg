import React from "react";
import style from "./ChangeArticleBody.css";
import $ from "jquery";
import E from "wangeditor";

class ChangeArticleBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        _id: "",
        title: "",
        text: "",
        overview: "",
        date: new Date()
      }
    };
    this.HaddleSubmit = this.HaddleSubmit.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.getArticle = this.getArticle.bind(this);
  }

  handleTitleChange(e) {
    let val = e.target.value;
    let data = Object.assign({}, this.state.data, { title: val });
    this.setState({
      data: data
    });
  }

  HaddleSubmit(e) {
    
    console.log(this.state.data);
    var data = {};
    data["_id"] = this.state.data._id;
    data["title"] = this.state.data.title;
    data["date"] = new Date();

    var overview = this.editor.txt.text();
    var length = overview.length < 120 ? overview.length : 120;
    overview = overview.slice(0, length - 1);
    console.log(overview);
    data["overview"] = overview;

    var text = this.editor.txt.html();
    data["text"] = text;
    console.log(data);
    var newArticleID = "";
    $.ajax({
      url: "http://localhost:4000/blogChangeArticle/"+data._id,
      dataType: "json",
      cache: false,
      type: "POST",
      crossDomain: true,
      data: data,
      success: data => {
        newArticleID = JSON.parse(data).id
        alert("提交成功 " + newArticleID);
        
      },
      error:function(data){
        console.log(data)
        　　alert(data.id);
      }
    });
    
    e.preventDefault();
  }
  getArticle(id, editor) {
    $.ajax({
      url: "http://localhost:4000/Article/" + id,
      dataType: "json",
      cache: false,
      crossDomain: true,
      success: data => {
        this.setState({ data: data[0] });
        editor.txt.html(this.state.data.text);
      }
    });
  }
  componentDidMount() {
    const elem = this.refs.editorElem;
    const editor = new E(elem);
    this.editor = editor;
    // 使用 onchange 函数监听内容的变化，并实时更新到 state 中
    editor.customConfig.onchange = html => {
      let data = Object.assign({}, this.state.data, { text: html });
      this.setState({
        data: data
      });
    };

    editor.create();
    //获取路由传来的id
    var id = this.props.articleID;
    this.getArticle(id,editor)
    let data = Object.assign({}, this.state.data, { _id: id });
    this.setState({
      data: data
    });

    editor.$textElem[0].parentNode.style.height = "400px";
  }
  render() {
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
            <div ref="editorElem" className={style.articleInputText} />
            <input type="submit" className={style.button} value="提交" />
          </form>
        </div>
        <div className={style.right} />
      </div>
    );
  }
}

export default ChangeArticleBody;

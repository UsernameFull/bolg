import React from "react";
import ReactDOM from "react-dom";
import "../css/main.css";
import Header from "./Component/Header.js";
import Footer from "./Component/Footer.js";
import ArticleShowBody from "./Component/ArticleShowBody.js";
import ChangeArticleBody from "./Component/ChangeArticleBody.js";

class ArticleShow extends React.Component {
  constructor(props) {
    super(props);
    this.geturl = this.geturl.bind(this);
    this.articleID = "";
    this.state = {
      pagestate: "show"
    };
    this.changePageState = this.changePageState.bind(this);
  }
  componentWillMount() {
    this.geturl();
  }
  geturl() {
    let url = window.location.href;
    let urlitem = url.split("?")[1];
    this.articleID = urlitem.split("=")[1];
    console.log(this.articleID);
  }
  changePageState() {
    if (this.state.pagestate === "show") {
      this.setState({
        pagestate: "change"
      });
    }
  }
  render() {
    if (this.state.pagestate === "show") {
      return (
        <div>
          <Header />
          <ArticleShowBody articleID={this.articleID} changeState={this.changePageState}/>
          <Footer />
        </div>
      );
    } else if (this.state.pagestate === "change") {
      return (
        <div>
          <Header />
          <ChangeArticleBody articleID={this.articleID} />
          <Footer />
        </div>
      );
    }
  }
}

ReactDOM.render(<ArticleShow />, document.getElementById("root"));

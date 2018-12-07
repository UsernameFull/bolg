import React from "react";
import style from "./HomeBody.css";
import ArticleList from "../ArticleList/ArticleList";
import ArticleCollet from "../ArticleCollet/ArticleCollet";

class HomeBody extends React.Component {

  render() {
    return (
      <div className={style.mainbody}>
        <div className={style.left}>
          <ArticleList />
        </div>
        <div className={style.right}>
          <ArticleCollet />
        </div>
      </div>
    );
  }
}

export default HomeBody;

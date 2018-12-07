import React from 'react'
import '../../css/main.css'
import Header from '../../Component/Header/Header'
import Footer from '../../Component/Footer/Footer'
import ChangeArticleBody from '../../Component/ChangeArticleBody/ChangeArticleBody.js'

class ChangeArticle extends React.Component {
  constructor(props){
    super(props);
    this.geturl=this.geturl.bind(this);
  }
  componentWillMount() {
    this.geturl();
  }
  geturl(){
    let url=window.location.href
    let urlitem=url.split('?')[1]
    this.articleID = urlitem.split('=')[1]
    console.log(this.articleID)
  }
    render() {
      return (
        <div>
            <Header/>
            <ChangeArticleBody articleID={this.articleID}/>
            <Footer/>
        </div>
      );
    }
  }
  
  ReactDOM.render(
    <ChangeArticle/>,
      document.getElementById('root')
   );

import React from 'react'
import ReactDOM from 'react-dom'
import '../../css/main.css'
import Header from '../../Component/Header/Header'
import Footer from '../../Component/Footer/Footer'
import PublishBody from '../../Component/PublishBody/PublishBody.js'

class Publish extends React.Component {
    render() {
      return (
        <div>
            <Header/>
            <PublishBody/>
            <Footer/>
        </div>
      );
    }
  }

  ReactDOM.render(
    <Publish/>,
      document.getElementById('root')
   );


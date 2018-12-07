import React from 'react'
import '../../css/main.css'
import Header from '../../Component/Header/Header'
import HomeBody from '../../Component/HomeBody/HomeBody'
import Footer from '../../Component/Footer/Footer'
// import PublishBody from '../../Component/PublishBody/PublishBody'

class Home extends React.Component {
    render() {
      return (
        <div>
            <Header/>
            <HomeBody/>
            <Footer/>
            {/* <PublishBody/> */}
        </div>
      );
    }
  }
  
export default Home;

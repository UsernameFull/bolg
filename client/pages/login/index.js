import React from 'react'
import ReactDOM from 'react-dom'
import '../../css/main.css'
import Header from '../../Component/Header/Header'
import LoginBody from '../../Component/LoginBody/LoginBody'
import Footer from '../../Component/Footer/Footer'

class Login extends React.Component {
    render() {
      return (
        <div>
            <Header/>
            <LoginBody/>
            <Footer/>
        </div>
      );
    }
  }
  
  ReactDOM.render(
    <Login/>,
      document.getElementById('root')
   );

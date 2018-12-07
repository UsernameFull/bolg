import React from 'react'
import '../css/main.css'
import Header from './Component/Header.js'
import RegisterBody from './Component/RegisterBody.js'
import Footer from './Component/Footer.js'

class Register extends React.Component {
    render() {
      return (
        <div>
            <Header/>
            <RegisterBody/>
            <Footer/>
        </div>
      );
    }
  }
  
export default Register;

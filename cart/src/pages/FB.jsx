import React from 'react';
import '../pages/app.css';
import FacebookLogin from 'react-facebook-login';

const responseFacebook = (response) => {
  console.log("login result",response);
}
const componentClicked = (data) => {
  console.warn(data)
}

export default class App extends React.Component {
    render() {
      return(
        <div style={{marginLeft:"37rem"}}>
          {/* <img className="logo "src="https://cdn-icons-png.flaticon.com/512/145/145802.png"/> */}
          {/* <h1 className='head'>Facebook login </h1> */}

          <FacebookLogin
           appId="717462423015886"
           autoLoad={true}
           fields="name,email,picture"
           onClick={componentClicked}
           callback={responseFacebook}/>
        
        </div>
      )
    }
}

import React from 'react';
import FacebookLoginWithButton from 'react-facebook-login';

const componentClicked = () => {
  console.log( "Facebook Button Clicked!" )
}

const LoginButton = ({facebookResponse}) => (
  <FacebookLoginWithButton
    appId="" //FB ID
    // autoLoad
    fields="name,email,picture"
    onClick={componentClicked}
    callback={facebookResponse}
    icon="fa-facebook"/>
  )


const UserScreen = ({user}) => (
  <>
    <h1>Welcome {user.name}!</h1>
    <p>{ user.email }</p>
    <img src={user.picture.data.url} height={user.picture.height} width={user.picture.width} alt="avatar"/>
  </>
)

class App extends React.Component {
  state = {user:false}
  facebookResponse = (response) => { console.log( response ); this.setState( {...this.state, user: response } ) }

  render() {
    return (
      <div style={{ margin: "auto", textAlign: "center", paddingTop: "2em" }}>
        { this.state.user ? <UserScreen user={this.state.user}/> :
          <LoginButton facebookResponse={this.facebookResponse}/>
        }
      </div>
    )
  }
}

export default App
















// import React, { Component } from 'react';
// import './App.css';

// import FacebookLogin from 'react-facebook-login';

// import GoogleLogin from 'react-google-login';

// class App extends Component {

//   render() {

//     const responseFacebook = (response) => {
//       console.log(response);
//     }

//     const responseGoogle = (response) => {
//       console.log(response);
//     }

//     return (
//       <div className="App">
//         <h1>LOGIN WITH FACEBOOK AND GOOGLE</h1>

//         <FacebookLogin
//           appId="" //APP ID NOT CREATED YET
//           fields="name,email,picture"
//           callback={responseFacebook}
//         />
//         <br />
//         <br />


//         <GoogleLogin
//           clientId="" //CLIENTID NOT CREATED YET
//           buttonText="LOGIN WITH GOOGLE"
//           onSuccess={responseGoogle}
//           onFailure={responseGoogle}
//         />

//       </div>
//     );
//   }
// }

// export default App;
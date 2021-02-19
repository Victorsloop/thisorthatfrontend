
import './App.scss';
import React from 'react'
import {Route} from 'react-router-dom'
import Welcome from './Components/Welcome'
import Signup from './Components/Signup'
import Login from './Components/Login'
import Profile from './Components/Profile'
import Wall from './Container/Wall';
import AllPost from './Container/AllPost'
import Feedback from './Container/Feedback'
import { loginUser, signupUser, returningUser} from './Redux/actions'
import { connect } from 'react-redux'
import EditPost from './Components/EditPost';
import FinalHeader from './Components/FinalHeader';
// import styleFeedback from './Styling/styleFeedback.scss'
import './Styling/WelcomeStyling.scss'
import Inbox from './Components/Inbox';
import FlipCoin from './Components/FlipCoin'
import Header from './Components/Header'

// import PostStyling from './Styling/PostStyling'
// import Navbar from './Components/Navbar'

class App extends React.Component{
  state = {
    user: null,
    postID: 1,
    changePAGE:false
  } 

  signInHandler = (userInfo) => {
    console.log("loggin in", userInfo)
    fetch("http://localhost:5000/api/v1/login", {
      method: "POST",
      headers: {
        accepts: "application/json",
        "content-type": "application/json"
      },
      body: JSON.stringify({ user: userInfo})
      
    })
    .then(r => r.json())
    .then(data => this.setState({ user: data.user}))
  }

  signUpHandler = (userObj) => {
    fetch('http://localhost:5000/api/v1/users', {
      method: "POST",
      header: {
        accepts: "application/json",
        "content-type": "application/json"
      },
      body: JSON.stringify({user: userObj})
    })
    .then(r => r.json())
    .then(console.log)
  }
  componentDidMount(){
    const token = localStorage.getItem("token")
    if(token){
      fetch('http://localhost:5000/api/v1/profile', {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`
        }
      })
        .then(r => r.json())
        .then(returningUser => {
          console.log("returning user", returningUser)
          this.props.returning(returningUser)
          
        })
      
    }

  }

  updatePostId= ()=>{
    let url = window.location.pathname 
    const specificid = url.substring(url.lastIndexOf('/')+1)
    // parseInt(specificid)
    this.setState({postID :parseInt(specificid)})
  }

  updatePAGE= ()=>{
    this.setState({changePAGE: !this.state.changePAGE})
  }

  logoutHandler = (userObj)=> {
    localStorage.clear(userObj)
    window.location.href='/'
  }

  reduxSigninSubmitHandler = (userObj) => {
    this.props.login(userObj)
  }
  
  reduxSignupSubmitHandler = (userObj) => {
    this.props.signup(userObj)
  }
  

  render(){
    return(
      <div className={"parent"}>
        <div className="header-container">
          <Header/>
        <FinalHeader logoutHandler={this.logoutHandler}/>

        </div>

        {/* <div  className="post-container" >       
        <div class="postcont"> */}


        
        
        < Route path="/welcome" render={() => <Welcome/>}/>


        <>
        
          <>
          < Route path="/post" render={() => <Wall user={this.state.user} postID={this.state.postID} updatePAGE={this.updatePAGE}/>}/>
          < Route path="/allPost" render={() => <AllPost user={this.state.user} postID={this.state.postID}/>}/>
          < Route path="/editPost" render={() => <EditPost user={this.state.user}/>}/>
          < Route path="/profile" render={() => <Profile user={this.state.user} />}/>
          < Route path="/inbox" render={() => <Inbox user={this.state.user} />}/>
          < Route path="/fate" render={() => <FlipCoin user={this.state.user} />}/>
          < Route path="/feedback" render={() => <Feedback user={this.state.user} postID={this.state.postID} updatePostId={this.updatePostId}/>}/>
          < Route path="/signup" render={() => <Signup submitHandler={this.reduxSignupSubmitHandler}/>}/>
          < Route path="/login" render={() => <Login submitHandler={this.reduxSigninSubmitHandler} />}/>
          </>

        
        
        </>

        {/* </div> 
        </div>    */}

          
      
      
      
      </div>
      
    )
  }
}

function msp(state){
  // return {current_wall: state.user.wall}
}

function mdp(dispatch){
  return {
    login: (userObj) => dispatch(loginUser(userObj)),
    signup: (userObj) => dispatch(signupUser(userObj)) ,
    returning: (userObj) => dispatch(returningUser(userObj))
  }
}


export default connect(msp, mdp)(App);

import React, { Component } from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import '../Styling/WelcomeStyling.scss'

class Welcome extends Component {
    
    render(){
        console.log(this.props.userObj)

        return(
            
            <>
            {localStorage.token ? 
            <>
            <div>
            <h1> Wooooooooh! Welcome back to THIS OR THAT!</h1>
            <img alt="Thisorthat" className="welcomeImg" style={{ maxWidth: "40vw", maxHeight: "40vh" }}src={"https://lh5.googleusercontent.com/jChJasadKUo2ViBTGO07KtiR0GJtDCtOmPV5GFxKn8oILmhNLs7G-54hlZbq6Lqvjvu9ic72F9INlCypBNZk6QehVR_QEE4TrSMVJRBTxx480wLZLBnOC0kF-WdQAb_HBOtP7Yec"}></img>
            <NavLink to="/post">
                <button style={{marginLeft: "50px", marginRight: "50px"}}> Vent </button>
            </NavLink>
            <NavLink to="/allPost">
                <button> Help </button>
            </NavLink>

            </div>
            </>
            
            :
                <>
            <h2> Welcome to the newest app made to help those who are indecisive</h2>

             <h1>   This Or That  </h1> 
            <NavLink to="/Login">
                <button style={{marginLeft: "50px", marginRight: "50px"}}> LOG IN </button>
            </NavLink>
            <NavLink to="/Signup">
                <button> SIGN UP </button>
            </NavLink>
            </>
        
            
            }



            </>
                
            
    
        )
    }
    

}

const msp = (state) => {
    return{ userObj: state.user}

}


export default connect(msp, null)(Welcome) 

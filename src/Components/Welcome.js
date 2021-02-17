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
            <h1> Welcome back to This Or That!</h1>
            {/* <img alt="Thisorthat" className="welcomeImg" style={{ maxWidth: "40vw", maxHeight: "40vh" }}src={"https://lh5.googleusercontent.com/jChJasadKUo2ViBTGO07KtiR0GJtDCtOmPV5GFxKn8oILmhNLs7G-54hlZbq6Lqvjvu9ic72F9INlCypBNZk6QehVR_QEE4TrSMVJRBTxx480wLZLBnOC0kF-WdQAb_HBOtP7Yec"}></img> */}
            <p style={{fontSize: "26px", textAlign: "left"}}> Are you stuck and cant make up your mind ??? Well ask the world for some unbiased advice!</p>
            <NavLink to="/post">
                <button style={{marginLeft: "50px", marginRight: "500px"}}> Vent ➤</button>
            </NavLink>
            <p style={{fontSize: "26px", textAlign: "left"}}> Checkout other people's vents. Share your wisdom or maybe reach out! </p>

            <NavLink to="/allPost">
                <button> Help ➤ </button>
            </NavLink>

            </div>
            </>
            
            :
                <>
            <h2> Welcome to the newest app made to help those who are indecisive</h2>

             <h1>   This Or That  </h1> 
             {/* <p style={{fontSize: "26px", textAlign: "left"}}> Are you stuck and cant make up your mind ??? Well ask the world for some unbiased advice!</p> */}

            <NavLink to="/Login">
                <button style={{marginLeft: "50px", marginRight: "50px"}}> LOG IN ➤ </button>
            </NavLink>
            <NavLink to="/Signup">
                <button> SIGN UP ➤ </button>
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

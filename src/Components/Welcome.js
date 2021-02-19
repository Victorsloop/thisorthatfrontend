import React, { Component } from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import '../Styling/WelcomeStyling.scss'
import styled from "styled-components";


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
                <Button class="afterLogB">            Vent ➤    </Button>
                {/* <button style={{marginLeft: "50px", marginRight: "500px"}}> Vent ➤</button> */}
            </NavLink>
            <p style={{fontSize: "26px", textAlign: "left"}}> Checkout other people's vents. Share your wisdom or maybe reach out! </p>

            <NavLink to="/allPost">
            <Button class="afterLogB">            Help ➤   </Button>
                {/* <button> Help ➤ </button> */}
            </NavLink>

            </div>
            </>
            
            :
                <>
            <h2> Welcome to the newest app made to help those who are indecisive</h2>

             <h1>   This Or That  </h1> 
             {/* <p style={{fontSize: "26px", textAlign: "left"}}> Are you stuck and cant make up your mind ??? Well ask the world for some unbiased advice!</p> */}

            <NavLink to="/Login">
                <Button style={{marginLeft: "50px", marginRight: "50px"}}> LOG IN ➤ </Button>
            </NavLink>
            <NavLink to="/Signup">
                <Button> SIGN UP ➤ </Button>
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

const Button = styled.button`
    margin-top: 20px;
    background:  white;
    border: 0px solid;
    border-color: #EF476F;
    width: 300px;
    font-weight: bolder;
    font: inherit;
    line-height: 1;
    padding: 10px;
    border-radius: 3px;
    font-weight: bolder;
   
   
    color: var(--color);
    transition: 0.25s;
    border-color: var(--hover);
    color: black;
    --color: white;
    --hover: white;
    :hover,:focus {
        border-color: #93c9ff;
        -webkit-animation: pulse 1s;
          animation: pulse 1s;
        box-shadow: 0 0 0 2em rgba(255, 255, 255, 0);
    }
    @-webkit-keyframes pulse {
        0% {
            box-shadow: 0 0 0 0 var(--hover);
        }
    }
    @keyframes pulse {
        0% {
            box-shadow: 0 0 0 0 var(--hover);
        }
    }
`

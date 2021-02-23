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
            <p style={{fontSize: "26px", textAlign: "left"}}> Are you stuck and cant make up your mind ??? Well ask the world for some unbiased advice!</p>
            <NavLink to="/post">
                <Button > Vent ➤ </Button>
            </NavLink>
            <p style={{fontSize: "26px", textAlign: "left"}}> Checkout other people's vents. Share your wisdom or maybe reach out! </p>

            <NavLink to="/allPost">
            <Button > Help ➤</Button>
            </NavLink>

            </div>
            </>
            
            :
                <>
            <h2> Welcome to the newest app made to help those who are indecisive</h2>
             <h1>   This Or That  </h1> 
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

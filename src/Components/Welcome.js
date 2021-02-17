import React, { Component } from 'react'
import {connect} from 'react-redux'

import '../App.css'

class Welcome extends Component {

    // componentDidMount(){
    //     const userWall = this.props.userObj.wall
    //     const token = localStorage.getItem("token")
    //     if(userWall){
    //         console.log("user has a wall")
    //     } else if (userWall === null && token ) {
    //         const newWallObj = {
    //                 user_id: this.props.userObj.id
    //               }
    //               fetch("http://localhost:5000/api/v1/walls",{
    //                     method:"POST",
    //                     headers:{
    //                         "Content-Type": "application/json",
    //                         "Accepts": "application/json"
    //                     },
    //                     body:JSON.stringify(newWallObj)
    //                 })
    //                 .then(r => r.json())
    //                 .then (data=>{
    //                     console.log("new user wall created!!!!!!",data)}
    //                     )
    //                 .catch(console.log)
    //     }

    // }

    
    render(){

        return(
            
            <>
            {localStorage.token ? 
            <>
            <div>
            <h1> Wooooooooh! WELCOME!!!  You made your account on THIS OR THAT!</h1>
            <img alt="FaceBock" className="center" style={{ maxWidth: "40vw", maxHeight: "40vh" }}src={"https://lh5.googleusercontent.com/jChJasadKUo2ViBTGO07KtiR0GJtDCtOmPV5GFxKn8oILmhNLs7G-54hlZbq6Lqvjvu9ic72F9INlCypBNZk6QehVR_QEE4TrSMVJRBTxx480wLZLBnOC0kF-WdQAb_HBOtP7Yec"}></img>

            </div>
            </>
            
            :

            <h1> Welcome to the best app made to help those who are indecisive</h1>
            }



            </>
                
            
    
        )
    }
    

}

const msp = (state) => {
    return{ userObj: state.user}

}


export default connect(msp, null)(Welcome) 
import React, { Component } from 'react';
import { connect } from 'react-redux'
import Talk from 'talkjs';
import styled from "styled-components";


class Inbox extends Component {
    constructor(props) {
        super(props);
        this.inbox = undefined;
        this.talkjsContainer = React.createRef();
    }

    // componentDidMount() {
    //     const user = this.props.user;
    //     Talk.ready.then(() => {
    //         var me = new Talk.User({
    //             id: user.id,
    //             name: user.name,
    //             email: user.email,
    //             photoUrl: user.avatar,
    //             welcomeMessage: "Hey there! How are you? :-)"
    //         });

    //         window.talkSession = new Talk.Session({
    //             appId: process.env.REACT_APP_API_KEY,
    //             me: me
    //         });

    //         this.inbox = window.talkSession.createInbox();
    //         this.inbox.mount(this.container);
    //     })

    // }


       componentDidMount() {
        Talk.ready.then(() => {
            var me = new Talk.User({
                id: this.props.user.id,
                name: this.props.user.first_name,
                photoUrl: this.props.user.avatar,
                welcomeMessage: "Hey there! How are you? :-)"
            });

            window.talkSession = new Talk.Session({
                appId: "tSi3ZbYg",
                me: me
            });

            this.inbox = window.talkSession.createInbox();
            this.inbox.mount(this.container);
        })

    }

    render() {
        // console.log( "checking this.props.user in",this.props.user.id)
        return (
            <Wrapper>
                <Title> YOUR INBOX </Title>
                <div style={{ height: '600px' }} className="inbox-container" ref={c => this.container = c}>Loading...</div>
                {/* <div ref={this.talkjsContainer} className="chatbox-container"></div> */}
            </Wrapper>
        )
    }
}

const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    
    position: relative;
   
    top: 5%;
    margin: auto;
`

const Title = styled.h1`
font-weight: 700;
font-size: 50px;
color: #F7AEF8;
text-align: center;
text-shadow: 0px 0px 6px #F7AEF8;
margin-bottom: 20px;
`


function msp(state) {
    return ({
        user: state.user,
        otherUser: state.otherUser
    })
}
export default connect(msp)(Inbox)

// import React from 'react'
// import {NavLink} from 'react-router-dom'
// import {connect} from 'react-redux'
// class Header extends React.Component {
//     render(){
//         return(
//             <>
//             {this.props.user?(
//                  <div>
//                  <NavLink to="/Home">
//                  <h4>Home</h4>
//                  </NavLink>
//                  <NavLink to="/allVents">
//                  <h4>All Vents</h4>
//                  </NavLink>
//                  <NavLink to="/createVent">
//                  <h4>Create a Vent</h4>
//                  </NavLink>
//                  <NavLink to="/Profile">
//                  <h4>Profile</h4>
//                  </NavLink>
//                  <NavLink to="/Logout">
//                  <h4>Logout</h4>
//                  </NavLink>
//              </div>


//             ):
            
            
            
//             <div>
//                 <NavLink to="/Home">
//                 <h4>Home</h4>
//                 </NavLink>
//                 <NavLink to="/About">
//                 <h4>About</h4>
//                 </NavLink>
//                 {/* <NavLink to="/createVent">
//                 <h4>Create a Vent</h4>
//                 </NavLink>
//                 <NavLink to="/Profile">
//                 <h4>Profile</h4>
//                 </NavLink>
//                 <NavLink to="/Logout">
//                 <h4>Logout</h4>
//                 </NavLink> */}
//             </div>
//             }
//             </>
//         )
//     }
// }

// function msp(state) {
//     return ({
//         user: state.user
//     })
// }

// export default connect(msp,null)(Header)

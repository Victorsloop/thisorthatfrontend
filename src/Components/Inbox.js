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
        return (
            <Wrapper>
                <Title> YOUR INBOX </Title>
                <div style={{ height: '600px' }} className="inbox-container" ref={c => this.container = c}>Loading...</div>
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
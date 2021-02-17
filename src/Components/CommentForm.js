import React, { Component } from "react";
import {connect} from 'react-redux'
import { addComments } from "../Redux/actions";
import styleFeedback from '../Styling/styleFeedback.scss'


 class CommentForm extends Component {
    state = {
        comment: "",
        pro:false,
        con:false,
        user_id:this.props.userObj.id,
        post_id:this.props.postID
    }

    checkPro = () => {
        this.setState({pro:true})
        this.props.updatePostId()
    }
    checkCon = () => {
        this.setState({con:true})
        this.props.updatePostId()

    }


    newCommentHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
        console.log(e.target.value)
    }

    localAddComment = (e) => {
        e.preventDefault()
        this.props.createComment(this.state)
        this.setState({comment:"", pro:false,con:false})
        this.props.rerender()
  
    }



    render(){
        // console.log("current props in addPost component",this.props.userObj)
        return(
            <>
            <div class=".commentForm">
            <h2> Here to help! 🌎</h2>
            <form onSubmit={this.localAddComment}>
                <input type="text" name="comment"placeholder="Advice" value={this.state.comment} onChange={this.newCommentHandler}/>
                {/* <input type="text" name="name"placeholder={this.props.userObj.username} value={this.state.username} /> */}
                <input type="hidden" name="user_id"placeholder={this.props.userObj.id} value={this.state.user_id} />
                <input type="hidden" name="post_id"placeholder={this.props.postID} value={this.state.postID} />
                <input type="checkbox" name="Pro"placeholder="Pro" value={this.state.pro} onClick={this.checkPro}/>
                <label for="Pro">PRO✅</label>
                <input type="checkbox" name="Con"placeholder="Con" value={this.state.con} onClick={this.checkCon}/>
                <label for="Con">CON ⛔️</label>
                <button class="button">Help ➤ <div class="button__horizontal"></div><div class="button__vertical"></div></button>
                {/* <button onClick={this.checkProps}>CHECK</button> */}
                
              
            
            </form>
            </div>
            </>
        )
    }
}

function msp(state){
    return {user:state.user}
}

function mdp(dispatch){
    return{
        createComment: (newCommentObject) => dispatch(addComments(newCommentObject))
    }
}
  export default connect(msp,mdp)(CommentForm)

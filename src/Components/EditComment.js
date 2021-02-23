import React from 'react'
import {connect} from 'react-redux'
import {editComment} from '../Redux/actions'

class EditComment extends React.Component {


    state ={
        comment: "",
        pro:false,
        con:false
    }

    userFormHandler = (e) => {
        e.preventDefault()
        this.setState({[e.target.name]: e.target.value})
    }
    
    editCommentFetch = ()=> {
        const postState = this.state
        fetch(`http://localhost:5000/api/v1/posts/${this.props.postObj.id}`,{
            method:"PATCH",
            headers:{
                "Content-Type": "application/json",
                "Accepts": "application/json"
            },
            body:JSON.stringify(postState)
        })
        .then(r => r.json())
        .then (postObj => {
            console.log("editing post in backend",postObj)
            
        })
        .catch(console.log)
    }

    checkPro = () => {
        this.setState({pro:true})
    }
    checkCon = () => {
        this.setState({con:true})
    }

    editHandler = (e) => {
        e.preventDefault()
        this.props.editComment(this.props.commentObj.id, this.state, this.props.history)
    }
        render(){
            // console.log("THIS IS INSIDE EDIT POST", this.props.postObj,this.props.history
            return(
                <>
                <form onSubmit={this.editHandler}>
                <input type="text" name="comment"placeholder={this.props.commentObj.comment} value={this.state.comment} onChange={this.userFormHandler}/>
                <input type="checkbox" name="Pro"placeholder="Pro" value={this.state.pro} onClick={this.checkPro}/>
                <label for="Pro">PRO✅</label>
                <input type="checkbox" name="Con"placeholder="Con" value={this.state.con} onClick={this.checkCon}/>
                <label for="Con">CON ⛔️</label>
                <button class="button">Help! <div class="button__horizontal"></div><div class="button__vertical"></div></button>
            </form>
                </>
                )
                
            }
    
}

function msp(state){
    
    return{
        userObj:state.user,postObj: state.user.posts
    }

}

function mdp(dispatch){
    return{
        editComment: (commentId,commentObj,history) => dispatch(editComment(commentId,commentObj,history))
    
    }
    
}

export default connect(msp, mdp) (EditComment)


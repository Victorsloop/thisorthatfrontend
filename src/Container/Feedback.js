import React, { Component } from 'react'
import {connect} from 'react-redux'
import CommentForm from '../Components/CommentForm'
import Comment from '../Components/Comment'
import { fetchComments } from '../Redux/actions'
class Feedback extends Component {

    state={
        feedbackArray:[],
        arrayOfFeedback:[],
        desiredID:0
    }
    componentDidMount(){
        fetch("http://localhost:5000/api/v1/feedbacks")
        .then(r => r.json())
        .then (arrayOfFeedback => {
            const filteredFeedback = []
            this.props.updatePostId()
            parseInt(this.props.postID)
            let newpostid= this.props.postID
            parseInt(newpostid)
            console.log("CHECKING WITH NEW VARIABLE",newpostid)
            console.log("REDUX POSTID", this.props.postID)
            arrayOfFeedback.forEach( feedback=>{
                if(feedback.post_id === newpostid){
                     console.log("FEED AFTER MAP", this.props.postID)
                    filteredFeedback.push(feedback)
                }
            })    
            console.log("SHOWING filteredFeedback",filteredFeedback,this.props.postID)
            this.props.getComments(filteredFeedback)
            
        })
        .catch(console.log)
    }
    renderComments = () => {
        console.log("RENCOMENTS",this.props)
        return this.props.feedbackArray.map(comment => <Comment className="Com-css" key={comment.id} commentObj={comment} content={comment.content} />)
    }

    checkuser=()=>{
        console.log("LOOKING FOR POSTOBJ ",this.props.postObj)
        console.log("should be filtered feedback array",this.props.feedbackArray)
    }
    
    render(){

        return(
            
            <>
            {localStorage.token ? 
            <>
            <div class=".div1FHeader">
            <h1> Will it be This or That ?!?!?!?</h1>
            <img alt="This or that" className="center" style={{ maxWidth: "40vw", maxHeight: "40vh" }}src={"https://i.gifer.com/LHDQ.gif"}></img>
            <CommentForm userObj={this.props.userObj} postObj={this.props.postObj} commentObj={this.props.commentObj} postID={this.props.postID} rerender={this.renderComments} updatePostId={this.props.updatePostId}/>
            
            {this.renderComments()}

            </div>
            </>
            
            :

            <>
            <h1> Welcome to the best app made to help those who are indecisive</h1>
            </>
            }



            </>
                
            
    
        )
    }
    

}

const msp = (state) => {
    return{ userObj: state.user, postObj: state.user.posts, feedbackArray:state.comments}

}

function mdp(dispatch){
    return{
        getComments:(filteredFeedback) => dispatch(fetchComments(filteredFeedback))
    }
}


export default connect(msp, mdp)(Feedback) 
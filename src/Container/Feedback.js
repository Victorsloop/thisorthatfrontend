import React, { Component } from 'react'
import {connect} from 'react-redux'

import '../App.css'
import CommentForm from '../Components/CommentForm'
import Comment from '../Components/Comment'
import { fetchComments } from '../Redux/actions'

class Feedback extends Component {


    state={
        feedbackArray:[],
        arrayOfFeedback:[],
        desiredID:0
    }
    


    // componentDidMount () { 
    //     fetch("http://localhost:5000/api/v1/feedbacks")
    //     .then(r => r.json())
    //     .then (arrayOfFeed => {
    //         console.log("FETCHING ALLL FEEDBACK", arrayOfFeed)
    //         this.setState( {
    //             arrayOfFeedback: arrayOfFeed
    //         })
    //         console.log("FETCHED FEECBACKS",this.state.arrayOfFeedback)
    //         // console.log("CHECKING FEEDBACK FOR IDS",this.props.postObj.id)
    //         // console.log("defdault comments", this.state)
    //     })
    //     .catch(console.log)
    //     // console.log("render ALLL posts", this.props.arrayOfFeedback)
    // }

    componentDidMount(){
        fetch("http://localhost:5000/api/v1/feedbacks")
        .then(r => r.json())
        .then (arrayOfFeedback => {
            const filteredFeedback = []
            // let specificpostID = 0 
            // arrayOfFeedback.forEach(id => {
            //    if( id.post_id !==0)
            //      specificpostID= id.post_id
            // })
            // let url = window.location.pathname 
            // const specificid = url.substring(url.lastIndexOf('/')+1)
            // parseInt(specificid)
            // this.setState({postID :specificid})
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
        // console.log("RenderCOMMENTS", this.props)
        // return this.state.arrayOfFeedback.map(comment => <Comment className="Com-css" key={comment.id} commentObj={comment} content={comment.content}/>)
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
            <div>
            <h1> WILL it be This or That ?!?!?!?</h1>
            <img alt="This or that" className="center" style={{ maxWidth: "40vw", maxHeight: "40vh" }}src={"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/womanyellingcat-1573233850.jpg"}></img>
            <h2>The indecisive Situation {this.props.postObj.content}</h2>
            <CommentForm userObj={this.props.userObj} postObj={this.props.postObj} postID={this.props.postID} rerender={this.renderComments} updatePostId={this.props.updatePostId}/>
            {/* {this.checkuser()} */}
            
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
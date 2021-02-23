import React, { Component } from 'react'
import {connect} from 'react-redux'
import { fetchPosts } from '../Redux/actions'
import AddPost from '../Components/AddPost'
import Post from '../Components/Post'
import styled from 'styled-components'

class AllPost extends Component {

    state ={
        filterPost: "",
        postArray : [],
        beenClicked:false,
        user:null,
        newPostArray : []
    }

    renderPostForm = () => {
        if(this.state.beenClicked){
            return (< AddPost rerender={this.newRenderPosts} />)
        }
    }

    postClickHandler = () => {
        this.setState((prevState) => ({beenClicked: !prevState.beenClicked}))
    }

     componentDidMount () {
        
        
            
        fetch("http://localhost:5000/api/v1/posts")
        .then(r => r.json())
        .then (arrayOfPost => {
            console.log("FETCHING ALLL POSTS", arrayOfPost)
            this.setState( {
                postArray: arrayOfPost
            })
        })
        .catch(console.log)
            
        
        console.log("render ALLL posts", this.props.postArray)
    }
    
    newRenderPosts = () => {
        console.log("newrenderpost this.STATE.postarray", this.state.postArray)
        return this.state.postArray.map(post => <Post className="post-css" key={post.id} postObj={post} username={post.user.username}/>)
    }


    render() {
        console.log("console log of this.props in All post",this.props.postArray)
        return (
            <>
                { localStorage.token ?

                <>
                <Button class="addpostbutton" onClick={this.postClickHandler}>{this.state.beenClicked? "Changed your mind?": "Ask The World"}</Button>
                 {this.renderPostForm()}
                {this.newRenderPosts()}
                
                </>
                :
                <>
                <h1>Goodbye, We hope you were able to choose between This or That </h1>
                </>        
                }
            </>
        )
    }
}

function msp(state){
    console.log("current state in msp in allPOOST", state)
    return { user: state.user, postArray: state.posts, postID: state.postID}
}

function mdp(dispatch){
    return{
        getPosts: (arrayOfPost) => dispatch(fetchPosts(arrayOfPost))
    }
    
}



export default connect(msp,mdp)(AllPost) 
const Button = styled.button`
    margin-top: 20px;
    background:  silver;
    border: 0px solid;
    border-color: #EF476F;
    width: 350px;
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





import React, { Component } from 'react'
import {connect} from 'react-redux'
import { fetchPosts } from '../Redux/actions'
import AddPost from '../Components/AddPost'
import Post from '../Components/Post'
import styled from 'styled-components'


class Wall extends Component {

    state ={
        filterPost: "",
        postArray : [],
        beenClicked:false,
        user:null,
        newPostArray : []
    }
    
    componentDidMount(){
        fetch("http://localhost:5000/api/v1/posts")
        .then(r => r.json())
        .then (arrayOfPost => {
            const filteredPosts = []
            arrayOfPost.forEach( post=>{
                if(post.user.id === this.props.user.id){
                filteredPosts.push(post)
                }
            })    
            console.log("IN WALL DIDMOUNT SHOWING filteredPosts",filteredPosts)
            this.props.getPosts(filteredPosts)
        })
        .catch(console.log)
    }


    renderPostForm = () => {
        if(this.state.beenClicked){
            return (< AddPost rerender={this.newRenderPosts} updatePage={this.props.updatePage}/>)
        }
    }

    postClickHandler = () => {
        this.setState((prevState) => ({beenClicked: !prevState.beenClicked}))
    }

    
    newRenderPosts = () => {
        console.log("FILTERED POST ARRAY", this.props.postArray)
        return this.props.postArray.map(post => <Post className="post-css" key={post.id} postObj={post} username={post.user.username} rerender={this.newRenderPosts} updatePage={this.updatePage}/>)
    }


    render() {
        console.log("wall.js props",this.props)
        return (
            <>
                { localStorage.token ?
                <>
                <Button class="addpostbutton" onClick={this.postClickHandler}>{this.state.beenClicked? "Never Mind": "Ask The World"}</Button>
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
    console.log("current state in msp in wall.js", state.user)
    return { user: state.user, postArray: state.posts}
}

function mdp(dispatch){
    return{
        getPosts: (filteredPosts) => dispatch(fetchPosts(filteredPosts))
    
    }
    
}



export default connect(msp,mdp)(Wall) 
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




import React, { Component } from 'react'
// import FilterPost from '../Components/FilterPost'
import {connect} from 'react-redux'
import { fetchPosts } from '../Redux/actions'
import AddPost from '../Components/AddPost'
import Post from '../Components/Post'

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
            // console.log("THIS IS AFTER THE FETCH",this.state.postArray)
        })
        .catch(console.log)
            
        
        console.log("render ALLL posts", this.props.postArray)

        // return this.props.postArray.map(post => <Post key={post.id} postObj={post} user={this.props.user}/>)
    }
    
    newRenderPosts = () => {
        // console.log("newrenderpost this.props.user", this.props.user)
        console.log("newrenderpost this.STATE.postarray", this.state.postArray)
        // return this.props.postArray.map(post => <Post key={post.id} postObj={post} user={post.user.username}/>)
        // return this.props.postArray.map(post => <Post key={post.id} postObj={post} content={post.content}/>)
        return this.state.postArray.map(post => <Post className="post-css" key={post.id} postObj={post} username={post.user.username}/>)
        
        
        // return this.props.newPostArray.map(post => <Post key={post.id} postObj={post} username={post.user.username}/>)

    }


    render() {
        console.log("console log of this.props in All post",this.props.postArray)
        return (


            <>
                { localStorage.token ?

                <>
                
                {/* < FilterPost  /> */}
                <button class="addpostbutton" onClick={this.postClickHandler}>{this.state.beenClicked? "Prefer to keep it to yourself ?": "Ask The World"}</button>
                {/* {this.renderPosts()} */}
                 {this.renderPostForm()}
                {this.newRenderPosts()}
                {/* {this.renderPosts()} */}
                
                </>
                
                :

                <>
                <h1>not logged in</h1>

                </>        
                }
            </>
            
            // <>
            
            // {this.props.user.posts.forEach(post => { <Post content={post.content } /> } )}
            // </>

        )
    }
}

function msp(state){

    console.log("current state in msp in allPOOST", state)
    return { user: state.user, postArray: state.posts, postID: state.postID}
    // return { user: state.user, postArray: state.user.posts}
    


}

function mdp(dispatch){
    return{
        getPosts: (arrayOfPost) => dispatch(fetchPosts(arrayOfPost))

        // createPost: (newPostObject) => dispatch(addPost(newPostObject))
    
    }
    
}



export default connect(msp,mdp)(AllPost) 




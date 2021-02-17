import React, { Component } from 'react'
// import FilterPost from '../Components/FilterPost'
import {connect} from 'react-redux'
import { fetchPosts } from '../Redux/actions'
import AddPost from '../Components/AddPost'
import Post from '../Components/Post'
import stylePost from '../Styling/stylePost.scss'


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
            // this.setState({newPostArray:filteredPost})
            // dispatch({type: FETCH_POSTS, payload : filteredPosts})
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
        // console.log("newrenderpost this.props.user", this.props.user)
        console.log("FILTERED POST ARRAY", this.props.postArray)
        return this.props.postArray.map(post => <Post className="post-css" key={post.id} postObj={post} username={post.user.username} rerender={this.newRenderPosts} updatePage={this.updatePage}/>)
        
        

    }


    render() {
        console.log("wall.js props",this.props)
        return (


            <>
                { localStorage.token ?

                <>
                
                {/* < FilterPost  /> */}
                <button class="addpostbutton" onClick={this.postClickHandler}>{this.state.beenClicked? "Dont feel like Posting": "Show The World"}</button>
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

    console.log("current state in msp in wall.js", state.user)
    // console.log("WHEREPOST CAME FROM",state.posts.user.id)
    return { user: state.user, postArray: state.posts}
    // return { user: state.user, postArray: state.user.posts}
    


}

function mdp(dispatch){
    return{
        getPosts: (filteredPosts) => dispatch(fetchPosts(filteredPosts))

    
    }
    
}



export default connect(msp,mdp)(Wall) 




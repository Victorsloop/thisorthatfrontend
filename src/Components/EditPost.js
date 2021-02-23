import React from 'react'
import {connect} from 'react-redux'
import {editPost,editingPost} from '../Redux/actions'
import './Stylesheet.css'

class EditPost extends React.Component {


    state ={
        content: "",
        img_url: "",
        editButtonClicked: false,
        changePAGE: false
    }

    userFormHandler = (e) => {
        e.preventDefault()
        this.setState({[e.target.name]: e.target.value})
    }
    
    editHandler = (e) => {
        e.preventDefault()
        this.props.editPost(this.props.postObj.id, this.state, this.props.history)
    }

    
    articleSubmit = (e) => {
        e.preventDefault()
        console.log("PROPS INSIDE EDIT POST",this.props)
        this.setState({editButtonClicked: !this.state.editButtonClicked})
        let updatedPostObj = {
            content: this.state.content,
            img_url: this.state.img_url,
        }
        this.props.editingPost(this.props.postObj.id,updatedPostObj)
        this.props.editClicked()
    
    }


        render(){
            return(
                <>
                <form onSubmit={this.articleSubmit}>
                <input type="text" name="content"placeholder={this.props.postObj.content} value={this.state.content} onChange={this.userFormHandler}/>
                <input type="text" name="img_url"placeholder={this.props.postObj.img_url} value={this.state.img_url} onChange={this.userFormHandler}/>            
                <button class="editbutton">Correct!</button>
                </form>
                </>
                )
                
            }
    
}

function mdp(dispatch){
    return{
        editPost: (postId,postObj,history) => dispatch(editPost(postId,postObj,history)),
        editingPost:(postId,postObj) => dispatch(editingPost(postId, postObj))
    
    }
    
}

export default connect(null, mdp) (EditPost)


import React, {Component} from 'react'
 import {connect} from 'react-redux'
 import {Link} from 'react-router-dom'
 import stylePost from '../Styling/stylePost.scss'
 import EditPost from './EditPost'
import styled from "styled-components";


class Post extends Component{


    state={
        editClicked:false,
        deleteClicked:false,
        postID :this.props.postID,
        changePAGE: false
    }
    editClicked = () => {
        this.setState({editClicked: !this.state.editClicked})
        console.log("youre clicking it :D ",this.props.postObj.id)
    }
    editUserPost = () => {
        console.log("EDITING USER POSTS")
        if(this.state.editClicked === true && this.props.user.id === this.props.postObj.user.id){
            return (< EditPost postObj={this.props.postObj} editClicked={this.editClicked} updatePage={this.props.updatePAGE} />)
        }
        
    }
    deleteClicked = () => {
        this.setState({deleteClicked: !this.state.editClicked})
        console.log("youre clicking it DELETE:D ",this.props.postObj.id)
    }

    deletePost = () => {
        if(this.state.editClicked === false && this.props.postObj){
            return (<Button onClick={this.deleteVent}>Delete </Button>)
        }
        
    }
    deleteVent = ()=> {
        console.log("in delete users posts",this.props.postObj)
        fetch(`http://localhost:5000/api/v1/posts/${this.props.postObj.id}`,{
            method:"DELETE"
            
        })
        .then(r => r.json())
        .then (data=> {
            console.log("new posts list in server",data,this.props)
            this.setState({ deleteClicked: !this.state.deleteClicked })
            this.forceUpdate()
            window.location.reload ()
        })
        .catch(console.log)
        

    }    

    render(){
        console.log("TESTING OUR STATE",this.props)
        return(
            <>
        
            {this.props.user ? 
             <>
             <div class="postCard" >
             <Link to={`/feedback/${this.props.postObj.id}`} postID={this.state.postID}>
            <img alt={this.props.user.username} style={{ maxWidth: "70vw", maxHeight: "20vh" }}src={this.props.postObj.img_url} ></img>
             </Link>
            <div class="postcardCON">
            <h6>Creator: {this.props.username}</h6> 
            <h6>Situation: {this.props.postObj.content}</h6>
            <Button onClick={this.editClicked} >{this.state.editClicked? "Its perfect": "Edit "}</Button>
            {this.deletePost()}

            </div>
            </div>
            
             
            </>
            :
            <>
            <div></div>
            </>
            }
            {this.editUserPost()}
            </> 

        )
    }

}

const msp = (state) => {
    // console.log("current state", state)
    return { user: state.user, postID: state.postID}
    
}

export default connect(msp,null)(Post)
const Button = styled.button`
    margin-top: 20px;
    background:  silver;
    border: 0px solid;
    border-color: #EF476F;
    width: 300px;
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

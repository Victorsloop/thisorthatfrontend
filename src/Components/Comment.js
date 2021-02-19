import React, {Component} from 'react'
 import {connect} from 'react-redux'
//  import {Link,Redirect} from 'react-router-dom'
 import EditComment from './EditComment'
import styleFeedback from '../Styling/styleFeedback.scss'
import styled from 'styled-components'



class Comment extends Component{


    state={
        editClicked:false,
        deleteClicked:false
    }


    editClicked = () => {
        this.setState({editClicked: !this.state.editClicked})
        console.log("youre clicking it :D ")
    }
    editUserComment = () => {
        console.log("EDITING USER POSTS")
        if(this.state.editClicked === true){
            return (< EditComment commentObj={this.props.commentObj}  />)
        }
        
    }
    // deleteClicked = () => {
    //     this.setState({deleteClicked: !this.state.editClicked})
    //     console.log("youre clicking it DELETE:D ")
    // }

    deleteComment = () => {
        if(this.state.editClicked === true){
            return (<Button onClick={this.deleteFeedback}>Delete 🥲</Button>)
        }
        
    }
    deleteFeedback = ()=> {
        console.log("in delete users posts",this.props.commentObj)
        fetch(`http://localhost:5000/api/v1/feedbacks/${this.props.commentObj.id}`,{
            method:"DELETE"
            
        })
        .then(r => r.json())
        .then (data=> {
            console.log("new posts list in server",data)
            // history.push("/post")
            this.setState({ deleteClicked: !this.state.deleteClicked })
            // this.forceUpdate()
            // window.location.reload ()
        })
        .catch(console.log)

    }


    checkCOM=()=>{
        console.log("Checking commentobj",this.props.commentObj)
        // console.log("Checking comment",this.props.feedbackArray)
        console.log("feedbackarray",this.props.feedbackArray)

        // console.log("CHECKING CONTENT",this.props.content)

    }
    
    render(){
     

        return(
            <div class="commentArea div3FComments">
            <>
                {/* {this.props.commentObj.length} */}

            {/* <h4>Predicament: {this.props.commentObj.post.content}</h4> */}
            {/* <h4>User: {this.props.commentObj.user.username}</h4> */}
            <h4>Advice: {this.props.commentObj.comment}</h4>
            {this.props.commentObj.con ===true  ? "Con⛔️"
            : this.props.commentObj.pro ===true ? "Pro✅"
            : "NeUtRuAl"}
            {this.deleteComment()}
            <Button onClick={this.editClicked} >{this.state.editClicked? "Its perfect": "Edit "}</Button>
            {this.editUserComment()}
            {/* {this.checkCOM()} */}

            </> 

            </div>

        )
    }

}
{/* <Choice>PRO</Choice>  */}
const msp = (state) => {
    // console.log("current state", state)
    return { user: state.user,feedbackArray:state.comments}
    
}

export default connect(msp,null)(Comment)
const Button = styled.button`
    margin-top: 10px;
    background:  silver;
    border: 0px solid;
    border-color: #EF476F;
    width: 80px;
    font-weight: bolder;
    font: inherit;
    line-height: 1;
    padding: 5px;
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
const Choice = styled.h6`
text-shadow: 0 0 5px #05c905b4, 0 0 10px #05c905b4, 0 0 15px #05c905b4, 0 0 20px #08d123, 0 0 20px #1fd108, 0 0 20px #08d144, 0 0 20px #29d108


`


const Boice = styled.button`

`
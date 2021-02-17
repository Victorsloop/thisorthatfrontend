import React, {Component} from 'react'
 import {connect} from 'react-redux'
//  import {Link,Redirect} from 'react-router-dom'
 import EditComment from './EditComment'


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
            return (<button onClick={this.deleteFeedback}>DELETE  🥲</button>)
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
            <div>
                <div>
            {/* <h2>SITUATION : {this.props.commentObj.post.content}</h2> */}

                </div>

            <>
            <h3>ADVICE FROM THE WORLD</h3>
            <h4>User: {this.props.commentObj.user.username}</h4>
            <h4>Advie: {this.props.commentObj.comment}</h4>
            {this.props.commentObj.con ===true  ? "CON ⛔️" 
            : this.props.commentObj.pro ===true ? "PRO ✅" 
            : "NeUtRuAl"}
            {this.deleteComment()}
            <button onClick={this.editClicked} >{this.state.editClicked? "Its perfect": "Edit "}</button>
            {this.editUserComment()}
            {this.checkCOM()}
            <div>

            </div>

            </> 

            </div>

        )
    }

}

const msp = (state) => {
    // console.log("current state", state)
    return { user: state.user,feedbackArray:state.comments}
    
}

export default connect(msp,null)(Comment)
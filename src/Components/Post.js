import React, {Component} from 'react'
 import {connect} from 'react-redux'
 import {Link} from 'react-router-dom'
 import EditPost from './EditPost'
 import stylePost from '../Styling/stylePost.scss'
//  import 'stylePost.scss'



class Post extends Component{


    state={
        editClicked:false,
        deleteClicked:false,
        postID :this.props.postID,
        changePAGE: false
    }

    // updatePAGE= ()=>{
    //     this.setState({changePAGE: !this.state.changePAGE})
    //   }


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
            return (<button onClick={this.deleteVent}>DELETE  🥲</button>)
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
            // history.push("/post")
            this.setState({ deleteClicked: !this.state.deleteClicked })
            this.forceUpdate()
            window.location.reload ()
            // component.forceUpdate(callback)
            // this.props.rerender()
        })
        .catch(console.log)
        

    }    

    // postIdentification = () => {
    //     this.setState ({postID: this.props.postObj.id})
    // }
    render(){

        // console.log(this.state.postID)
        console.log("TESTING OUR STATE",this.props)
        return(
            <>
        
            {this.props.user ? 
             <>
             {/* onClick={() => alert("Youre about to give some advice")} */}
             <div class="postCard" >
             <Link to={`/feedback/${this.props.postObj.id}`} postID={this.state.postID}>
             {/* <Link to={`/feedback/:id`} postID={this.state.postID}> */}
            <img alt={this.props.user.username} style={{ maxWidth: "70vw", maxHeight: "20vh" }}src={this.props.postObj.img_url} ></img>
             </Link>
            <div class="postcardCON">
            <h6>Creator: {this.props.username}</h6> 
            <h6>Situation: {this.props.postObj.content}</h6>
            <button onClick={this.editClicked} >{this.state.editClicked? "Its perfect": "Edit vent"}</button>
            {/* <button>DELETE</button> */}
            {/* <button onClick={this.postIdentification}>Help</button> */}
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
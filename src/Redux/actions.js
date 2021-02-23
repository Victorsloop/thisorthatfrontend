import {INCREMENT,FETCH_POSTS, LOGIN, SIGNUP,GET_USER,ADD_USER_POSTS, LOG_OUT,FETCH_ALLPOSTS, ADD_COMMENTS,FETCH_COMMENTS, EDIT_COMMENTS,EDIT_POST} from './actionTypes'
//Functions that reutrn actions, hold all our actions that return 
export function incrementCounter(){
    return {type:INCREMENT}
}
/////////////////POST ACTIONS////////////////////////
export function fetchPosts(filteredPosts){
    console.log("IN POSTS FETCH ACTION",filteredPosts)
    return {type: FETCH_POSTS, payload : filteredPosts}
}


export function fetchALLPosts(){
    console.log("IN FETCH ACTION")
    return function (dispatch, getState){
        fetch("http://localhost:5000/api/v1/posts")
        .then(r => r.json())
        .then (arrayOfPost => {
            console.log("IN ACTIONS SHOWING ARRAY",arrayOfPost)
            dispatch({type: FETCH_ALLPOSTS, payload : arrayOfPost})
        })
        .catch(console.log)
    }
}

export function addPosts(newPostObject){
    console.log("IN FETCH ACTION ADDING",newPostObject)
    return function (dispatch, getState){
        fetch("http://localhost:5000/api/v1/posts",{
            method:"POST",
            headers:{
                "Content-Type": "application/json",
                "Accepts": "application/json"
            },
            body:JSON.stringify(newPostObject)
        })
        .then(r => r.json())
        .then (postObject => dispatch({type: ADD_USER_POSTS ,payload: postObject}))
        .catch(console.log)
    }
}


export function editPost(postId, updatedPostObj, history) {
    return function (dispatch) {
        fetch(`http://localhost:5000/api/v1/posts/${postId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedPostObj),
        })
            .then(response => response.json())
            .then(postData => {
            window.location.reload ()

            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
}

///////////////USER ACTIONS ////////////////

export function loginUser(userObj) {
    return function(dispatch, getState){
        fetch('http://localhost:5000/api/v1/login', {
            method: "POST",
            headers: {
                "Accepts": "application/json",
                "Content-type": "application/json"
            },
            body: JSON.stringify({ user: userObj })
        })
            .then(r => r.json())
            .then(checkedUserObj => {
                console.log("checkedUserObj:",checkedUserObj)
                localStorage.setItem("token", checkedUserObj.jwt)
                dispatch({type: LOGIN, payload: checkedUserObj.user})

                // console.log("checkedUserObj.posts:",checkedUserObj.user.posts)
                // dispatch({type: ADD_POSTS, payload: checkedUserObj.user.posts})
            })
            .catch(console.log)
    }
}

export function signupUser(userObj) {


    return function (dispatch, getState) {
        fetch('http://localhost:5000/api/v1/users', {
            method: "POST",
            headers: {
                "Accepts": "application/json",
                "Content-type": "application/json"
            },
            body: JSON.stringify({ user: userObj })
        })
            .then(r => r.json())
            .then(newUserObj => {

                const newWallObj = {
                    user_id: newUserObj.id
                  }
                  fetch("http://localhost:5000/api/v1/walls",{
                        method:"POST",
                        headers:{
                            "Content-Type": "application/json",
                            "Accepts": "application/json"
                        },
                        body:JSON.stringify(newWallObj)
                    })
                    .then(r => r.json())
                    .then (data=>{
                        console.log("new user wall created!!!!!!",data)}
                        )
                    .catch(console.log)


                localStorage.setItem("token", newUserObj.jwt)
                dispatch({type: SIGNUP, payload: newUserObj.user})
            
            })
            .catch(console.log)
    }
}

export function returningUser(userObj) {
    return {type: GET_USER, payload: userObj.user}
}

export function reduxLogout(){
    return {type:LOG_OUT, payload: null}
}

/////// COMMENTS ACTIONS /////
export function fetchComments(filteredFeedback){
    console.log("FILTERED COMMENTSFETCH ACTION",filteredFeedback)
    return {type: FETCH_COMMENTS, payload : filteredFeedback}
}

export function addComments(newCommentObject){
    console.log("ADDING COMMENTS actions",newCommentObject)
    return function (dispatch, getState){
        fetch("http://localhost:5000/api/v1/feedbacks",{
            method:"POST",
            headers:{
                "Content-Type": "application/json",
                "Accepts": "application/json"
            },
            body:JSON.stringify(newCommentObject)
        })
        .then(r => r.json())
        .then (commentObject => dispatch({type: ADD_COMMENTS ,payload: commentObject}))
        .catch(console.log)
    }
}

export function editComment(commentId, updatedCommentObj, history) {
    return function (dispatch) {
        fetch(`http://localhost:5000/api/v1/feedbacks/${commentId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedCommentObj),
        })
            .then(response => response.json())
            .then(commentData => {
            window.location.reload ()
            dispatch({ type: EDIT_COMMENTS, payload: commentData})
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
}

export function editingPost(postId,postObj) {
    return function (dispatch) {
        fetch(`http://localhost:5000/api/v1/posts/${postId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(postObj),
        })
            .then(response => response.json())
            .then(newPostObj => {
            window.location.reload ()
                dispatch({ type: EDIT_POST, payload: newPostObj})
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
}

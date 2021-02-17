// import React from 'react'
// import {NavLink} from 'react-router-dom'
// import {connect} from 'react-redux'
// class Header extends React.Component {
//     render(){
//         return(
//             <>
//             {this.props.user?(
//                  <div>
//                  <NavLink to="/Home">
//                  <h4>Home</h4>
//                  </NavLink>
//                  <NavLink to="/allVents">
//                  <h4>All Vents</h4>
//                  </NavLink>
//                  <NavLink to="/createVent">
//                  <h4>Create a Vent</h4>
//                  </NavLink>
//                  <NavLink to="/Profile">
//                  <h4>Profile</h4>
//                  </NavLink>
//                  <NavLink to="/Logout">
//                  <h4>Logout</h4>
//                  </NavLink>
//              </div>


//             ):
            
            
            
//             <div>
//                 <NavLink to="/Home">
//                 <h4>Home</h4>
//                 </NavLink>
//                 <NavLink to="/About">
//                 <h4>About</h4>
//                 </NavLink>
//                 {/* <NavLink to="/createVent">
//                 <h4>Create a Vent</h4>
//                 </NavLink>
//                 <NavLink to="/Profile">
//                 <h4>Profile</h4>
//                 </NavLink>
//                 <NavLink to="/Logout">
//                 <h4>Logout</h4>
//                 </NavLink> */}
//             </div>
//             }
//             </>
//         )
//     }
// }

// function msp(state) {
//     return ({
//         user: state.user
//     })
// }

// export default connect(msp,null)(Header)


function Header (){
    return(
        <>
        <h1 className="center">This OR That</h1>
        {/* <img alt="FaceBock" style={{ maxWidth: "20vw", maxHeight: "20vh", float:"left" }}src={"https://thumbor.forbes.com/thumbor/711x474/https://specials-images.forbesimg.com/imageserve/5f8b53d83ad376bd758e6b23/960x0.jpg?fit=scale"}></img> */}
        </>
    )
}



export default Header 
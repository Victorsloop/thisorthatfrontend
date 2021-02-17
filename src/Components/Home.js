import React from 'react'
import {NavLink} from 'react-router-dom'

class Home extends React.Component {
    render(){
        return(
            <div>
                <h1>HELLO FROM THE HOME PAGE</h1>
                <>
                {this.props.user ? (
                    <>
                     
                            <div style={{ width: "45%", float: "left" }}>
                                <p style={{fontSize: "26px", textAlign: "left"}}> Are you stuck and cant make up your mind ??? Well ask the world for some unbiased advice!</p>
                                <br/>
                                <NavLink to="/createVent">
                                    <button>NEED PEOPLE</button>
                                </NavLink>
                            </div>
                            <div style={{ width: "45%", float: "left" }}>
                                <p style={{fontSize: "26px", textAlign: "left"}}> Checkout other people's vents. Share your wisdom or maybe reach out! </p>
                                <br/>
                                <NavLink to="/explore-thoughts">
                                    <button>HELP HELP</button>
                                </NavLink>
                            </div>

                    </>
                ) :

                    <>
                        <div> This Or That </div>
                        <br /><br />
                        <br /> <br /><br />
                        <NavLink to="/Login">
                            <button style={{marginLeft: "50px", marginRight: "50px"}}> LOG IN </button>
                        </NavLink>
                        <NavLink to="/Signup">
                            <button> SIGN UP </button>
                        </NavLink>
                    </>
                }
            </>
            </div>
        )
    }
}
        

export default Home

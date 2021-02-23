import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {Menubar} from 'primereact/menubar'
import {Button} from 'primereact/button'
import { reduxLogout } from '../Redux/actions'
import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.css';
import './Stylesheet.css'

class FinalHeader extends Component{

    state={
        clicked:null
    }

    loggedOutMenu = [
        {
            label: 'This Or That',
            icon: 'pi pi-fw pi-home',
            command: () => { window.location.href = "/Welcome" }
        }
    ]

    loggedInMenu = [
        {
            label: 'This Or That',
            icon: 'pi pi-fw pi-home',
            command: () => { window.location.href = "/Welcome" }
        },
        {
            label: 'Profile',
            icon: 'pi pi-fw pi-user',
            command: () => { window.location.href = "/profile" }
        },
        {
            label: 'Vent',
            icon: 'pi pi-fw pi-pencil',
            command: () => { window.location.href = "/post" }
        },
        {
            label: 'All Vents',
            icon: 'pi pi-fw pi-search-plus',
            command: () => { window.location.href = "/allPost" }
        },
        {
            label: 'Fate',
            icon: 'pi pi-fw pi-heart',
            command: () => { window.location.href = "/fate" }
        }

    ]

    logout = () => {
        
        console.log(localStorage.clear())
        localStorage.clear("token")
        this.props.reduxLogout()
        this.setState({clicked:true})

    }
    render (){
        return (
            <div>
            {this.props.userObj? 
             <>
                <Menubar model={this.loggedInMenu} end={<Button label="Logout" onClick= {this.logout}/>}/>
                {this.state.clicked === true? 
                <Redirect to="/Welcome"/>
                : 
                <div></div>
            
            }
                </>

                :
                <Menubar model={this.loggedOutMenu}/>}

                </div>
        


        )

    }
}

const msp = (state) => {
    return{ userObj: state.user}

}

function mdp(dispatch){
    return{
        reduxLogout: () => dispatch(reduxLogout())
    
    }
    
}
export default connect(msp,mdp)(FinalHeader)



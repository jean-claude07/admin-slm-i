import Axios from 'axios'
import React, { Component } from 'react'
import {Link} from 'react-fast-compare';
import axios from 'axios';

import './nav_bar.css'
export class Top_navigation extends Component {
    state={
        notification: ''
    }

    componentDidMount(){
        this.getNotification();
    }

    getNotification() {
        axios.get('/notification').then(response => {
            
            this.setState({
                notification: response.data
            })
        })
    }

    handleClick = () => {
        sessionStorage.clear();
        localStorage.clear();
        window.location.reload();
    }

    render() {
        console.log(this.props)
        const admin = this.props.data
        let pdp;
        if(this.props.data.pdpadmin){
            pdp = (
                <img  src={`hhttp://apimanageur.herokuapp.com/${admin && admin.pdpadmin.url}`} width="100px" alt="..." class="rounded-circle profile_img" />
            )
        }else{
            pdp = (
                <img src="images/img.jpg" alt="" className="img-circle img-fluid"/>
            )
        }
        return (
            <div>
                <div className="top_nav">
                <div className="nav_menu">
                    {/* <div className="nav toggle">
                        <a id="menu_toggle"><i className="fa fa-bars"></i></a> 
                    </div> */}
                    <nav className="nav navbar-nav">
                    <ul className=" navbar-right" >
                        <li style={{margin: '10px'}}>
                        <a href="/contact" className="dropdown-toggle info-number" data-toggle="dropdown" aria-expanded="false">
                            <i className="fa fa-envelope-o"></i>
                            <span className="badge bg-green">{this.state.notification} </span>
                        </a>
                        </li>
                    
                        <li className="nav-item dropdown open">
                            <a href="#" className="user-profile dropdown-toggle" aria-haspopup="true" id="navbarDropdown" data-toggle="dropdown" aria-expanded="false">
                                {pdp}  {admin.prenom}
                            </a>
                            <div className="dropdown-menu dropdown-usermenu pull-right" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item"  href="#">Help</a>
                                <a className="dropdown-item"  href="/profile-admin">Profile</a>
                                <a className="dropdown-item"  href="#" onClick={this.handleClick} ><i className="fa fa-sign-out pull-right"></i> Deconnexion</a>
                            </div><code>&nbsp;</code>
                        </li>
                    </ul>
                    </nav>
                </div>
                </div>
            </div>
        )
    }
}

export default Top_navigation;

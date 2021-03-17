import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Tick from '../Tick';

import './sidebar.css';
export class Sidebar extends Component {
   
    render() {
        console.log(this.props)
        const admin = this.props.admin
        let pdp;
        if(this.props.admin.pdpadmin == null){
            pdp = (
                <img src="images/img.jpg" alt="" className="img-circle img-fluid"/>
            )
        }else{
            pdp = (
                <>
                <img  src={`http://localhost:4000/${admin && admin.pdpadmin.url}`} alt="image..." class="rounded-circle profile_img" width="100px" />
                <span>🔴</span>
                </>
            )
        }
        return (
            <div className="total-side">
                     <div class="col-md-2 left_co">
                        <div class="left_co scroll-view">
                            <div class="navbar nav_title" >
                            <a href="index.html" class="site_title"><i class="fa fa-paw"></i> <span>SLM-I</span></a>
                            </div>

                            <div class="clearfix"></div>

                            <div class="profile clearfix">
                            <div class="profile_pic">
                                {pdp}
                            </div>
                            <div class="profile_info">
                                <span><Tick/> </span>
                                <h2>{admin.prenom}  </h2>
                            </div>
                            </div>
                                <br />



                                <div id="sidebar-menu" class="main_menu_side hidden-print main_menu">
                                <div class="menu_section">
                                    <h3>General</h3>
                                    <ul class="nav side-menu">
                                    <li><Link to="/"><i class="fa fa-home"></i> Accueil  </Link></li>
                                        <li><Link to="/annonces_slm_i"><i class="fa fa-edit"></i> Liste des Annonces  </Link></li>
                                        <li><Link to="/chauffeur"><i class="fa  fa-edit"></i> Liste des demandes </Link></li>
                                        <li><Link to="/contact"><i class="fa fa-table"></i> Contact </Link></li>
                                        <li><Link to="/"><i class="fa fa-bar-chart-o"></i>  Presentation  </Link></li>
                                        <li><Link to="/test"><i class="fa fa-clone"></i>Test Ms Rado  </Link></li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                        </div>

            </div>
        )
    }
}

export default Sidebar;



import React, { Component } from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Top_navigation from '../../components/navigation/Top_navigation';
import Sidebar from '../../components/sidebar/Sidebar';

import Contact from '../contact/Listing_contact';
import Chauffeur_dispo from '../chauffeurs_admin/Chauffeur_dispo/Chauffeur_dispo';
import Chauffeur_non_dispo from '../chauffeurs_admin/Cauffeur_non_dispo/Chauffeur_non_dispo';
import Test from '../test/Test';

import './index_admin.css'
import Admin from '../profileAdmin/Admin';
import Acceuil from '../accueil/Acceuil';
import Annonce_admin from '../annonce_recruteur/Annonce_admin';
export class Index_admin extends Component {
    render() {
        return (
         <div className="admin-general">
                <BrowserRouter>
                        <Top_navigation data={this.props.user} />
                         <Sidebar admin={this.props.user} />
                        <Switch> 
                            <Route exact path='/' component={Acceuil} />
                            <Route exact path='/chauffeur_disponible' component={Chauffeur_dispo} />
                            <Route exact path='/chauffeur' component={Chauffeur_non_dispo} />
                            <Route exact path='/contact' component={Contact} />
                            <Route exact path='/test' component={Test} />
                            <Route exact path='/annonces_slm_i' component={Annonce_admin} />
                            <Route exact path='/profile-admin' component={Admin} />
                        </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default Index_admin;

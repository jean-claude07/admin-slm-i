import React, { Component } from 'react';
import axios from 'axios';
import Apropos from './apropos/Apropos';
import Recruteur_about from './contact_recruteure/Recruteur_about';
import Component_annonce from './component/Component_annonce';

class Annonce_admin extends Component {
    constructor(props) {
		super(props);

		this.state = {
            annonces: [],
            routes: ''
		}
    }
    componentDidMount() {
        this.getannonce();
    }

    getannonce = () => {
    axios.get('annonce')
        .then(response => this.setState({
            annonces: response.data
        }))
    }
   

    deleteannonce = (annonce) => {
    axios.delete(`/annonces/${annonce.id}`).then(response => {
        if (response.status === 204) {
            this.getannonce();
            alert('suppression success :-)');
        }
    })
    }

   
    render() {
        const annonces = this.state.annonces
       
        return (
            <>
            {annonces && annonces.map(annonce => {
                return (
                      <>
                        <div className="content-general"></div>
                            <div className="row">
                                <div className="col-md-12 col-sm-12 ">
                                    <div className="panel-content">
                                    
                                        <div className="x_panel">
                                            <div className="x_title">
                                                <h2><strong>Jusqu'au  {annonce.date_limite} </strong></h2>
                                                <ul className="nav navbar-right panel_toolbox">
                                                <li><a className="collapse-link"  ><i className="fa fa-chevron-up" onClick={() => this.deleteannonce(annonce)}></i></a>
                                                </li>
                                                <li><a className="close-link"><i className="fa fa-close"></i></a>
                                                </li>
                                                </ul>
                                                <div className="clearfix"></div>
                                            </div>
                                            
                                           <Component_annonce annonces={annonce}/>
                                    </div>
                                </div>
                            </div>
                        </div> 
                      </>
                )})}
            </>
            
        );
    }
}

export default Annonce_admin

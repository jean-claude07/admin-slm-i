import axios from 'axios';
import React, { Component } from 'react'
import Contact_select from './Contact_select';

import './liste.css'
class Listing_contact extends Component {
    state={
        contact: []
    }

    componentDidMount(){
        this.getContact();
    }

    getContact = () => {
        axios.get('contacts')
            .then(response => {
                this.setState({
                    contact: response.data
                })
            })
    }

    

    render() {
        const contact = this.state.contact
    
        return (
            <div>
            <div className="content-general"></div>
            <div class="row">
                <div class="col-md-12 col-sm-12 ">
                    <div className="panel-content">
                    <div class="x_panel">
                    <div class="x_title">
                        <h2>Liste des Messages</h2>
                        <ul class="nav navbar-right panel_toolbox">
                        <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
                        </li>
                        <li><a class="close-link"><i class="fa fa-close"></i></a>
                        </li>
                        </ul>
                        <div class="clearfix"></div>
                    </div>
                    <div class="x_content">
                        <div class="row">
                            <div class="col-sm-12">
                                <div class="card-box table-responsive">
                                {contact && contact.map(contact => {
                                        return (
                                            <>
                                                <Contact_select contact={contact}/>
                                            </>
                                        )
                                    })}
                    </div>
                    </div>
                </div>
                </div>
                </div>
                </div>
            </div>
          </div>

        </div>
        );
    }
}

export default Listing_contact;


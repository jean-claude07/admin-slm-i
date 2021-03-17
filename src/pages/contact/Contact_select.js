import React, { Component } from 'react'
import { date } from 'yup/lib/locale';
import axios from 'axios';
import './contact.css'

export class Contact_select extends Component {
    destroyContact = (message) => {
        axios.delete(`contacts/${message.id}`).then(response => {
          console.log(response  )
        })
    }

    handleClick = (message  ) => {
        this.destroyContact(message);
    }
    render() {
        console.log(this.props)
        const message = this.props.contact
        let role;
        
        if(this.props.contact.subject === "recruteur"){
            role = (
                <>
                <div class="col-md-12 col-sm-12  ">
                    <div class="x_panel">
                    <div class="x_title">
                        <h4><span class="badge bg-danger">{message.id} </span>  {message.nom} <small class="text-danger">Recruteur </small></h4>
                        <h4><strong>Email: </strong> {message.email} </h4>
                        <h4><strong>Telephone : </strong> {message.telephone} </h4>
                       <br/>
                        
                    </div>
                    
                    <div class="x_content">
                    <span class="right">
                        <span class="badge bg-success">
                            {message.created_at}
                        </span>
                        <button class="close-link" style={{color: 'red'}} onClick={(message) => this.handleClick}><i class="fa fa-close"></i></button>
                    </span>
                    <strong>Message : </strong>
                        {message.message}
                    </div>
                    </div>
                </div>
                </>
            )
        }else{
            role = (
                <>
                <div class="col-md-12 col-sm-12  ">
                    <div class="x_panel">
                    <div class="x_title">
                    <h4><span class="badge bg-secondary">{message.id} </span>  {message.nom} <small class="text-primary">Chauffeur </small></h4>
                    <h4><strong>Email: </strong> {message.email} </h4>
                    <h4><strong>Telephone : </strong> {message.telephone} </h4>
                        
                        <div class="clearfix"></div>
                    </div>
                    <div class="x_content">
                    <span class="right">
                        <span class="badge bg-warning">
                            {message.created_at}
                        </span>
                        <button class="close-link" style={{color: 'red'}} onClick={this.destroyContact(message)}><i class="fa fa-close"></i></button>   
                    </span>
                    <strong>Message : </strong>
                        {message.message}
                    </div>
                    </div>
                </div>
                
                </>
            )
        }
        return (
            <>
                {role}
            </>
        )
    }
}

export default Contact_select

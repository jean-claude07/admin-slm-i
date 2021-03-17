import React, { Component } from 'react'
import axios from 'axios';
import Plus from './Plus';

export class Indisposition extends Component {
    state={
        disponible: ''
    }

    onClick = e => {
        e.preventDefault()
        this.setState({
            disponible: 'oui'
        })
        
        axios.patch(`chauffeurs/${this.props.chauffeur.id}`, {disponible: 'oui'}).then(resp => {
                if(resp.status === 200){
                    window.location.reload()
                }
        })
    }

    deleteChauffeur = (chauffeur) => {
        axios.delete(`/chauffeurs/${this.props.chauffeur.id}`).then(response => {
            if (response.status === 204) {
                this.props.getChauffeurs();
            }
        })
    }

    render() {
        console.log(this.props)
        let chauffeur;
        if(this.props.chauffeur.disponible == "non"){
            let button;
            if(this.state.disponible == "oui"){
                button = (
                    <button class="badge rounded-pill bg-success" >Disponible</button>
                )
            }else{
                button = (
                    <button class="badge rounded-pill bg-secondary" onClick={this.onClick}>Non disponible</button>
                )
            }
            chauffeur = (
                <>
                    <td>
                        <img src={`http://apimanageur.herokuapp.com/${this.props.chauffeur.photo.url}`} class="rounded-circle" width="50px" height="50px" />
                    </td>
                    <td>{this.props.chauffeur.prenom} </td>
                    <td>{this.props.chauffeur.categorie_permis} </td>
                    <td>{this.props.chauffeur.adresse} </td>
                    <td>{this.props.chauffeur.province} </td>
                    <td>
                        {button}
                    </td>
                    <td>
                        <Plus/>
                    </td>
                    <td>  
                        <a class="btn btn-danger" onClick={() => this.deleteChauffeur(chauffeur)} role="button">
                            delete
                        </a>
                    </td>
                    
                </>
            )
        }
        return (
            <>
                {chauffeur}
            </>
            
        )
    }
}

export default Indisposition

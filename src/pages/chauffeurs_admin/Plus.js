import React, { Component } from 'react'
import axios from 'axios';

export class Plus extends Component {
    state={
        disponible: ''
    }

    onClick = e => {
        e.preventDefault()
        this.setState({
            disponible: 'non'
        })
        
        axios.patch(`chauffeurs/${this.props.chauffeur.id}`, {disponible: 'non'}).then(resp => {
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
   
            chauffeur = (
                <>
                                       
                </>
            )
        
        return (
            <div>
                <button type="button" class="btn btn-info" data-toggle="modal" data-target="#exampleModal">
                <i class="fa fa-eye"></i>
                </button>

                
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Dettails des informations</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                    {chauffeur}
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default Plus

import React, { Component } from 'react'
import './Description.css';


export class Description_demande extends Component {
    render() {
        return (
            <div>
                <button type="button"  className="btn btn-primary" role="button" data-toggle="modal" data-target="#exampleModal">
                <i>Ajouter votre description </i>
                </button>

                
                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Description des annonces </h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                    <div className="form-group">
                        <textarea type="text" className="form-control" name="text"  />
                    </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Fermer</button>
                        <button type="button" className="btn btn-primary">Enregistré</button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default Description_demande
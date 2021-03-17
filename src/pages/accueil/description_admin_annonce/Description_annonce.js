import Axios from 'axios';
import React, { Component } from 'react'
import './Description.css';


export class Description_annonce extends Component {
    state={
        description: ''
    }

    handleChange = (e) => {
        this.setState({
            description: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        Axios.patch(`annonces/${this.props.data.id}`, {description: `${this.state.description}`}) 
            .then(response => {
                console.log(response)
            })
    }
    render() {
         const data = this.props.data
         const target = `#${this.props.data.poste}`
        return (
            <div>
                <button type="button"  className="btn btn-primary" role="button" data-toggle="modal" data-target={target}>
                <i>modifier la description </i>
                </button>

                
                <div className="modal fade" id={data.poste} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Description pour le post {data.poste} </h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                        <form onSubmit={this.handleSubmit}>
                            <div className="modal-body">
                            <div className="form-group">
                                <textarea type="text" className="form-control" name="text" onChange={this.handleChange} />
                            </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Fermer</button>
                                <button type="submit" className="btn btn-primary" >Enregistré</button>
                            </div>
                        </form>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default Description_annonce;
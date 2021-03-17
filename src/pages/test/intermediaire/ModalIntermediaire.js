import React, { Component } from 'react';

export class ModalIntermediaire extends Component {
    state={
        level: '',
        question: '',
        choix: {}
    }

    handleQuestion = e => {
        this.setState({
            question: e.target.value
        })
    }

    handleSbubmit1 = e => {
        e.preventDefault();
        this.setState({
            level: 1
        })
    }
    render() {
        let etape;
        if(this.state.level == 1){
            etape = (
                <>
                    <h1>votre choix</h1>
                </>
            )
        }else if(this.state.level == 2){
            etape = (
                <>
                    <h1>veuillez choisir les reponse :</h1>
                </>
            )
        }else{
            var put;
            if(this.state.question){
                put = (
                    <button type="button" className="btn btn-warning btn-lg btn-block">{this.state.question} </button>
                )
            }
            etape = (
                <>
                    <h1>votre question</h1>
                    <form className="input-group" onSubmit={this.handleSbubmit1}>
                        <input type="text" className="form-control" placeholder="Votre question ?" onChange={this.handleQuestion} />
                        <br/>
                        <span className="input-group-btn">
                            <button type="submit" className="btn btn-info">suivant</button>
                        </span>
                    </form>
                    <div>
                        {put}
                    </div>
                </>
            )
        }
        return (
            <div>
                <button type="button" className="btn btn-outline-info" data-toggle="modal" data-target="#intermediaire">
                Ajouter des questions niveau Intermediaire
                </button>

                
                <div className="modal fade" id="intermediaire" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel"  aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Modal title</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {etape}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Understood</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ModalIntermediaire;

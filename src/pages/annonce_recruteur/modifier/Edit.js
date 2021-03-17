import React, { Component } from 'react'
import axios from 'axios'

export class Edit extends Component {
    state={
        client: '',
        message: ''
    }

    handleClick = () => {
        this.setState({
            client: true
        })
        var id = this.props.annonce.id;

        axios.patch(`annonces/${id}`, {client: 'true'}).then(response => {
            if(response.status === 200){
                this.setState({
                    message: response.data.message
                })
            }
        })
    }

    handleAfterClick = () => {
        this.setState({
            client: false
        })

        var id = this.props.annonce.id;

        axios.patch(`annonces/${id}`, {client: 'false'}).then(response => {
            if(response.status === 200){
                this.setState({
                    message: response.data.message
                })
            }
        })
    }
    render() {
            var annonce = this.props.annonce
        let post;

        if(this.state.client === true){
            post = (
                <button type="button" class="btn btn-danger active" 
                    data-toggle="button" autocomplete="off" aria-pressed="true"
                    onClick={this.handleAfterClick}
                >
                Enlever</button>
            )
        }else{
            let button;
            if(this.props.annonce.client === 'true'){
                button = (
                    <button type="button" class="btn btn-danger active" 
                    data-toggle="button" autocomplete="off" aria-pressed="true"
                    onClick={this.handleAfterClick}
                    >
                    Enlever</button>
                )
            }else{
                button = (

                <button type="button" class="btn btn-primary active" 
                    data-toggle="button" autocomplete="off" aria-pressed="true"
                    onClick={this.handleClick}    
                >
                Poster</button>
                )
            }
            post = (
                <>
                {button}
                </>
            )
        }
        return (
            <div>
                <div className="col-md-12 col-sm-12  ">
                <div className="x_panel">
                  <center style={{color: "green"}}>
                    <div className="text-success" >{this.state.message}</div>
                  </center>
                  <div className="x_content">
                   
                    <form className="form-horizontal form-label-left">
                        <div className="col-md-6 col-sm-6  ">
                            <div className="form-group row">
                                <label className="control-label col-md-3 col-sm-3 col-xs-3">contact <br/>
                                </label>
                                <div className="col-md-9 col-sm-9 col-xs-9">
                                <input type="text" className="form-control" placeholder={annonce.contact} />
                                <span className="fa fa-pencil-square-o form-control-feedback right" aria-hidden="true"></span>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="control-label col-md-3 col-sm-3 col-xs-3">contrat</label>
                                <div className="col-md-9 col-sm-9 col-xs-9">
                                <input type="text" className="form-control" placeholder={annonce.contrat} />
                                <span className="fa fa-pencil-square-o form-control-feedback right" aria-hidden="true"></span>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="control-label col-md-3 col-sm-3 col-xs-3">Date limite</label>
                                <div className="col-md-9 col-sm-9 col-xs-9">
                                <input type="text" className="form-control" placeholder={annonce.date_limite} />
                                <span className="fa fa-pencil-square-o form-control-feedback right" aria-hidden="true"></span>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="control-label col-md-3 col-sm-3 col-xs-3">Description</label>
                                <div className="col-md-9 col-sm-9 col-xs-9">
                                <input type="text" className="form-control" placeholder={annonce.description} />
                                <span className="fa fa-pencil-square-o form-control-feedback right" aria-hidden="true"></span>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="control-label col-md-3 col-sm-3 col-xs-3">E-mail </label>
                                <div className="col-md-9 col-sm-9 col-xs-9">
                                <input type="text" className="form-control" placeholder={annonce.email} />
                                <span className="fa fa-pencil-square-o form-control-feedback right" aria-hidden="true"></span>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="control-label col-md-3 col-sm-3 col-xs-3">etablisment</label>
                                <div className="col-md-9 col-sm-9 col-xs-9">
                                <input type="text" className="form-control" placeholder={annonce.etablisment} />
                                <span className="fa fa-pencil-square-o form-control-feedback right" aria-hidden="true"></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6  ">
                            <div className="form-group row">
                                <label className="control-label col-md-3 col-sm-3 col-xs-3">Libellé </label>
                                <div className="col-md-9 col-sm-9 col-xs-9">
                                <input type="text" className="form-control" placeholder={annonce.libelle} />
                                <span className="fa fa-pencil-square-o form-control-feedback right" aria-hidden="true"></span>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="control-label col-md-3 col-sm-3 col-xs-3">Post </label>
                                <div className="col-md-9 col-sm-9 col-xs-9">
                                <input type="text" className="form-control" placeholder={annonce.poste} />
                                <span className="fa fa-pencil-square-o form-control-feedback right" aria-hidden="true"></span>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="control-label col-md-3 col-sm-3 col-xs-3">Pretention</label>
                                <div className="col-md-9 col-sm-9 col-xs-9">
                                <input type="text" className="form-control" placeholder={annonce.pretention} />
                                <span className="fa fa-pencil-square-o form-control-feedback right" aria-hidden="true"></span>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="control-label col-md-3 col-sm-3 col-xs-3">Profile rechercher</label>
                                <div className="col-md-9 col-sm-9 col-xs-9">
                                <input type="text" className="form-control" placeholder={annonce.profil_rechercher} />
                                <span className="fa fa-pencil-square-o form-control-feedback right" aria-hidden="true"></span>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="control-label col-md-3 col-sm-3 col-xs-3">province </label>
                                <div className="col-md-9 col-sm-9 col-xs-9">
                                <input type="text" className="form-control" placeholder={annonce.province} />
                                <span className="fa fa-pencil-square-o form-control-feedback right" aria-hidden="true"></span>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="control-label col-md-3 col-sm-3 col-xs-3">Reference </label>
                                <div className="col-md-9 col-sm-9 col-xs-9">
                                <input type="text" className="form-control" placeholder={annonce.reference} />
                                <span className="fa fa-pencil-square-o form-control-feedback right" aria-hidden="true"></span>
                                </div>
                            </div>
                        </div>
                      <div className="ln_solid"></div>

                      <div >
                        <center>
                            {post}
                            <button type="button" class="btn btn-success"  
                            data-toggle="button" autocomplete="off">Valider les modifications</button>
                        </center>
                      </div>

                    </form>
                  </div>
                </div>
                </div>
            
            </div>
        )
    }
}

export default Edit;

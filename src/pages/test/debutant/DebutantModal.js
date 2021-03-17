import React, { Component } from 'react'
import axios from 'axios';
import {Formik, Form, Field} from 'formik';

export class DebutantModal extends Component {
    state={
        choix: '',
        question: '',
        responseQ: {},
        reponse: '',
        etapes : '',
        questiondebutant: {},
        choixquestiondebutants: []
    }

    handleClick = e => {
        e.preventDefault();
        this.setState({
            etapes: 2
        })
    }

    handleEnd = e => {
        e.preventDefault();
        const resp = new FormData;
        resp.append('questiondebutant_id', this.state.responseQ.id )
        resp.append('reponse', this.state.reponse)
        axios.post('reponsequestiondebutants', resp).then(response => {
            if(response.status == 201) {
                window.location.reload();
            }
        })
    }

    handleChoix = (e) => {
        this.setState({
            choix: e.target.value
        })
    }

    handleQuestion = e => {
        this.setState({
            question: e.target.value
        })
    }

    handleSbubmit1 = e => {
        e.preventDefault();
        const data = new FormData;
        data.append('question', this.state.question)
        axios.post('questiondebutants', data ).then(response => {
         
            if(response.status == 201){
                this.setState({
                    responseQ: response.data
                })
                this.setState({
                    etapes: 1
                })
            }
        })
    }

    handleChoise = (e) => {
        e.preventDefault();
     
        this.setState({
            reponse: e.target.value
        })
    }

    handleSbubmit2 = (e) => {
        e.preventDefault();
        const formData = new FormData;
        formData.append('questiondebutant_id', this.state.responseQ.id )
        formData.append('choix', this.state.choix)
        axios.post('choixquestiondebutants', formData).then(response => {
            console.log(response)
            if(response.status == 201){
                this.getNiveau();
                
            }
        })
    }

    componentDidMount() {
        this.getNiveau();
    }

    getNiveau = () => {
        axios.get('question')
            .then(response => {
             
                this.setState({
                    questiondebutant: response.data.question
                })

                this.setState({
                    choixquestiondebutants: response.data.choix
                })
                
            })
    }
    
    render() {
        const choixs =this.state.choixquestiondebutants
        var choix;
        if(this.state.choix){
            choix = (
                <>
                    <label>
                        <input className="btn btn-primary btn-lg btn-block" type="button" value={this.state.choix}/> 
                    </label>
                </>
            )
        }

        let etape;
        if(this.state.etapes == 1){
            etape = (
                <div>
                <p className="text-primary">choix de reponse :</p>
                    <div >
                        <form className="input-group" onSubmit={this.handleSbubmit2} >
                            <input type="text" className="form-control" placeholder="Choix sur la question" onChange={this.handleChoix} />
                            <span className="input-group-btn">
                                <button type="submit" className="btn btn-primary">valider</button>
                            </span>
                            <span className="input-group-btn">
                                <button type="button" className="btn btn-success" onClick={this.handleClick} >suivant</button>
                            </span>
                        </form>
                    </div>
                    <div className="right">
                        <div className="text-primary">
                        <button type="button" className="btn btn-warning btn-lg btn-block">{this.state.question} </button>
                            {choixs && choixs.map(choix => {
                                let check;
                                if(this.state.question){
                                    check = (
                                        <>
                                        
                                        <form>
                                            <div className="Form">
                                                <input className="btn btn-primary btn-lg btn-block" name="reponse" type="button" value={choix.choix} />
                                            </div>
                                            <div>
                                            
                                            </div>
                                        </form>
                                        </>
                                      
                                    )
                                }
                                return (
                                    <div>
                                        {check}
                                    </div>
                                )
                            })}
                        </div>
                        {choix}
                    </div>
                </div>
                
            )
        }else if(this.state.etapes == 2){
            let anse;
            if(this.state.reponse){
                anse = (
                    <>
                      
                        <div className="divider-dashed"></div>
                        <p className="text-primary">La reponse est</p>
                        <br/>
                        <button type="button" className="btn btn-success btn-lg btn-block">{this.state.reponse} </button>
                    </>
                )
            }
            etape = (
                <>
                <p className="text-primary">choisisez votre reponse :</p>
                <button type="button" className="btn btn-warning btn-lg btn-block">{this.state.questiondebutant.question} </button>
                <br/>
                    <div className="text-primary">

                        {choixs && choixs.map(choix => {
                        const click = "btn btn-primary btn-lg btn-block"
                        
                            return (
                                <div>
                                    
                                    <form >
                                        <div className="Form">
                                            <input id="input" className={click}
                                             name="reponse" type="button" value={choix.choix} onClick={this.handleChoise}  />
                                        </div>
                                        <div>
                                        
                                        </div>
                                    </form>
                                
                                </div>
                            )
                        })}
                    </div>
                    {anse}
                </>
            )
        }else{
            let put;
            if(this.state.question){
                put = (
                    <button type="button" className="btn btn-warning btn-lg btn-block">{this.state.question} </button>
                )
            }
            etape = (
            <div>
                              
                <form className="input-group" onSubmit={this.handleSbubmit1}>
                    <input type="text" className="form-control" placeholder="Votre question ?" onChange={this.handleQuestion} />
                    <br/>
                    <span className="input-group-btn">
                        <button type="submit" className="btn btn-info">suivant</button>
                    </span>
                </form>
                {put}
            </div>
            )
        };

        let button;
        if(this.state.reponse){
            button = (
                <button type="submit" className="btn btn-primary" onClick={this.handleEnd}>Sauvegarder</button>
            )
        }else{
            button =(
                <button type="submit" className="btn btn-primary" >Sauvegarder</button>
            )
        }
        return (
            <div>
                <button type="button" className="btn btn-outline-info" data-toggle="modal" data-target="#staticBackdrop" >
                    Ajouter des question niveau debutant
                </button>

                
                <div className="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel"  aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">Modal title</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body" >
                    <div className="container">
                        <div>
                           {etape}
                        </div>
                        
                        
                        

                    </div>  
                    
                    </div>
                    <div className="modal-footer">
                        {button}
                    </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default DebutantModal;

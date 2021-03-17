import axios from 'axios';
import React, { Component } from 'react'
import DebutantModal from './DebutantModal'
import ReponseList from './ReponseList';

export class NiveauDebutant extends Component {
    state={
        question: []
    }

    componentDidMount() {
        this.getQuestions();
    }

    getQuestions = () => {
        axios.get('questiondebutants')
            .then(response => {
                console.log(response.data)
                
                this.setState({
                    question: response.data.questions
                })
            })
    }

    deleteQuestion = (question) => {
        axios.delete(`/questiondebutants/${question.id}`).then(response => {
            if (response.status === 204) {
                this.getQuestions();
            }
        })
    }
    render() {
        const questions = this.state.question
        
        return (
            <div>
                
                <div className="x_panel">
                    <div className="x_title">
                    <h2>Test Chauffeur <small>Niveau débutant </small></h2>
                    <div className="clearfix"></div>
                    </div>
                    <div className="x_content">

                    <table className="table">
                        <thead>
                        <tr>
                            <th>Numero</th>
                            <th>Test</th>
                            <th>Reponse</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {questions && questions.map(question => {
                            return (
                            <>
                                <tr>
                            
                                    <th scope="row">{question.id} </th>
                                        <td>{question.question} </td>
                                        <td><ReponseList data={question.id} /> </td>
                                    <td>  
                                        
                                        <ul className="nav navbar-right panel_toolbox">
                                            <li> <a className="btn btn-danger" type="button" role="button" onClick={() => this.deleteQuestion(question)} >
                                                <i className="fa fa-trash" ></i>
                                                </a>
                                            </li>
                                            
                                            <li> <a className="btn btn-primary" role="button">
                                                    <i className="fa fa-paper-plane-o"></i>
                                                    </a>
                                            </li>
                                        </ul>
                                    </td>
                                </tr>
                            </>   
                        )})}
                        </tbody>
                    </table>
                    <center><DebutantModal /></center>
                    </div>
                </div>

            </div>
        )
    }
}

export default NiveauDebutant

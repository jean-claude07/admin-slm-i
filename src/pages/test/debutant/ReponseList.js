import React, { Component } from 'react'
import axios from 'axios';

export class ReponseList extends Component {
    state={
        reponse: {}
    }

    componentDidMount() {
        this.getReponse();
    }

    getReponse = () => {
        axios.get(`questiondebutants/${this.props.data}`)
            .then(response => {
             
                this.setState({
                    reponse: response.data.reponse
                })
            })
    }
    render() {
        const reponse = this.state.reponse
        let empty;
        if(this.state.reponse == null){
            empty = (
                <span className="text-danger">Rien</span>
            )
        }else{
            empty = (
                <span className="text-success">{reponse.reponse}</span> 
            )
        }
        return (
            <div>
                {empty}
            </div>
        )
    }
}

export default ReponseList

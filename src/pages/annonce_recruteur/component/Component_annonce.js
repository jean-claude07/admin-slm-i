import React, { Component } from 'react'
import Apropos from '../apropos/Apropos'
import Recruteur_about from '../contact_recruteure/Recruteur_about'
import Edit from '../modifier/Edit'

export class Component_annonce extends Component {
    state={
        routes: ''
    }

    handlePropos = () => {
        this.setState({
            routes: 1
        })
    }

    handleRecruteure = () => {
        this.setState({
            routes: 2
        })
    }

    handleEdit = () => {
        this.setState({
            routes: 3
        })
    }
    render() {
        let route;
        if(this.state.routes === 1){
            route = (
                <Apropos annonce={this.props.annonces} />
            )
        }else if(this.state.routes === 2){
            route = (
                <Recruteur_about annonce={this.props.annonces} />
            )
        }else if(this.state.routes === 3 ){
            route = (
                <Edit annonce={this.props.annonces}/>
            )
        }else{
            route = (
                <Apropos annonce={this.props.annonces}/>
            )
        }
        return (
            <>
                <ul className="nav nav-tabs bar_tabs" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link active" data-toggle="tab" href="#home" role="tab" 
                        aria-controls="home" aria-selected="true" onClick={this.handlePropos}>A propos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="tab" href="#profile" role="tab" 
                        aria-controls="profile" aria-selected="false" onClick={this.handleRecruteure}>Profile recruteure</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="tab" href="#contact" role="tab" 
                        aria-controls="contact" aria-selected="false" onClick={this.handleEdit}>Modifier</a>
                    </li>
                </ul>
                <div className="x_content">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card-box table-responsive">                                                            
                                {route}
                            </div>
                    </div>
                </div>
                </div>
            </>
        )
    }
}

export default Component_annonce

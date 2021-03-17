import React, { Component } from 'react';

export class Apropos extends Component {
    state={
        backgroundColor: ''
    }

    handleClick1 = () => {
        this.setState({
            backgroundColor: "green"
        })
    }

    handleClick2 = () => {
        this.setState({
            backgroundColor: "blue"
        })
    }

    handleClick3 = () => {
        this.setState({
            backgroundColor: "red"
        })
    }

    handleClick4 = () => {
        this.setState({
            backgroundColor: "orange"
        })
    }
    render() {
        var annonce = this.props.annonce
        return (
            <div>
                <div class="x_content">
                    <div class="col-md-12 col-sm-12 ">
                        <div class="col-md-7 col-sm-7 ">
                            <div class="product-image">
                                <img src={`http://apimanageur.herokuapp.com/${annonce.annoncephoto.url}`} />
                            </div>
                            <div class="product_gallery">
                                <a style={this.state}>
                                    <img src={`http://apimanageur.herokuapp.com/${annonce.annoncephoto.url}`}  />
                                </a>
                                <a style={this.state}>
                                    <img src={`http://apimanageur.herokuapp.com/${annonce.annoncephoto.url}`} />
                                </a>
                                <a style={this.state}>
                                    <img src={`http://apimanageur.herokuapp.com/${annonce.annoncephoto.url}`} />
                                </a>
                            </div>
                        </div>
                        <div class="col-md-5 col-sm-5 ">
                            <h3 class="prod_title">Post: {annonce.poste} </h3>

                            <div>
                                <ul>
                                    <li>
                                        {annonce.contact}
                                    </li>
                                    <li>
                                        {annonce.email}
                                    </li>
                                    <li>
                                        {annonce.reference}
                                    </li>
                                    <li>
                                        {annonce.etablisment}
                                    </li>
                                    <li>
                                        {annonce.contrat}
                                    </li>
                                    <li>
                                        {annonce.province}
                                    </li>
                                    <li>
                                        {annonce.libelle}
                                    </li>
                                    <li>
                                        {annonce.pretention}
                                    </li>
                                    <li>
                                        {annonce.description}
                                    </li>
                                    <li>
                                        {annonce.date_limite}
                                    </li>
                                    <li>
                                        {annonce.profil_rechercher}
                                    </li>
                                    <li>
                                        {annonce.contact}
                                    </li>
                                </ul>
                            </div>
                            <br />

                            <div class="">
                                <h2>Available Colors</h2>
                                <ul class="list-inline prod_color display-layout">
                                <li>
                                    <a onClick={this.handleClick1}>
                                        <p>Green</p>
                                        <div class="color bg-green"></div>
                                    </a>
                                </li>
                                <li>
                                    <p>Blue</p>
                                    <div class="color bg-blue" onClick={this.handleClick2}></div>
                                </li>
                                <li>
                                    <p>Red</p>
                                    <div class="color bg-red" onClick={this.handleClick3}></div>
                                </li>
                                <li>
                                    <p>Orange</p>
                                    <div class="color bg-orange" onClick={this.handleClick4}></div>
                                </li>

                                </ul>
                            </div>
                            <br />

                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Apropos;

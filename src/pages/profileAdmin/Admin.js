import React, { Component } from 'react';
import {Formik, Form, Field} from 'formik';
import ErrorField from '../../components/ErrorField';
import * as Yup from 'yup';
import axios from 'axios';

const AdminSchema = Yup.object().shape({
	nom: Yup.string()
		.min(3, " Votre nom trop court.")
		.required("veuiller saisir votre Nom."),
	prenom: Yup.string()
		.min(3, "Votre prenom est trop court.")
		.required("Veuiller saisir votre prenom."),
	email: Yup.string()
		.lowercase()
		.email('Email invalide  (^_^)')
		.required("Veuiller saisir votre email."),
	password: Yup.string()
		.min(6, 'Le mot de passe minimum est 6 caractère.')
		.required("Veuiller saisir votre mot de passe."),
	confirm: Yup.string()
		.required("Veuiller saisir votre mot de passe de confirmation.")
		.oneOf([Yup.ref('password')], 'Mot de psse de confirmation incorect.'),
	
});



export class Admin extends Component {
    state={
        pdp: null,
        admins: []
    }

    handleChange = e => {
        this.setState({
            pdp: e.target.files[0],
            
        })
    }

    componentDidMount(){
        this.getAdmins();
    }

    getAdmins = () => {
        axios.get('admins').then(response => {
            this.setState({
                admins: response.data
            })
        })
    }
    render() {
        console.log(this.state.admins)
        const admins = this.state.admins
        return (
            <>
            <div className="content-general">  
                <div className="col-md-12 col-sm-12 ">
                    <div className="panel-content">
                    
                        <div className="col-md-6 col-sm-6  profile_details">
                        {admins && admins.map(admin => { 
                            let pdp;
                            if(admin.pdpadmin.url){
                                pdp = (
                                    <img  src={`http://apimanageur.herokuapp.com/${admin && admin.pdpadmin.url}`} alt="" className="img-circle img-fluid" height="350px" width="500px"/>
                                )
                            }else{
                                pdp = (
                                    <img src="images/img.jpg" alt="" className="img-circle img-fluid"/>
                                )
                            };
                           
                            let enligne;
                            if(sessionStorage.id == admin.id){
                                enligne = (
                                    <span>🔴</span>
                                )
                            };
                            return ( 
                            <div className="well profile_view">
                                <div className="col-sm-12">
                                    <h4 className="brief"><i>ADMINISTRATEUR {enligne} </i></h4>
                                    <div className="left col-sm-7">
                                    <h3><strong>{admin.nom}</strong> {admin.prenom} </h3>
                                    <p><strong>About: </strong> administrateur de SLM-I </p>
                                    <ul className="list-unstyled">
                                        <li><i className="fa fa-building"></i> Address e-mail: </li>
                                        <li><code>==    </code> {admin.email} </li>
                                    </ul>
                                    </div>
                                    <div className="right col-sm-5 text-center">
                                        {pdp}
                                    </div>
                                </div>
                                <div className=" bottom text-center">
                                    <div className=" col-sm-6 emphasis">
                                    <p className="ratings">
                                        <a>4.0</a>
                                        <a href="#"><span className="fa fa-star"></span></a>
                                        <a href="#"><span className="fa fa-star"></span></a>
                                        <a href="#"><span className="fa fa-star"></span></a>
                                        <a href="#"><span className="fa fa-star"></span></a>
                                        <a href="#"><span className="fa fa-star-o"></span></a>
                                    </p>
                                    </div>
                                    <div className=" col-sm-6 emphasis">
                                    <button type="button" className="btn btn-success btn-sm"> <i className="fa fa-user">
                                        </i> <i className="fa fa-comments-o"></i> </button>
                                    <button type="button" className="btn btn-primary btn-sm">
                                        <i className="fa fa-user"> </i> View Profile
                                    </button>
                                    </div>
                                </div>
                            </div>)})}
                        </div>

                            {/* #addProphile */}
                            <div className="col-md-6 col-sm-6  profile_details">
                                <div className="well profile_view">
                                    <div className="col-md-12 col-sm-12">
                                    
                                         <h2>Ajouter  <small>une autre  compte administrateur    </small></h2>
                                        <div className="x_title">
                                                  
                                        </div>
                                        <div className="x_content">
                                            <br />
                                            <Formik
                                            initialValues={{
                                                nom: '',
                                                prenom: '',
                                                email: '',
                                                password: '',
                                                pdp: null,
                                                confirm: ''
                                            }}
                                            validationSchema={AdminSchema}
                                            onSubmit={(values) => {
                                                const formData = new FormData();
    
                                                formData.append('pdpadmin', this.state.pdp )
                                                formData.append('nom', values.nom)
                                                formData.append('prenom', values.prenom)
                                                formData.append('email', values.email)
                                                formData.append('password', values.password)
    
                                                axios.post('admins', formData).then(response => {
                                                    console.log(response)
                                                })
                                            }}
                                            >
                                            {({errors, touched}) => (
                                                <Form id="demo-form2" data-parsley-validate className="form-horizontal form-label-left">
                                                    <div>
                                                    <label className="col-form-label" for="last-name"> Photo <span className="required"><code>*</code> :</span>
                                                    </label>
                                                        <div className="item form-group">
                                                            <div className="col-md-12 col-sm-12 ">
                                                            <span className="glyphicon glyphicon-cloud-upload" aria-hidden="true"></span>
                                                                <Field type="file" id="first-name" name="pdp" required="required" onChange={this.handleChange} />
                                                                
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                    <label className="col-form-label" for="last-name"> Nom <span className="required"><code>*</code> :</span>
                                                    </label>
                                                        <div className="item form-group">
                                                        
                                                            <div className="col-md-12 col-sm-12 ">
                                                                <Field type="text" id="first-name" name="nom" className="form-control " placeholder="Nom" autoCapitalize />
                                                                <ErrorField errors={errors} touched={touched} row="nom"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                    <label className="col-form-label" for="last-name">Prenom <span className="required"><code>*</code> :</span>
                                                    </label>
                                                        <div className="item form-group">
                                                        
                                                            <div className="col-md-12 col-sm-12 ">
                                                                <Field type="text" id="first-name" name="prenom" className="form-control " placeholder="Prenom"/>
                                                                <ErrorField errors={errors} touched={touched} row="prenom"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                    <label className="col-form-label" for="last-name">E-mail <span className="required"><code>*</code> :</span>
                                                    </label>
                                                        <div className="item form-group">
                                                        
                                                            <div className="col-md-12 col-sm-12 ">
                                                                <Field type="email" id="first-name" name="email" className="form-control " placeholder="E-mail"/>
                                                                <ErrorField errors={errors} touched={touched} row="email"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                    <div>
                                                    <label className="col-form-label" for="last-name">Mot de passe <span className="required"><code>*</code> :</span>
                                                    </label>
                                                        <div className="item form-group">
                                                        
                                                            <div className="col-md-12 col-sm-12 ">
                                                                <Field type="password" id="first-name" name="password" className="form-control " placeholder="Mot de passe"/>
                                                                <ErrorField errors={errors} touched={touched} row="password"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                    <label className="col-form-label" for="last-name">Mot de passe de confirmation <span className="required"><code>*</code> :</span>
                                                    </label>
                                                        <div className="item form-group">
                                                        
                                                            <div className="col-md-12 col-sm-12 ">
                                                                <Field type="password" id="first-name" name="confirm" className="form-control " placeholder="Mot de passe de confirmation"/>
                                                                <ErrorField errors={errors} touched={touched} row="confirm"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="ln_solid"></div>
                                                    <div className="item form-group">
                                                        <div className="col-md-12 col-sm-12 offset-md-3">
                                                            <button className="btn btn-primary" type="reset">Reset</button>
                                                            <input type="submit" className="btn btn-success" values="Enregistrer"/>
                                                        </div>
                                                    </div>

                                                </Form>)}
                                            </Formik>
                                        </div>
                                    
                                    </div>
                                </div>
                            </div>
                        </div>

                </div>
                
            </div>
        </>
        )
    }
}

export default Admin;

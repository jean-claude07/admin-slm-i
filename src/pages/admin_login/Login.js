import React, { Component } from 'react'
import {Formik, Form, Field} from 'formik';
import './login.css'
import axios from 'axios'

export class Login extends Component {
    state={
        message: ''
    }
    render() {
        console.log(this.state.message)
        const message = this.state.message
        return (
            <div className="login">
               <div>
                <a className="hiddenanchor" id="signin"></a>

                <div className="login_wrapper">
                    <div className="animate form login_form">
                    <Formik
                    initialValues={{
                        email: '',
                        password: ''
                    }}
                    onSubmit={(values) => {
                        axios.post('login', values).then(response => {
                            if (response.status === 200) {
                                console.log(response.data)
                                localStorage.setItem('token', response.data.token);
                                sessionStorage.setItem('id', response.data.admin.id);
                                window.location.reload();
                            }else if (response.status === 202) {
                                this.setState({
                                    message: response.data.message
                                })
                            }
                        })
                    }}
                    >   
                        <section className="login_content">
                            <Form>
                            <h1>Login Form</h1>
                            <div>
                                <Field type="email" className="form-control" placeholder="Email" name="email" required />
                            </div>
                            <div>
                                <Field type="password" className="form-control" placeholder="Password" name="password" required />
                            </div>
                            <div className="error-login">{message} </div>
                            <div>
                                <button className="btn btn-default submit">Log in</button>
                                <a className="reset_pass" href="#">Lost your password?</a>
                            </div>

                            <div className="clearfix"></div>

                            <div className="separator">
                                <div className="clearfix"></div>
                                <br />

                                <div>
                                <h1><i className="fa fa-paw"></i>  SLM-I</h1>
                                <p>Lotissemment Kanto Ambohijanaka</p>
                                </div>
                            </div>
                            </Form>
                        </section>
                    </Formik>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default Login


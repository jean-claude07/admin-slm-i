import React, { Component } from 'react';
import NiveauDebutant from './debutant/NiveauDebutant';
import NiveauIntermediaire from './intermediaire/NiveauIntermediaire';

import './test.css'
class Test extends Component {
    render() {
        return (
            <div>
                <div className="col-md-12 col-sm-12 " id="general">
                <div className="panel-content">
                <div className="test_panel">
                <div className="right_col" role="main">
                  <div className="">
                    <div className="page-title">
                      <div className="title_left">
                        <h3>Liste <small>Test chauffeur polle-emploie SLMI</small></h3>
                      </div>
                    </div>

                    <div className="clearfix"></div>

                    <div className="row" id="block_panel">
                      <div className="col-md-6 col-sm-6  ">
                        <NiveauDebutant/>
                      </div>
                      <div className="clearfix"></div>
                      <div className="col-md-6 col-sm-6  ">
                        <NiveauIntermediaire/>
                      </div>
                      

                      <div className="clearfix"></div>

                      <div className="col-md-6 col-sm-6  ">
                        <div className="x_panel">
                          <div className="x_title">
                            <h2>Test Chauffeur <small>Niveau Confirmer</small></h2>
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
                                <tr>
                                  <th scope="row">1</th>
                                  <td>Vitesse maximum taxi-brousse?</td>
                                  <td>75 Km/h</td>
                                  <td><ul className="nav navbar-right panel_toolbox">
                                            <li> <a className="btn btn-danger" role="button">
                                                <i className="fa fa-trash"></i>
                                                </a>
                                            </li>
                                          
                                            <li> <a className="btn btn-primary" role="button">
                                                  <i className="fa fa-paper-plane-o"></i>
                                                  </a>
                                            </li>
                                        </ul></td>
                                </tr>
                              </tbody>
                            </table>

                          </div>
                        </div>
                      </div> 


                      

                      <div className="clearfix"></div>
                      <div className="col-md-6 col-sm-6  ">
                        <div className="x_panel">
                          <div className="x_title">
                            <h2>Test Chauffeur <small>Niveau Expert</small></h2>
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
                                <tr>
                                  <th scope="row">1</th>
                                  <td>Vitesse maximum taxi-brousse?</td>
                                  <td>75 Km/h</td>
                                  <td><ul className="nav navbar-right panel_toolbox">
                                            <li> <a className="btn btn-danger" role="button">
                                                <i className="fa fa-trash"></i>
                                                </a>
                                            </li>
                                          
                                            <li> <a className="btn btn-primary" role="button">
                                                  <i className="fa fa-paper-plane-o"></i>
                                                  </a>
                                            </li>
                                        </ul></td>
                                </tr>
                              </tbody>
                            </table>

                          </div>
                        </div>
                      </div> 


                      

                      <div className="clearfix"></div>

                      <div className="col-md-12 col-sm-12  ">
                        <div className="x_panel">
                          <div className="x_title">
                            <h2>Liste test<small>publié dans le page dans l'espace chauffeur</small></h2>
                            <div className="clearfix"></div>
                          </div>

                          <div className="x_content">

                            <p>Add class <code>bulk_action</code> to table for bulk actions options on row select</p>

                            <div className="table-responsive">
                              <table className="table table-striped jambo_table bulk_action">
                                <thead>
                                  <tr className="headings">
                                 
                                    <th className="column-title">Test </th>
                                    <th className="column-title">Niveau</th>
                                    <th className="column-title no-link last"><span className="nobr">Action</span>
                                    </th>
                                  </tr>
                                </thead>

                                <tbody>
                                  <tr className="even pointer">
                              
                                    <td className=" ">Vitesse maximum taxi-brousse?</td>
                                    <td className=" ">Niveau Expert </td>
                                    <td>
                                      <div className="content_td"><ul className="nav navbar-right panel_toolbox">
                                            <li> <a className="btn btn-danger" role="button">
                                                <i className="fa fa-trash"></i>
                                                </a>
                                            </li>
                                            </ul></div>
                                        </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                      
                    
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12 col-sm-12  ">
                        <div className="x_panel">
                          <div className="x_title">
                            <h2>Note Conduite</h2>
                            <div className="clearfix"></div>
                          </div>

                          <div className="x_content">

                            <p>Espace reserver au Admnistrateur</p>

                            <div className="table-responsive">
                              <table className="table table-striped jambo_table bulk_action">
                                <thead>
                                  <tr className="headings">
                                 
                                    <th className="column-title">Nom du Candidat </th>
                                    <th className="column-title">Ms Rado</th>
                                    <th className="column-title">Niveau</th>
                                    <th className="column-title no-link last"><span className="nobr">Action</span>
                                    </th>
                                  </tr>
                                </thead>

                                <tbody>
                                  <tr className="even pointer">
                              
                                    <td className=" ">Eric</td>
                                    <td className=" ">10/20</td>
                                    <td className=" "> Expert </td>
                                    <td>
                                      <div className="content_td"><ul className="nav navbar-right panel_toolbox">
                                            <li> <a className="btn btn-danger" role="button">
                                                <i className="fa fa-trash"></i>
                                                </a>
                                            </li>
                                            <li> <a className="btn btn-primary" role="button">
                                              <i class="fa fa-edit"></i>
                                                </a>
                                            </li>
                                            
                                            </ul></div>
                                        </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                      
                    
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default Test;

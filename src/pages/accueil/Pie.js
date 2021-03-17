import React, { Component } from 'react'
import '../accueil/Pie.css'

export class Pie extends Component {
    state={
        1: {
            chauffeur: '',
            rotate: 'rotate(0.0000, 220, 220)',
            fill: '#FF5C00',
            transform: '0.1'
        },
        2: {
            recruteur: '',
            rotate: 'rotate(0.0000, 220, 220)',
            fill: '#9245FF',
            transform: '0.1'
        },
        3: {
            Admin: '',
            rotate: 'rotate(0.0000, 220, 220)',
            fill: '#FF234B',
            transform: '0.1'
        }
    }
    render() {
        return (
            
            <div className="content">
                <div className="questionblock">
                    <ul>
                        <li>user</li>
                    </ul>
                </div>
      
                <div className="chartblock">
                    <div className="chartpie" style={{width: '450px'}} >
                        <svg className="chartPieChaunck" width="440px" height="440px" viewBox="0 0 440 440" xmlns="http://www.w3.org/svg">
                            <defs>
                                <g id="overlay" >
                                    <rect x="219" y="20" height="200" width="2" fill="#FFF" >

                                    </rect>
                                </g>
                                <mask id="wedge-maske" fill="withe">
                                    <path transform="translate(20, 20)" d="MD3 7.241a200.006 200.006 0 01173.551-.865L200.004 200 112.33 20.241z" fillRule="nonezero">

                                    </path>
                                </mask>
                                <circle cx="220" cy="2200" fill="#E3E3E3" strokeWidth="1"></circle>
                                <g transform="rotate(0.0000, 220, 220)">
                                    <g mask="url(#wedge-mask)">
                                        <circle className="slice" cx="220" cy="220" r="220" fill="#FF5C00" style={{transform: '0.1'}} >

                                        </circle>
                                    </g>
                                </g>
                            </defs>
                        </svg>
                    </div>
                </div>
            </div>
           
        )
    }
}

export default Pie

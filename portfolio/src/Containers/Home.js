import React, { Component } from 'react';

export default class Home extends Component {

    render(){

        return(
            <div className="container-fluid h-100 d-flex flex-column justify-content-center">
                <div className="align-self-center align-middle">
                    <div className="row h-100">
                        <h1 className="display-1 text-center">Dean Betty</h1>
                    </div>
                    <div className="row h-100">
                        <blockquote className="blockquote text-center">Fullstack Software Developer</blockquote>
                    </div>
                </div>
            </div>
        )
    }
}
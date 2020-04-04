import React, { Component } from 'react';

export default class Home extends Component {

    render(){

        return(
            <div className="container-fluid" >
                <div className="row" style={{height: '100vh'}}>
                    <div className="container align-self-center">
                        <h1 className="display-1 text-center" style={{margin: '0'}}>Dean Betty</h1>
                        <blockquote className="lead text-center" style={{margin: '0'}}>Fullstack Software Developer</blockquote>
                    </div>
                    {/* <div className="container align-self-center matrix-background">

                    </div> */}
                </div>
            </div>
        )
    }
}
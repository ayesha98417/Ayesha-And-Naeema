import React, { Component } from 'react';


class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="container">
            <div className="row row-content">
                <div className="col-12">
                <h3 > </h3>               
                </div>
                <div className="col-12 col-sm-4 offset-sm-1" >
                        <h3>Our Address</h3>
                        <address style={{fontSize: "1.6rem"}}>
                        121, Faiz Ahmed Faiz Road<br />
                        Sector F-10, Islamabad<br />
                        PAKISTAN<br />
                        <i className="fa fa-phone"></i>: +92-123-4567891<br />
                        <i className="fa fa-fax"></i>: +92-51-8765-4321<br />
                        <i className="fa fa-envelope"></i>: <a href="mailto:BandBeta@gmail.com">BandBeta@gmail.com</a>
                        </address>
                </div>
                <div className="col-12 col-sm-6 offset-sm-1">
                    <h5>Map of our Location</h5>
                </div>
                <div className="col-12 col-sm-11 offset-sm-1">
                    <div className="btn-group" role="group">
                        <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                        <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                        <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                    </div>
                </div>
              </div>
            </div>
         );
    }
}
 
export default Contact ;
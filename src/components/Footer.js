import React from 'react';
import '../App.css';

function Footer(props){
   return( <footer class="footer">
     <h4> Email Us: bandbeta@gmail.com  -- Call Us:+92-51-1234567 <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                        <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                        <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>  </h4>
     
    </footer> );
}

export default Footer;
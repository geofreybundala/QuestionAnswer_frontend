import React, { Component } from 'react';
import MaterialIcon, {colorPalette} from 'material-icons-react';
import {Link} from "react-router-dom";

export default class Welcome extends Component {
    render() {
        return (
                <div className='qn_home'>
                 <div  className="container">
               <div className="row">
                   <div className="col-md-6 col-sm-6  offset-sm-8 offset-md-2 qn_banner_container">
                           <h4 className="qn_banner_text ">Together we </h4>
                           <h5 className="qn_banner_text_small">make our future</h5>
                           <div className="row"> 
                                 <div className="col-8 offset-2">
                              <Link to='/login'> <button className='btn btn-dark qn_banner_btn'>Join us Now <div className="qn_banner_icon"><MaterialIcon icon="arrow_right_alt" color={colorPalette.amber.A700} /></div></button></Link>
                                 </div>
                           </div>
                   </div>
               </div>
            </div>
            </div>
           
        )
    }
}

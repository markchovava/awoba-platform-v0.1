import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import Darkbutton from '../components/Darkbutton';

class Appfooter extends Component {
    render() {
        return (
            <div className="app-footer border-0 shadow-lg bg-woba-primary">
                <Link to="/" className="nav-content-bttn nav-center"><i className="feather-home text-woba-secondary"></i></Link>
                <Link to="/defaultMember" className="nav-content-bttn"><i className="feather-user text-woba-secondary"></i></Link>
                <Link to="/defaultmessage" className="nav-content-bttn" data-tab="chats"><i className="feather-message-square text-woba-secondary"></i></Link>           
                <Darkbutton />
                <Link to="/defaultsettings" className="nav-content-bttn"><img src="assets/images/female-profile.png" alt="user" className="w30 shadow-xss" /></Link>
            </div>        
        );
    }
}

export default Appfooter;
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './main.scss';

import Home from './pages/Home';

import Badge from './pages/Badge';
import Group from './pages/Group';
import Member from './pages/Member';
import Emailopen from './pages/Emailopen';
import Settings from './pages/Settings';
import Account from './pages/Account';
import Contactinfo from './pages/Contactinfo';
import Socialaccount from './pages/Socialaccount';
import Password from './pages/Password';
import Payment from './pages/Payment';
import Notification from './pages/Notification';
import Helpbox from './pages/Helpbox';
import Login from './pages/Login';
import Register from './pages/Register';
import Forgot from './pages/Forgot';
import Notfound from './pages/Notfound';

import Chat from './pages/Chat';
import Videos from './pages/Videos';
import Comingsoon from './pages/Comingsoon';


import Grouppage from './pages/Grouppage';
import Userpage from './pages/Userpage';
import Authorpage from './pages/Authorpage';

import { BrowserRouter, Switch, Route  } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

class Root extends Component{
    render(){
        return(
            <BrowserRouter basename={'/'}>
                <Switch>
                    <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home}/>

                    <Route exact path={`${process.env.PUBLIC_URL}/defaultbadge`} component={Badge}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/defaultgroup`} component={Group}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/defaultemailopen`} component={Emailopen}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/defaultsettings`} component={Settings}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/defaultvideo`} component={Videos}/>                    
                    
                    <Route exact path={`${process.env.PUBLIC_URL}/accountinformation`} component={Account}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/defaultmember`} component={Member}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/contactinformation`} component={Contactinfo}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/socialaccount`} component={Socialaccount}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/password`} component={Password}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/payment`} component={Payment}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/defaultnoti`} component={Notification}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/helpbox`} component={Helpbox}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/login`} component={Login}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/register`} component={Register}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/forgot`} component={Forgot}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/notfound`} component={Notfound}/>

                    <Route exact path={`${process.env.PUBLIC_URL}/defaultmessage`} component={Chat}/>
                    
                    <Route exact path={`${process.env.PUBLIC_URL}/grouppage`} component={Grouppage}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/userpage`} component={Userpage}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/authorpage`} component={Authorpage}/>  
                    <Route exact path={`${process.env.PUBLIC_URL}/comingsoon`} component={Comingsoon}/>                      
                </Switch>
            </BrowserRouter>
        )
    }
};

ReactDOM.render(<Root/>, document.getElementById('root'));
serviceWorker.register();
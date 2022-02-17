import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './main.scss';

import Home from './pages/Home';

import Badge from './pages/Badge';
import Group from './pages/Group';
import Member from './pages/Member';
import Settings from './pages/Settings';
import Account from './pages/Account';
import Contactinfo from './pages/Contactinfo';
import Socialaccount from './pages/Socialaccount';
import Password from './pages/Password';
import Payment from './pages/Payment';
import Notification from './pages/Notification';
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
import AuthRoute from './AuthRoute/AuthRoute';
import { AuthProvider } from './Contexts/AuthContext';
import * as serviceWorker from './serviceWorker';

class Root extends Component{
    render(){
        return(
            <BrowserRouter basename={'/'}>
                <Switch>
                    <AuthProvider>
                        <AuthRoute exact path={`${process.env.PUBLIC_URL}/home`} component={Home}/>

                        <AuthRoute exact path={`${process.env.PUBLIC_URL}/defaultbadge`} component={Badge}/>
                        <AuthRoute exact path={`${process.env.PUBLIC_URL}/defaultgroup`} component={Group}/>
                        <AuthRoute exact path={`${process.env.PUBLIC_URL}/defaultsettings`} component={Settings}/>
                        <AuthRoute exact path={`${process.env.PUBLIC_URL}/defaultvideo`} component={Videos}/>                    
                        
                        <AuthRoute exact path={`${process.env.PUBLIC_URL}/accountinformation`} component={Account}/>
                        <AuthRoute exact path={`${process.env.PUBLIC_URL}/defaultmember`} component={Member}/>
                        <AuthRoute exact path={`${process.env.PUBLIC_URL}/contactinformation`} component={Contactinfo}/>
                        <AuthRoute exact path={`${process.env.PUBLIC_URL}/socialaccount`} component={Socialaccount}/>
                        <AuthRoute exact path={`${process.env.PUBLIC_URL}/password`} component={Password}/>
                        <AuthRoute exact path={`${process.env.PUBLIC_URL}/payment`} component={Payment}/>
                        <AuthRoute exact path={`${process.env.PUBLIC_URL}/defaultnoti`} component={Notification}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/login`} component={Login}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/register`} component={Register}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/forgot`} component={Forgot}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/notfound`} component={Notfound}/>

                        <AuthRoute exact path={`${process.env.PUBLIC_URL}/defaultmessage`} component={Chat}/>
                        
                        <AuthRoute exact path={`${process.env.PUBLIC_URL}/grouppage`} component={Grouppage}/>
                        <AuthRoute exact path={`${process.env.PUBLIC_URL}/userpage`} component={Userpage}/>
                        <AuthRoute exact path={`${process.env.PUBLIC_URL}/authorpage`} component={Authorpage}/>  
                        <Route exact path={`${process.env.PUBLIC_URL}/comingsoon`} component={Comingsoon}/>
                    </AuthProvider>                    
                </Switch>
            </BrowserRouter>
        )
    }
};

ReactDOM.render(<Root/>, document.getElementById('root'));
serviceWorker.register();
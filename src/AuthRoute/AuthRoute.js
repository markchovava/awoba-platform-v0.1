import React from 'react';

// react routing without refresh
import { Route, Redirect } from 'react-router-dom';

// firebase
import { useAuth } from '../Contexts/AuthContext';

const AuthRoute = ({component: Component, ...rest}) => {
    const { user } = useAuth();

    return (
        <Route
            {...rest}
            render = { props => {
                if (user) {
                    return <Component/>
                } else {
                    return <Redirect to={{pathname: "/login", state: {from: props.location}}}/>
                };
            }}
        />
    );
};

export default AuthRoute;
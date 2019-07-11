import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import routes from './router';

function RouteWithSubRoutes(route) {
    return (
        <Route
            path={route.path}
            render={props => (
                // pass the sub-routes down to keep nesting
                <route.component {...props} routes={route.routes} />
            )}
        />
    );
}

export default function App() {
    return (
        <Router>
            <div>
                <Link to="/">Go to react-home</Link>
                <Link to="/react-child">Go to react-child</Link>

                {routes.map((route, i) => (
                    <RouteWithSubRoutes key={i} {...route} />
                ))}
            </div>
        </Router>
    );
}

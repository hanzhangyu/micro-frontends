import React , {lazy, Suspense}from 'react';

function WaitingComponent(Component) {
    return props => (
        <Suspense fallback={<div>Loading...</div>}>
            <Component {...props} />
        </Suspense>
    );
}

export default [
    {
        path: "/react-child",
        component: WaitingComponent(lazy(() => import('../containers/HelloReactChild'))),
    }
];

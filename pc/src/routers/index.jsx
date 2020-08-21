/**
 * @name: index.jsx
 * @author: LIULIU
 * @date: 2020-08-21 14:41
 * @description：index.jsx
 * @update: 2020-08-21 14:41
 */
import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Provider} from 'mobx-react';
import stores from '../stores/index';
import App from '../pages/App.jsx'
const configRoutes = [
    {
        path: '/',
        exact: true,
        main: App,
        meta: {
            title: ''
        }
    }
]
const Routes = () => (
    <Provider {...stores}>
        <BrowserRouter>
            <Switch>
                {
                    configRoutes.map((route, index) => {
                        return <Route key={index} exact={route.exact} path={route.path} onEnter={() => {
                            document.title = route.meta.title
                        }}  component={route.main} />
                    })
                }
            </Switch>
        </BrowserRouter>
    </Provider>
)

export default Routes;

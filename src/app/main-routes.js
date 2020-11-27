import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../views/home/Home'
import Detail from '../views/detail/Detail'
// import Projects from '../views/projects/Projects'
import ScrollToTop from './ScrollToTop'
import About from '../views/about/About'
import { route_constants } from '../components/constants/Routes'

const Routes = () => {
    return (
        <ScrollToTop>
            <Switch>
                <Route exact path={route_constants.HOME} component={Home} />
                <Route exact path={route_constants.ABOUT} component={About} />
                <Route exact path={route_constants.PROJECT} component={Detail} />
            </Switch>
        </ScrollToTop>
    )
}

export default Routes
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom'
import ContactList from '../Pages/ContactList/ContactList'
import ContactPage from '../Pages/ContactPage/ContactPage'



const AppRoutes = () => {
    return (
        <div>
        <Switch>
        <Redirect exact from="/" to="Home" />
          <Route exact path="/Home" render={() =><ContactList/>}/>
          <Route exact path="/Contact" render={() =><ContactPage/>}/>
        </Switch>
        </div>
    )
}

export default AppRoutes

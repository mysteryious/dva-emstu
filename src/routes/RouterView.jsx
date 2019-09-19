import React, { Component } from 'react'
import { Route, Switch, Redirect } from "dva/router"

class RouterView extends Component {
  render() {
    return (
      <Switch>
        {
          this.props.routes.map((item, index) => {
            if (item.redirect) {
              return <Redirect path={item.path} to={item.redirect} key={index}></Redirect>
            } else {
              return <Route path={item.path} key={index} render={(props)=>{
                return  <item.component {...props} routes={item.children}></item.component>
              }}></Route>
            }
          })
        }
      </Switch>
    )
  }
}

export default RouterView



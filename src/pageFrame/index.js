import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import routes from '@/router'



const Sidebar = (props)=>{
  const _data = props.data
  const listItem = _data.map((item) => {
    return <li key={item.path}> <Link to={item.path} >{item.path}</Link> </li>
  })
  return (
    <ul style={{ listStyleType: "none", padding: 0 }}>{listItem}</ul>
  )
}

export default function SidebarExample() {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <div
          style={{
            padding: "10px",
            width: "200px", 
            background: "#f0f0f0"
          }}
        >
          <Sidebar data={routes}></Sidebar>

          {/* <Switch>
            {routes.map((route, index) => (
              // You can render a <Route> in as many places
              // as you want in your app. It will render along
              // with any other <Route>s that also match the URL.
              // So, a sidebar or breadcrumbs or anything else
              // that requires you to render multiple things
              // in multiple places at the same URL is nothing
              // more than multiple <Route>s.
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.sidebar />}
              />
            ))}
          </Switch> */}
        </div>

        <div style={{ flex: 1, padding: "10px" }}>
          <Switch>
            {routes.map((route, index) => (
              // Render more <Route>s with the same paths as
              // above, but different components this time.
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.main />}
              />
            ))}
          </Switch>
        </div>
      </div>
    </Router>
  );
}
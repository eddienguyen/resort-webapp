import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from 'components/Navbar/Navbar';
import indexRoutes from 'routes';
function App() {
  return (
    <>
      <Navbar />
      <Switch>
        {indexRoutes.map((prop, key) => {
          return <Route exact={prop.exact && prop.exact} path={prop.path && prop.path} component={prop.component} key={key} />
        })}
      </Switch>
    </>
  );
}

export default App;

import App from 'App';
import CategoryItemList from 'Components/CategoryItemList/CategoryItemList';
import WrapperComponent from 'Router/Wrapper/WrapperComponent';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const RouteComponent = () => {
  return (
    
    <WrapperComponent>
    <Router>
      
    <Switch>
        <Route path="/veg">
          <CategoryItemList />
        </Route>
        <Route path="/">
          <App />
        </Route>
      </Switch>
      
    </Router>
    
    </WrapperComponent>
  );
};

export default RouteComponent;

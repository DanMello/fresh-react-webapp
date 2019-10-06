import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import App from './components/App';

import useConfig from './hooks/useConfig';

export const ConfigContext = React.createContext();

const renderMergedProps = (component, ...rest) => {
  const finalProps = Object.assign({}, ...rest)
  return (
    React.createElement(component, finalProps)
  );
};

const PropsRoute = ({ component, ...rest }) => {
  return (
    <Route {...rest} render={routeProps => {
      return renderMergedProps(component, routeProps, rest)
    }} />
  );
};

function AppRoutes() {
  
  const { isMobile, url, env } = useConfig(window.location.hostname);
  
  return (
    <ConfigContext.Provider value={{
      isMobile: isMobile,
      url: url,
      env: env
    }}
    >
      <Switch>
        <PropsRoute path="/" exact strict component={App}/>
      </Switch>
    </ConfigContext.Provider>
  );
};

export default AppRoutes;
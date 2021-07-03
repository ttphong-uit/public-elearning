import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomeTemplate from './template/HomeTemplate';
import { routesHome, routesAdmin } from './routes';
import AdminTemplate from './template/AdminTemplate';
// import Admin from './pages/admin/views/Admin';
import PageNotFound from './pages/PageNotFound';
const showAdmin = () => {
  if (routesAdmin && routesAdmin.length) {
    return routesAdmin.map((item, index) => {
      return (
        <AdminTemplate
          key={index}
          path={item.path}
          exact={item.exact}
          Component={(props) => {
            return (
              <item.layout {...props}>
                <item.component {...props} />
              </item.layout>
            );
          }}
        />
      );
    });
  }
};
const showHome = () => {
  if (routesHome && routesHome.length) {
    return routesHome.map((item, index) => {
      return (
        <HomeTemplate
          key={index}
          path={item.path}
          exact={item.exact}
          Component={item.component}
        />
      );
    });
  }
};

function App() {
  return (
    <BrowserRouter basename={process.env.REACT_APP_BASENAME || ''}>
      <div className='App'>
        <Switch>
          {showHome()}
          {showAdmin()}
          {/* <Route path='/admin' exact={true} component={Admin} /> */}
          <Route path='' exact={false} component={PageNotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

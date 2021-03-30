import { Button } from 'antd';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainLayout from './layouts/MainLayout/index';
import MainPage from './pages/MainPage/index';
import SearchPage from './pages/SearchPage/index';

function App() {
  return (
    <div>
      <MainLayout>
        <Switch>
          {/* <MainPage /> */}
          <Route path="/" component={MainPage} exact />
          <Route path="/searchpage/:key" component={SearchPage} exact />
        </Switch>
        {/* <SearchPage /> */}
      </MainLayout>
    </div>
  );
}

export default App;

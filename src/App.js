import { Footer } from 'antd/lib/layout/layout';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header/index';
import Test from './Test';

function App() {
  return (
    <div>
      {/* <SearchBar /> */}
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" component={Test} />
          <Route path="/about1" component={Test} />
          <Route path="/about2" component={Test} />
          <Route path="/about3" component={Test} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;

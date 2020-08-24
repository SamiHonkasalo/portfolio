import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from './layout/Layout';
import LayoutWrapper from './layout/LayoutWrapper';
import Profile from './profile/Profile';
import Technologies from './technologies/Technologies';
import Connect from './connect/Connect';
import Experience from './experience/Experience';
import Education from './education/Education';

import './i18n';

function App() {
  return (
    <LayoutWrapper>
      <div className="App">
        <Layout>
          <Switch>
            <Route path="/" exact>
              <Profile />
            </Route>
            <Route path="/technologies" exact>
              <Technologies />
            </Route>
            <Route path="/experience" exact>
              <Experience />
            </Route>
            <Route path="/education" exact>
              <Education />
            </Route>
            <Route path="/connect" exact>
              <Connect />
            </Route>
          </Switch>
        </Layout>
      </div>
    </LayoutWrapper>
  );
}

export default App;

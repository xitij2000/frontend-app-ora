import 'babel-polyfill';

import {
  APP_INIT_ERROR, APP_READY, subscribe, initialize,
} from '@edx/frontend-platform';
import { AppProvider, ErrorPage } from '@edx/frontend-platform/react';
import React from 'react';
import ReactDOM from 'react-dom';

import Header, { messages as headerMessages } from '@edx/frontend-component-header';
import Footer, { messages as footerMessages } from '@edx/frontend-component-footer';

import { Route } from 'react-router';
import appMessages from './i18n';
import OraDashboardContainer from './ora-dashboard/OraDashboardContainer';
import { Routes } from './data/constants';
import store from './store';

import './index.scss';
import './assets/favicon.ico';

subscribe(APP_READY, () => {
  ReactDOM.render(
    <AppProvider store={store}>
      <Header />
      <Route path={Routes.HOME}>
        <OraDashboardContainer />
      </Route>
      <Footer />
    </AppProvider>,
    document.getElementById('root'),
  );
});

subscribe(APP_INIT_ERROR, (error) => {
  ReactDOM.render(<ErrorPage message={error.message} />, document.getElementById('root'));
});

initialize({
  messages: [
    appMessages,
    headerMessages,
    footerMessages,
  ],
  requireAuthenticatedUser: true,
});

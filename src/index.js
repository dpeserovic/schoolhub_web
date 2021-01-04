import 'mobx-react-lite/batchingForReactDom';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'mobx-react';
import {HistoryAdapter} from 'mobx-state-router';
import {history} from './common/router';
import {RootStore} from './common/stores';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function startApp()
{
  const rootStore = new RootStore();
  const historyAdapter = new HistoryAdapter(rootStore.routerStore.router, history);
  historyAdapter.observeRouterStateChanges();
  renderApp(rootStore);
}

function renderApp(rootStore)
{
  ReactDOM.render(<Provider rootStore = {rootStore}><App/></Provider>, document.getElementById('root'));
}

startApp();
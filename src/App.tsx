import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import { HistoryAdapter } from 'mobx-state-router';

import Shell from './app/Shell';
import { history } from './app/shared/routing/history';
import RootStore from './app/shared/stores/Root.store';

const rootStore = new RootStore();

const historyAdapter = new HistoryAdapter(rootStore.routerStore, history);
historyAdapter.observeRouterStateChanges();

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Provider rootStore={rootStore}>
          <Shell />
        </Provider>
      </div>
    );
  }
}

export default App;

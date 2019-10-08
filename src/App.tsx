import React, { Component } from 'react';
import { HistoryAdapter } from 'mobx-state-router';

import Shell from './app/Shell';
import { history } from './app/shared/routing/history';
import RootStore from './app/shared/stores/Root.store';

const rootStore = new RootStore();
export const StoreContext = React.createContext(rootStore);

const historyAdapter = new HistoryAdapter(rootStore.routerStore, history);
historyAdapter.observeRouterStateChanges();

class App extends Component {
  render() {
    return (
      <div className='App'>
        <StoreContext.Provider value={rootStore}>
          <Shell />
        </StoreContext.Provider>
      </div>
    );
  }
}

export default App;

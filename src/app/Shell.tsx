import React, { Component } from 'react';
import { RouterView } from 'mobx-state-router';

import withStore from './shared/stores/withStore';
import { viewMap } from './shared/routing/viewMap';

import Header from './features/components/Header.component';
import Footer from './features/components/Footer.component';
import RootStore from './shared/stores/Root.store';
import SomeFunctionalComponent from './features/components/SomeFunctional.component';

type ShellProps = {
  rootStore: RootStore;
}

class Shell extends Component<ShellProps> {
  render() {
    const { routerStore } = this.props.rootStore;

    return (
      <div className='Shell'>
        <Header />
        <SomeFunctionalComponent />
        <RouterView routerStore={routerStore} viewMap={viewMap} />
        <Footer />
      </div>
    );
  }
}

export default withStore(Shell);

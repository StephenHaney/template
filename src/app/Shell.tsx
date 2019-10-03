import React, { Component } from 'react';
import { inject } from 'mobx-react';
import { RouterView } from 'mobx-state-router';

import { viewMap } from './shared/routing/viewMap';

import Header from './features/components/Header.component';
import Footer from './features/components/Footer.component';

const Shell = inject('rootStore')(
  class extends Component {
    render() {
      const {
        rootStore: { routerStore }
      }: any = this.props;

      return (
        <div className='Shell'>
          <Header />
          <RouterView routerStore={routerStore} viewMap={viewMap} />
          <Footer />
        </div>
      );
    }
  }
);

export default Shell;

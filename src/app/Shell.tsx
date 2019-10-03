import React, { Component } from 'react';
import { inject } from 'mobx-react';
import { RouterView } from 'mobx-state-router';

import { viewMap } from './shared/routing/viewMap';

const Shell = inject('rootStore')(
  class extends Component {
    render() {
      const {
        rootStore: { routerStore }
      }: any = this.props;

      return (
        <div className='Shell'>
          <RouterView routerStore={routerStore} viewMap={viewMap} />
        </div>
      );
    }
  }
);

export default Shell;

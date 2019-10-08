import React, { Component } from 'react';
import { observer } from 'mobx-react';
import withStore from '../../shared/stores/withStore';

class PageNotFound extends Component {
  render() {
    return (
      <div className='PageNotFound'>
        <h1>Page Not Found</h1>
      </div>
    );
  }
}

export default withStore(observer(PageNotFound));

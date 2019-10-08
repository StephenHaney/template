import React, { Component } from 'react';
import { observer } from 'mobx-react';
import withStore from '../../shared/stores/withStore';

class PageHome extends Component {
  render() {
    return (
      <div className='PageHome'>
        <h1>Page Home</h1>
      </div>
    );
  }
}

export default withStore(observer(PageHome));

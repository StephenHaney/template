import React, { Component } from 'react';
import { observer } from 'mobx-react';
import withStore from '../../shared/stores/withStore';

class Footer extends Component {
  render() {
    return (
      <div className='Footer'>
        <h1>Footer</h1>
      </div>
    );
  }
}

export default withStore(observer(Footer));

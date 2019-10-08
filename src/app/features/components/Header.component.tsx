import React, { Component } from 'react';
import { observer } from 'mobx-react';
import withStore from '../../shared/stores/withStore';

class Header extends Component {
  render() {
    return (
      <div className='Header'>
        <h1>Header</h1>
      </div>
    );
  }
}

export default withStore(observer(Header));
